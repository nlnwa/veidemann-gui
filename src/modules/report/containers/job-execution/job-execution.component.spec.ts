import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {JobExecutionComponent} from './job-execution.component';
import {ActivatedRoute} from "@angular/router";

describe('JobExecutionComponent', () => {
  let component: JobExecutionComponent;
  let fixture: ComponentFixture<JobExecutionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ActivatedRoute],
      declarations: [ JobExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
