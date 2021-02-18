import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlExecutionStatusComponent } from './crawl-execution-status.component';
import {CommonsModule} from '../../../commons';
import {ConfigurationsModule} from '../../configurations.module';
import {ReportModule} from '../../../report/report.module';

describe('CrawlExecutionStatusComponent', () => {
  let component: CrawlExecutionStatusComponent;
  let fixture: ComponentFixture<CrawlExecutionStatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReportModule],
      declarations: [ CrawlExecutionStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlExecutionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
