import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlHostGroupConfigMultiDialogComponent } from './crawlhostgroupconfig-multi-dialog.component';

describe('CrawlHostGroupConfigMultiDialogComponent', () => {
  let component: CrawlHostGroupConfigMultiDialogComponent;
  let fixture: ComponentFixture<CrawlHostGroupConfigMultiDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlHostGroupConfigMultiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlHostGroupConfigMultiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
