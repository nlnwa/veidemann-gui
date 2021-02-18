import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {PageLogStatusComponent} from './page-log-status.component';
import {AppConfigService} from "../../../core/services";

describe('PageLogStatusComponent', () => {
  let component: PageLogStatusComponent;
  let fixture: ComponentFixture<PageLogStatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppConfigService],
      declarations: [ PageLogStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLogStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
