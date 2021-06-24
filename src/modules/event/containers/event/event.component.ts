import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, merge, Observable, of, Subject} from 'rxjs';
import {ConfigObject, EventObject, Kind} from '../../../../shared/models';
import {AuthService, ErrorService, SnackBarService} from '../../../core';
import {EventService} from '../../services/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {distinctUntilChanged, filter, map, switchMap, takeUntil} from 'rxjs/operators';
import {DeleteDialogComponent} from '../../../config/components';
import {RouterExtraService} from '../../../config/services/router-extra.service';
import {Location} from '@angular/common';
import {EventRef, State} from '../../../../shared/models/event/event.model';
import {EventDialogData} from '../../components/event-dialog/event-dialog.component';
import {EventAlternativeSeedDialogComponent} from '../../components/event-types/event-alternative-seed/event-alternative-seed-dialog/event-alternative-seed-dialog.component';
import {ConfigService} from '../../../commons/services';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, OnDestroy {
  readonly State = State;

  private ngUnsubscribe = new Subject();

  private eventObject: Subject<EventObject>;
  eventObject$: Observable<EventObject>;

  fetchEventObject = true;

  query$: Observable<EventObject>;

  private reload: Subject<void>;

  constructor(private authService: AuthService,
              private eventService: EventService,
              private configService: ConfigService,
              private snackBarService: SnackBarService,
              private errorService: ErrorService,
              private router: Router,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              private routerExtraService: RouterExtraService,
              private location: Location) {
    this.eventObject = new Subject();

    const id$: Observable<string> = route.paramMap.pipe(
      map(paraMap => paraMap.get('id')),
      distinctUntilChanged()
    );

    // eventObject stream based on id
    const event$: Observable<EventRef> = combineLatest([
      id$.pipe(
        // toggle id stream on/off based on passId token
        // (e.g. when saving a eventObject we don't want to
        // refetch eventObject when we set query parameter id -
        // we already got it in the response from the call to save)
        filter(() => {
          if (this.fetchEventObject) {
            return true;
          } else {
            this.fetchEventObject = !this.fetchEventObject;
            return false;
          }
        }))
    ]).pipe(
      map(([id]) => new EventRef({id}))
    );

    const eventObject$: Observable<EventObject> = event$.pipe(
      switchMap(event =>
        event && event.id ? this.eventService.get(event) : of(null))
    );

    this.eventObject$ = merge(this.eventObject.asObservable(), eventObject$);
  }

  get loading$(): Observable<boolean> {
    return this.eventService.loading$;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onUpdateEvent(eventObject: EventObject) {
    this.eventService.save(eventObject)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(event => {
        this.eventObject.next(event);
        this.snackBarService.openSnackBar($localize`:@snackBarMessage.updated:Updated`);
      });
  }

  onDeleteEvent(eventObject: EventObject) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      disableClose: true,
      autoFocus: true,
      data: {eventObject},
    });

    const previousUrl = this.routerExtraService.getPreviousUrl();
    const currentUrl = this.routerExtraService.getCurrentUrl();
    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        switchMap(() => this.eventService.delete(eventObject)),
        filter(deleted => !!deleted)
      )
      .subscribe(() => {
        if (previousUrl !== currentUrl) {
          this.location.back();
        } else {
          this.router.navigate(['../'], {
            relativeTo: this.route,
          }).catch(error => this.errorService.dispatch(error));
        }
        this.snackBarService.openSnackBar($localize`:@snackBarMessage.deleted:Deleted`);
      });
  }

  ngOnInit(): void {
  }

  onAssignToMe(event: EventObject) {
    const eventObject = event;
    const user = this.authService.email;
    eventObject.assignee = user;
    this.eventService.save(eventObject)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(update => {
        this.eventObject.next(update);
        this.snackBarService.openSnackBar('Assigned to user: ' + user);
      });
  }

  onAddAlternativeSeed(eventObject: EventObject) {
    const data: EventDialogData = {eventObject};
    const dialogRef = this.dialog.open(EventAlternativeSeedDialogComponent, {data});

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result.annotation) {
          const updateTemplate = new ConfigObject({kind: Kind.SEED});
          updateTemplate.meta.annotationList = [result.annotation];
          const pathList = ['meta.annotation+'];
          this.configService.updateWithTemplate(updateTemplate, pathList, [result.id]).subscribe(update => {
            this.snackBarService.openSnackBar('Annotation added to seed');
          });
        }
        if (result.closeEvent) {
          eventObject.state = State.CLOSED;
          this.onUpdateEvent(eventObject);
        }
      });
  }
}
