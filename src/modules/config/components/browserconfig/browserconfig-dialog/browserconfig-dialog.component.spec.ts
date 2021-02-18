import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowserConfigDialogComponent } from './browserconfig-dialog.component';

describe('BrowserconfigDialogComponent', () => {
  let component: BrowserConfigDialogComponent;
  let fixture: ComponentFixture<BrowserConfigDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
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
