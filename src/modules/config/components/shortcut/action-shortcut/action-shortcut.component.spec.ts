import {ActionShortcutComponent} from './action-shortcut.component';
import {AbilityModule} from '@casl/angular';
import {CoreTestingModule} from '../../../../core/core.testing.module';
import {ConfigObject} from '../../../../../shared/models/config';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MatListModule} from '@angular/material/list';

describe('ActionShortcutComponent', () => {
  let component: ActionShortcutComponent;
  let fixture: ComponentFixture<ActionShortcutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoreTestingModule.forRoot(), AbilityModule, MatListModule],
      declarations: [ActionShortcutComponent],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionShortcutComponent);
    component = fixture.componentInstance;
    // FIXME: Burde ikke være nødvendig
    // Grunnet ability
    component.configObject = new ConfigObject();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
