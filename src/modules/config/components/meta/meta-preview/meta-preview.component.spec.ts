import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MetaPreviewComponent } from './meta-preview.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from "@angular/cdk/overlay";

describe('MetaPreviewComponent', () => {
  let component: MetaPreviewComponent;
  let fixture: ComponentFixture<MetaPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaPreviewComponent ],
      providers: [MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
