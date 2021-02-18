import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CollectionDialogComponent } from './collection-dialog.component';
import {FormBuilder} from "@angular/forms";

describe('CollectionDialogComponent', () => {
  let component: CollectionDialogComponent;
  let fixture: ComponentFixture<CollectionDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ CollectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
