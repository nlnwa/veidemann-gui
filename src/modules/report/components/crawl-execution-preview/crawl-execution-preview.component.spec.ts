import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlExecutionPreviewComponent } from './crawl-execution-preview.component';
import {CrawlExecutionStatus} from '../../../../shared/models';
import {NgxFilesizeModule} from 'ngx-filesize';
import {ChartsModule} from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';

describe('CrawlExecutionPreviewComponent', () => {
  let component: CrawlExecutionPreviewComponent;
  let fixture: ComponentFixture<CrawlExecutionPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlExecutionPreviewComponent ],
      imports: [NgxFilesizeModule, ChartsModule, MatCardModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlExecutionPreviewComponent);
    component = fixture.componentInstance;
    component.crawlExecutionStatus = new CrawlExecutionStatus();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
