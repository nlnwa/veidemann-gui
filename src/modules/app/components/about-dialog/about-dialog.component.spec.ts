import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutDialogComponent } from './about-dialog.component';
import {AppConfigService} from '../../../core/services';

describe('AboutDialogComponent', () => {
  let component: AboutDialogComponent;
  let fixture: ComponentFixture<AboutDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDialogComponent ],
      providers: [AppConfigService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
