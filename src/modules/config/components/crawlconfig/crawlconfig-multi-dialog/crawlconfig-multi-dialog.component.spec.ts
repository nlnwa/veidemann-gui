import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlConfigMultiDialogComponent } from './crawlconfig-multi-dialog.component';
import {FormBuilder} from "@angular/forms";

describe('CrawlConfigMultiDialogComponent', () => {
  let component: CrawlConfigMultiDialogComponent;
  let fixture: ComponentFixture<CrawlConfigMultiDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ CrawlConfigMultiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlConfigMultiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
