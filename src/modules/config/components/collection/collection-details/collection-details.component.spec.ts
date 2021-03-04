import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CollectionDetailsComponent} from './collection-details.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonsModule} from '../../../../commons';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CoreTestingModule} from '../../../../core/core.testing.module';
import {LabelService} from '../../../services';
import {of} from 'rxjs';
import {AnnotationComponent, FilesizeInputComponent, LabelComponent, MetaComponent} from '../..';
import {ConfigObject, Kind} from '../../../../../shared/models';
import {MatSelectModule} from '@angular/material/select';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../../../../core';
import {AbilityModule} from '@casl/angular';

describe('CollectionDetailsComponent', () => {
  let component: CollectionDetailsComponent;
  let fixture: ComponentFixture<CollectionDetailsComponent>;
  let formBuilder: FormBuilder;

  const configobject = new ConfigObject({
    kind: Kind.COLLECTION
  });

  formBuilder = new FormBuilder();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionDetailsComponent, MetaComponent, FilesizeInputComponent, LabelComponent, AnnotationComponent],
      imports: [
        AbilityModule,
        RouterTestingModule,
        CommonsModule,
        NoopAnimationsModule,
        CoreTestingModule.forRoot()
      ],
      providers: [
        {provide: AuthService, useValue: {
          canUpdate: () => true
          }},
        {provide: FormBuilder, useValue: formBuilder},
        MatSelectModule,
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
    fixture = TestBed.createComponent(CollectionDetailsComponent);
    component = fixture.componentInstance;
    component.configObject = configobject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
