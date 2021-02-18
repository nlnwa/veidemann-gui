import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PolitenessConfigDialogComponent } from './politenessconfig-dialog.component';
import {FormBuilder} from '@angular/forms';

describe('PolitenessConfigDialogComponent', () => {
  let component: PolitenessConfigDialogComponent;
  let fixture: ComponentFixture<PolitenessConfigDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ PolitenessConfigDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitenessConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
