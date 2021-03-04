import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {PolitenessConfigDetailsComponent} from './politenessconfig-details.component';
import {CommonsModule} from '../../../../commons';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CoreTestingModule} from '../../../../core/core.testing.module';
import {LabelService} from '../../../services';
import {of} from 'rxjs';
import {ConfigObject, Kind} from '../../../../../shared/models';
import {AnnotationComponent, DurationPickerComponent, LabelComponent, MetaComponent, SelectorComponent} from '../..';
import {AuthService} from '../../../../core';
import {AbilityModule} from '@casl/angular';

describe('PolitenessConfigDetailsComponent', () => {
  let component: PolitenessConfigDetailsComponent;
  let fixture: ComponentFixture<PolitenessConfigDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PolitenessConfigDetailsComponent,
        MetaComponent,
        SelectorComponent,
        DurationPickerComponent,
        LabelComponent,
        AnnotationComponent],
      imports: [
        AbilityModule,
        CommonsModule,
        RouterTestingModule,
        NoopAnimationsModule,
        CoreTestingModule.forRoot(),
      ],
      providers: [
        {provide: AuthService, useValue: {canUpdate: () => true}},
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
    fixture = TestBed.createComponent(PolitenessConfigDetailsComponent);
    component = fixture.componentInstance;
    component.configObject = new ConfigObject({kind: Kind.POLITENESSCONFIG});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
