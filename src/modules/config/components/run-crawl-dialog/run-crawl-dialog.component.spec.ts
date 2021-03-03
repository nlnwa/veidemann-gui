import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RunCrawlDialogComponent} from './run-crawl-dialog.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConfigObject} from '../../../../shared/models/config';

describe('RunCrawlDialogComponent', () => {
  let component: RunCrawlDialogComponent;
  let fixture: ComponentFixture<RunCrawlDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ RunCrawlDialogComponent ],
      providers: [
        {provide: MatDialog, useValue: {}},
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunCrawlDialogComponent);
    component = fixture.componentInstance;
    // FIXME: Unødvendig init
    component.configObject = new ConfigObject();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
