import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {JobExecutionState, JobExecutionStatus} from '../../../commons/models/report';

@Component({
  selector: 'app-job-status',
  templateUrl: './job-status.component.html',
  styleUrls: ['./job-status.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobStatusComponent {
  readonly JobExecutionState = JobExecutionState;

  @Input()
  jobExecutionStatus: JobExecutionStatus;

  displayedColumns: string[] = ['state', 'count'];

  getExecMap(executionStateMap: Map<string, number>) {
    const datasource = [];
    for (const [key, value] of executionStateMap) {
      datasource.push({key, value});
    }
    return datasource;
  }
}
