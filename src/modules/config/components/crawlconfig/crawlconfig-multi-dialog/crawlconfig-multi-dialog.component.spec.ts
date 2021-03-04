import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CrawlConfigMultiDialogComponent} from './crawlconfig-multi-dialog.component';
import {FormBuilder} from '@angular/forms';
import {CoreTestingModule} from '../../../../core/core.testing.module';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {ConfigObject, Kind} from '../../../../../shared/models';
import {ConfigDialogData} from '../../../func';
import {AuthService} from '../../../../core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {LabelMultiComponent} from '../../label/label-multi/label-multi.component';
import {LabelService} from '../../../services';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';

// TODO-Minor: Mat-form-field
describe('CrawlConfigMultiDialogComponent', () => {
  let component: CrawlConfigMultiDialogComponent;
  let fixture: ComponentFixture<CrawlConfigMultiDialogComponent>;

  const MY_CONF: ConfigDialogData = {
    configObject: new ConfigObject({kind: Kind.CRAWLCONFIG}),
    options: {}
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoreTestingModule.forRoot(), MatDialogModule, MatCheckboxModule, MatChipsModule, MatIconModule, MatButtonToggleModule],
      declarations: [ CrawlConfigMultiDialogComponent, LabelMultiComponent ],
      providers: [FormBuilder,
        {provide: LabelService, useValue: {}},
        {provide: AuthService, useValue: {canUpdate: () => true}},
        {provide: MAT_DIALOG_DATA, useValue: MY_CONF},
        {provide: MatDialogRef, useValue: {}},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlConfigMultiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
