import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlJobMultiDialogComponent } from './crawljobs-multi-dialog.component';
import {FormBuilder} from '@angular/forms';

describe('CrawlJobMultiDialogComponent', () => {
  let component: CrawlJobMultiDialogComponent;
  let fixture: ComponentFixture<CrawlJobMultiDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ CrawlJobMultiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlJobMultiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
