import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowserConfigDialogComponent } from './browserconfig-dialog.component';
import {FormBuilder} from '@angular/forms';

describe('BrowserconfigDialogComponent', () => {
  let component: BrowserConfigDialogComponent;
  let fixture: ComponentFixture<BrowserConfigDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ BrowserConfigDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
