import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {CrawlLogStatusComponent} from './crawl-log-status.component';
import {CommonsModule} from '../../../commons';

describe('CrawlLogStatusComponent', () => {
  let component: CrawlLogStatusComponent;
  let fixture: ComponentFixture<CrawlLogStatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonsModule],
      declarations: [ CrawlLogStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlLogStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
