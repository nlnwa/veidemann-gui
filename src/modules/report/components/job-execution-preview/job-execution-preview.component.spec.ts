import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JobExecutionPreviewComponent } from './job-execution-preview.component';
import {JobExecutionStatus} from '../../../../shared/models';
import {NgxFilesizeModule} from 'ngx-filesize';
import {MatCardModule} from '@angular/material/card';
import {ChartsModule} from 'ng2-charts';

describe('JobExecutionPreviewComponent', () => {
  let component: JobExecutionPreviewComponent;
  let fixture: ComponentFixture<JobExecutionPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JobExecutionPreviewComponent ],
      imports: [NgxFilesizeModule, MatCardModule, ChartsModule],
      providers: []
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
