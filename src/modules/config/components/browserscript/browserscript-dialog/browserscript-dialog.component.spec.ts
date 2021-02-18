import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowserScriptDialogComponent } from './browserscript-dialog.component';
import {FormBuilder} from '@angular/forms';

describe('BrowserscriptDialogComponent', () => {
  let component: BrowserScriptDialogComponent;
  let fixture: ComponentFixture<BrowserScriptDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ BrowserScriptDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserScriptDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
