import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlJobDialogComponent } from './crawljob-dialog.component';

describe('CrawlJobDialogComponent', () => {
  let component: CrawlJobDialogComponent;
  let fixture: ComponentFixture<CrawlJobDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlJobDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlJobDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
