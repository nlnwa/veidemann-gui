import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlJobDialogComponent } from './crawljob-dialog.component';
import {FormBuilder} from '@angular/forms';

describe('CrawlJobDialogComponent', () => {
  let component: CrawlJobDialogComponent;
  let fixture: ComponentFixture<CrawlJobDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ CrawlJobDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlJobDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
