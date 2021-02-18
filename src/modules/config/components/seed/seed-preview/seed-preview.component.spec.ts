import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeedPreviewComponent } from './seed-preview.component';
import {Router} from '@angular/router';

describe('SeedPreviewComponent', () => {
  let component: SeedPreviewComponent;
  let fixture: ComponentFixture<SeedPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Router],
      declarations: [ SeedPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
