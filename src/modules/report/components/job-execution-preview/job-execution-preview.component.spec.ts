import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JobExecutionPreviewComponent } from './job-execution-preview.component';
import {JobExecutionStatus} from '../../../../shared/models';
import {ChartsModule} from 'ng2-charts';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {CommonsModule} from '../../../commons';

describe('JobExecutionPreviewComponent', () => {
  let component: JobExecutionPreviewComponent;
  let fixture: ComponentFixture<JobExecutionPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JobExecutionPreviewComponent ],
      imports: [ CommonsModule, ChartsModule, RouterTestingModule],
      providers: [
        {provide: ActivatedRoute, useValue: {}}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobExecutionPreviewComponent);
    component = fixture.componentInstance;
    component.jobExecutionStatus = new JobExecutionStatus();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
