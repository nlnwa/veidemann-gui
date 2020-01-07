import {DataSource, SelectionModel} from '@angular/cdk/collections';
import {ContentChildren, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef, ViewChild} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {MatSort, MatSortHeader, Sort, SortDirection} from '@angular/material/sort';
import {ActionDirective} from '../../directives/action/action.directive';
import {first, map, shareReplay} from 'rxjs/operators';
import {combineLatest, Observable} from 'rxjs';

export interface ListItem {
  id: string;
}

export abstract class BaseListComponent<T extends ListItem> implements OnChanges {

  @Input()
  pageLength = 0;

  @Input()
  pageSize = 10;

  @Input()
  pageIndex = 0;

  @Input()
  pageOptions = [5, 10, 25, 50, 100];

  @Input()
  sortDirection: SortDirection = '';

  @Input()
  sortActive: 'name';

  @Input()
  displayedColumns: string[] = ['select', 'name', 'description', 'action'];

  @Input()
  multiSelect = true;

  @Input()
  dataSource: DataSource<T>;

  @Output()
  selectedChange: EventEmitter<T | T[]>;

  @Output()
  selectAll: EventEmitter<void>;

  @Output()
  sort: EventEmitter<Sort>;

  @Output()
  page: EventEmitter<PageEvent>;

  @ViewChild(MatSort, {static: true}) matSort: MatSort;

  @ContentChildren(ActionDirective, {read: TemplateRef}) actionButtonTemplates;

  // selection
  selection = new SelectionModel<T>(true, []);
  allSelected = false;
  isAllInPageSelected$: Observable<boolean>;
  protected selectedRow: T;

  protected constructor() {
    this.sort = new EventEmitter<Sort>();
    this.selectedChange = new EventEmitter<T | T[]>();
    this.selectAll = new EventEmitter<void>();
    this.page = new EventEmitter<PageEvent>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataSource && this.dataSource) {
      this.isAllInPageSelected$ = combineLatest([
        this.selection.changed.asObservable(),
        this.dataSource.connect(null),
      ]).pipe(
        map(([_, rows]) =>
          rows.length === this.selection.selected.length && rows.length > 0),
        shareReplay(1)
      );
    }

    if (changes.sortDirection && changes.sortActive) {
      // ugly hack see https://github.com/angular/components/issues/10242 and https://github.com/angular/components/issues/10524
      const sortHeader = (this.matSort.sortables.get(this.sortActive) as MatSortHeader);
      if (sortHeader) {
        sortHeader._setAnimationTransitionState({toState: 'active'});
      }
    }
  }

  reset() {
    this.selection.clear();
    this.selectedRow = null;
  }

  onSortChange(sort: Sort) {
    this.reset();
    this.sort.emit(sort);
  }

  onRowClick(item: T) {
    this.allSelected = false;
    this.selection.clear();
    this.selectedRow = item;
    this.selectedChange.emit(this.selectedRow);
  }

  onMasterCheckboxToggle(checked: boolean) {
    this.selectedRow = null;
    this.allSelected = false;
    if (checked) {
      this.dataSource.connect(null)
        .pipe(first())
        .subscribe(rows => {
          this.selection.select(...rows);
          this.selectedChange.emit(this.selection.selected);
          // this.cdr.detectChanges();
        });
    } else {
      this.selection.clear();
      this.selectedChange.emit([]);
    }
  }

  onCheckboxToggle(item: T) {
    this.selectedRow = null;
    this.allSelected = false;
    this.selection.toggle(item);
    this.selectedChange.emit(this.selection.selected);
  }

  onSelectAll() {
    this.allSelected = true;
    this.selectAll.emit();
  }

  onDeselectAll() {
    this.allSelected = false;
    this.onMasterCheckboxToggle(false);
  }

  onPage(pageEvent: PageEvent) {
    this.reset();
    this.page.emit(pageEvent);
  }

  isChecked(item: T): boolean {
    return this.selection.selected.find(selected => selected.id === item.id) !== undefined;
  }

  isSelected(item: T): boolean {
    return this.selectedRow ? this.selectedRow.id === item.id : false;
  }
}
