import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnnotationComponent } from './annotation.component';
import {FormBuilder} from '@angular/forms';

describe('AnnotationComponent', () => {
  let component: AnnotationComponent;
  let fixture: ComponentFixture<AnnotationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ AnnotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
