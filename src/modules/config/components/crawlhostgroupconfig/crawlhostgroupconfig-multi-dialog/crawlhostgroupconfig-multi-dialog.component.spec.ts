import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CrawlHostGroupConfigMultiDialogComponent} from './crawlhostgroupconfig-multi-dialog.component';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../../../../core';
import {CoreTestingModule} from '../../../../core/core.testing.module';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {ConfigObject} from '../../../../../shared/models';
import {ConfigDialogData} from '../../../func';
import {LabelMultiComponent} from '../../label/label-multi/label-multi.component';
import {LabelService} from '../../../services';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipList} from '@angular/material/chips';

describe('CrawlHostGroupConfigMultiDialogComponent', () => {
  let component: CrawlHostGroupConfigMultiDialogComponent;
  let fixture: ComponentFixture<CrawlHostGroupConfigMultiDialogComponent>;

  const MY_CONF: ConfigDialogData = {
    configObject: new ConfigObject(),
    options: {}
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoreTestingModule.forRoot(), MatDialogModule, MatIconModule, MatButtonToggleModule],
      declarations: [CrawlHostGroupConfigMultiDialogComponent, LabelMultiComponent, MatChipList],
      providers: [FormBuilder,
        {provide: LabelService, useValue: {}},
        {provide: AuthService, useValue: {canUpdate: () => true }},
        {provide: MAT_DIALOG_DATA, useValue: MY_CONF},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlHostGroupConfigMultiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
