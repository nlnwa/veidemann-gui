import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActionShortcutComponent } from './action-shortcut.component';
import {ConfigurationsModule} from '../../../configurations.module';

describe('ActionShortcutComponent', () => {
  let component: ActionShortcutComponent;
  let fixture: ComponentFixture<ActionShortcutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ConfigurationsModule],
      declarations: [ ActionShortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
