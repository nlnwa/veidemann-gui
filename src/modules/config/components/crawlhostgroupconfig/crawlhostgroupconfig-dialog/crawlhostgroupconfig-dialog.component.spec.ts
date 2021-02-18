import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlHostGroupConfigDialogComponent } from './crawlhostgroupconfig-dialog.component';
import {FormBuilder} from '@angular/forms';

describe('CrawlHostGroupConfigDialogComponent', () => {
  let component: CrawlHostGroupConfigDialogComponent;
  let fixture: ComponentFixture<CrawlHostGroupConfigDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ CrawlHostGroupConfigDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlHostGroupConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
