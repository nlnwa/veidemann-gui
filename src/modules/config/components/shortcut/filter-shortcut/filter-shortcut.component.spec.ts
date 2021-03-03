import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {FilterShortcutComponent} from './filter-shortcut.component';
import {ConfigObject, Kind} from '../../../../../shared/models/config';
import {CoreTestingModule} from '../../../../core/core.testing.module';
import {AbilityModule} from '@casl/angular';
import {MatListModule} from '@angular/material/list';

describe('FilterShortcutComponent', () => {
  let component: FilterShortcutComponent;
  let fixture: ComponentFixture<FilterShortcutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoreTestingModule.forRoot(), AbilityModule, MatListModule],
      declarations: [FilterShortcutComponent],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterShortcutComponent);
    component = fixture.componentInstance;
    // FIXME: Burde ikke være nødvendig
    // Er grunnet ability-implementasjonen
    component.configObject = new ConfigObject({kind: Kind.SEED});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
