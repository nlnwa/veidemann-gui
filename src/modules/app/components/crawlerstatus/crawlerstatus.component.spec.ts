import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlerStatusComponent } from './crawlerstatus.component';

describe('CrawlerStatusComponent', () => {
  let component: CrawlerStatusComponent;
  let fixture: ComponentFixture<CrawlerStatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlerStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
