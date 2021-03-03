import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RoleMappingDialogComponent} from './rolemapping-dialog.component';
import {FormBuilder} from '@angular/forms';
import {CoreTestingModule} from '../../../../core/core.testing.module';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {ConfigObject, Kind} from '../../../../../shared/models/config';
import {MatError} from '@angular/material/form-field';
import {CommonsModule} from '../../../../commons';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

fdescribe('RoleMappingDialogComponent', () => {
  let component: RoleMappingDialogComponent;
  let fixture: ComponentFixture<RoleMappingDialogComponent>;

  // TODO: Use ConfigDialogData
  // FIXME: unødvendig initialisering
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
      imports: [CoreTestingModule.forRoot(), MatDialogModule, CommonsModule, NoopAnimationsModule],
      declarations: [ RoleMappingDialogComponent, MatError ],
      providers: [FormBuilder,
        {provide: MAT_DIALOG_DATA, useValue: MY_CONF},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMappingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
