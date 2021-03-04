import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CrawlJobMultiDialogComponent} from './crawljobs-multi-dialog.component';
import {CoreTestingModule} from '../../../../core/core.testing.module';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {ConfigDialogData} from '../../../func';
import {ConfigObject, Kind} from '../../../../../shared/models';
import {AuthService} from '../../../../core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FilesizeInputComponent} from '../../filesize-input/filesize-input.component';
import {DurationPickerComponent} from '../../durationpicker/duration-picker';
import {LabelMultiComponent} from '../../label/label-multi/label-multi.component';
import {FormBuilder} from '@angular/forms';
import {CommonsModule} from '../../../../commons';
import {LabelService} from '../../../services';
import {CrawlJobDetailsComponent} from '../crawljob-details/crawl-job-details.component';

describe('CrawlJobMultiDialogComponent', () => {
  let component: CrawlJobMultiDialogComponent;
  let fixture: ComponentFixture<CrawlJobMultiDialogComponent>;

  const MY_CONF: ConfigDialogData = {
    configObject: new ConfigObject({kind: Kind.CRAWLJOB}),
    options: {},
  };

  // TODO: Reduce imports
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonsModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatOptionModule, MatSelectModule, NoopAnimationsModule, CoreTestingModule.forRoot()],
      declarations: [CrawlJobMultiDialogComponent,
        CrawlJobDetailsComponent,
        FilesizeInputComponent,
        DurationPickerComponent,
        LabelMultiComponent],
      providers: [
        FormBuilder,
        {provide: LabelService, useValue: {}},
        {provide: AuthService, useValue: {canUpdate: () => true}},
        {provide: MAT_DIALOG_DATA, useValue: MY_CONF},
        {provide: MatDialogRef, useValue: {}},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlJobMultiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
