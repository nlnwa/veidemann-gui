import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PolitenessConfigMultiDialogComponent } from './politenessconfig-multi-dialog.component';
import {FormBuilder} from '@angular/forms';

describe('PolitenessConfigMultiDialogComponent', () => {
  let component: PolitenessConfigMultiDialogComponent;
  let fixture: ComponentFixture<PolitenessConfigMultiDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ PolitenessConfigMultiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitenessConfigMultiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
