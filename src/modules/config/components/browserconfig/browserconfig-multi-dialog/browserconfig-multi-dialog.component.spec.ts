import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowserConfigMultiDialogComponent } from './browserconfig-multi-dialog.component';
import {FormBuilder} from "@angular/forms";

describe('BrowserconfigMultiDialogComponent', () => {
  let component: BrowserConfigMultiDialogComponent;
  let fixture: ComponentFixture<BrowserConfigMultiDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ BrowserConfigMultiDialogComponent ]
      declarations: [ BrowserConfigMultiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserConfigMultiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
