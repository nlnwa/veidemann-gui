import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeedMultiDialogComponent } from './seed-multi-dialog.component';
import {FormBuilder} from '@angular/forms';

describe('SeedMultiDialogComponent', () => {
  let component: SeedMultiDialogComponent;
  let fixture: ComponentFixture<SeedMultiDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ SeedMultiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedMultiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
