import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShortcutComponent } from './shortcut.component';
import {ActivatedRoute} from "@angular/router";

describe('ShortcutComponent', () => {
  let component: ShortcutComponent;
  let fixture: ComponentFixture<ShortcutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ActivatedRoute],
      declarations: [ ShortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
