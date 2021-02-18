import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RunCrawlDialogComponent } from './run-crawl-dialog.component';
import {InjectionToken} from "@angular/core";

describe('RunCrawlDialogComponent', () => {
  let component: RunCrawlDialogComponent;
  let fixture: ComponentFixture<RunCrawlDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InjectionToken],
      declarations: [ RunCrawlDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunCrawlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
