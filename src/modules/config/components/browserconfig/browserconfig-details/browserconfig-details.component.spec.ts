import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {BrowserConfigDetailsComponent} from './browserconfig-details.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CoreTestingModule} from '../../../../core/core.testing.module';
import {DatePipe} from '@angular/common';
import {CommonsModule} from '../../../../commons';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {LabelService} from '../../../services';
import {of} from 'rxjs';
import {MaterialModule} from '../../../../commons/material.module';
import {AnnotationComponent, DurationPickerComponent, LabelComponent, MetaComponent, SelectorComponent} from '../..';
import {ConfigObject, Kind} from '../../../../../shared/models';
import {AuthService} from '../../../../core';
import {AbilityModule} from '@casl/angular';

describe('BrowserConfigDetailsComponent', () => {
  let component: BrowserConfigDetailsComponent;
  let fixture: ComponentFixture<BrowserConfigDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserConfigDetailsComponent,
        MetaComponent,
        DurationPickerComponent,
        SelectorComponent,
        LabelComponent,
        AnnotationComponent],
      imports: [
        AbilityModule,
        MaterialModule,
        RouterTestingModule,
        CommonsModule,
        NoopAnimationsModule,
        CoreTestingModule.forRoot()
      ],
      providers: [
        DatePipe,
        {
          provide: AuthService, useValue: {
            canUpdate: () => true,
            canDelete: () => true
          }
        },
        {
          provide: LabelService,
          useValue: {
            getLabelKeys: () => of([])
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserConfigDetailsComponent);
    component = fixture.componentInstance;
    component.configObject = new ConfigObject({kind: Kind.BROWSERCONFIG});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
