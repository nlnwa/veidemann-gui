import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowserScriptMultiDialogComponent } from './browserscript-multi-dialog.component';

describe('BrowserScriptMultiDialogComponent', () => {
  let component: BrowserScriptMultiDialogComponent;
  let fixture: ComponentFixture<BrowserScriptMultiDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserScriptMultiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserScriptMultiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
