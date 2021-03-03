import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RunningCrawlDialogComponent} from './running-crawl-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {ConfigObject} from '../../../../shared/models/config';

describe('RunningCrawlDialogComponent', () => {
  let component: RunningCrawlDialogComponent;
  let fixture: ComponentFixture<RunningCrawlDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RunningCrawlDialogComponent],
      imports: [MatDialogModule],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningCrawlDialogComponent);
    component = fixture.componentInstance;
    // FIXME: Unødvendig init?
    component.configObject = new ConfigObject();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
