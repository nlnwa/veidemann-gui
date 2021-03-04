import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {MetaComponent} from './meta.component';
import {DatePipe} from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {LabelService} from '../../services';
import {of} from 'rxjs';
import {CoreTestingModule} from '../../../core/core.testing.module';
import {CommonsModule} from '../../../commons';
import {LabelComponent} from '../label/label.component';
import {AnnotationComponent} from '../annotation/annotation.component';
import {AuthService} from '../../../core';
import {AbilityModule} from '@casl/angular';

describe('MetaComponent', () => {
  let component: MetaComponent;
  let fixture: ComponentFixture<MetaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MetaComponent, LabelComponent, AnnotationComponent],
      imports: [
        AbilityModule,
        CoreTestingModule.forRoot(),
        CommonsModule,
        NoopAnimationsModule
      ],
      providers: [
        DatePipe,
        {
          provide: AuthService,
          useValue: {
            canUpdate: () => true,
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
    fixture = TestBed.createComponent(MetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
