import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlConfigDialogComponent } from './crawlconfig-dialog.component';

describe('CrawlConfigDialogComponent', () => {
  let component: CrawlConfigDialogComponent;
  let fixture: ComponentFixture<CrawlConfigDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlConfigDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
