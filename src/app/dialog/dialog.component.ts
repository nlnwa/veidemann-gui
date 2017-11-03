import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ErrorService} from '../commons/error.service';
import {ErrorDialogComponent} from './error-dialog/error-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit {

  constructor(private dialog: MatDialog, private errorService: ErrorService) {
    // noop
  }

  ngOnInit(): void {
    this.errorService.error$.subscribe((error) => {
      if (this.dialog.openDialogs.length > 0) {
        this.dialog.closeAll();
      } else {
        this.dialog.open(ErrorDialogComponent, {data: {error}});
      }
    });
  }
}