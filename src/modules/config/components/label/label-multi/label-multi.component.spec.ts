import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LabelMultiComponent } from './label-multi.component';
import {LabelService} from "../../../services";

describe('LabelMultiComponent', () => {
  let component: LabelMultiComponent;
  let fixture: ComponentFixture<LabelMultiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LabelService],
      declarations: [ LabelMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
