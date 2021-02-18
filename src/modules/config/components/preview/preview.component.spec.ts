import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreviewComponent } from './preview.component';
import {CommonsModule} from "../../../commons";
import {Router} from "@angular/router";

describe('PreviewComponent', () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Router],
      declarations: [ PreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
