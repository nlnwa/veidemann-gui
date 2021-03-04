import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EntityDetailsComponent} from './entity-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../../commons/material.module';
import {AuthService} from '../../../../core';
import {DatePipe} from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {LabelService} from '../../../services';
import {of} from 'rxjs';
import {AnnotationComponent, LabelComponent, MetaComponent} from '../..';
import {ConfigObject, Kind} from '../../../../../shared/models';
import {AbilityModule} from '@casl/angular';
import {CoreTestingModule} from '../../../../core/core.testing.module';

describe('EntityDetailsComponent', () => {
  let component: EntityDetailsComponent;
  let fixture: ComponentFixture<EntityDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EntityDetailsComponent, MetaComponent, LabelComponent, AnnotationComponent],
      imports: [
        CoreTestingModule.forRoot(),
        AbilityModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        DragDropModule,
        NoopAnimationsModule
      ],
      providers: [
        DatePipe,
        {
          provide: AuthService,
          useValue: {
            canUpdate: () => true
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
    fixture = TestBed.createComponent(EntityDetailsComponent);
    component = fixture.componentInstance;
    component.configObject = new ConfigObject({kind: Kind.CRAWLENTITY});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
