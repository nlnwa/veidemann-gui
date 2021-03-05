import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CrawlExecutionComponent} from './crawl-execution.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CoreTestingModule} from '../../../core/core.testing.module';
import {CrawlExecutionService} from '../../services';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

// TODO: Only creates, no data in view, needs further mocking
describe('CrawlExecutionComponent', () => {
  let component: CrawlExecutionComponent;
  let fixture: ComponentFixture<CrawlExecutionComponent>;

  const fakeActivatedRoute = {
    snapshot:
      {
        data:
          {options: {}}
      },
    queryParamMap: of(
      {
        get: () => {},
        getAll: () => {}
      }
    )
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoreTestingModule.forRoot(), RouterTestingModule],
      declarations: [CrawlExecutionComponent],
      providers: [
        {provide: CrawlExecutionService, useValue: {}},
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: MatDialog, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
