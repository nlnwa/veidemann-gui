import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlerStatusDialogComponent } from './crawlerstatus-dialog.component';

describe('CrawlerStatusDialogComponent', () => {
  let component: CrawlerStatusDialogComponent;
  let fixture: ComponentFixture<CrawlerStatusDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlerStatusDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlerStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
