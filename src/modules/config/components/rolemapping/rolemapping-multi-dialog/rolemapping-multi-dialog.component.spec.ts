import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RoleMappingMultiDialogComponent } from './rolemapping-multi-dialog.component';
import {FormBuilder} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConfigObject, Kind} from '../../../../../shared/models/config';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CommonsModule} from '../../../../commons';

describe('RoleMappingMultiDialogComponent', () => {
  let component: RoleMappingMultiDialogComponent;
  let fixture: ComponentFixture<RoleMappingMultiDialogComponent>;

  // TODO: Use ConfigDialogData
  // FIXME: Unødvenig initialisering?
  const MY_CONF = {
    configObject: new ConfigObject(
      {
        kind: Kind.ROLEMAPPING,
      }),
    options: [],
    allSelected: false
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonsModule, NoopAnimationsModule],
      declarations: [ RoleMappingMultiDialogComponent ],
      providers: [FormBuilder,
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: MY_CONF}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMappingMultiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
