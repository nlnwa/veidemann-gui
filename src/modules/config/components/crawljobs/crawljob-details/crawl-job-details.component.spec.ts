import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {CrawlJobDetailsComponent} from './crawl-job-details.component';
import {CommonsModule} from '../../../../commons';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CoreTestingModule} from '../../../../core/core.testing.module';
import {LabelService} from '../../../services';
import {of} from 'rxjs';
import {ScriptAnnotationsPipe} from '../../../pipe';
import {ConfigService} from '../../../../commons/services';
import {
  AnnotationComponent,
  DurationPickerComponent,
  FilesizeInputComponent,
  LabelComponent,
  MetaComponent
} from '../..';
import {ConfigObject, Kind} from '../../../../../shared/models';
import {AuthService} from '../../../../core';
import {AbilityModule} from '@casl/angular';

describe('CrawljobDetailsComponent', () => {
  let component: CrawlJobDetailsComponent;
  let fixture: ComponentFixture<CrawlJobDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrawlJobDetailsComponent,
        FilesizeInputComponent,
        DurationPickerComponent,
        ScriptAnnotationsPipe,
        MetaComponent,
        LabelComponent,
        AnnotationComponent],
      imports: [
        AbilityModule,
        CommonsModule,
        RouterTestingModule,
        NoopAnimationsModule,
        CoreTestingModule.forRoot()
      ],
      providers: [
        {
          provide: AuthService,
          useValue: {
            canUpdate: () => true
          }
        },
        {
          provide: ConfigService
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
    fixture = TestBed.createComponent(CrawlJobDetailsComponent);
    component = fixture.componentInstance;
    component.configObject = new ConfigObject({kind: Kind.CRAWLJOB});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
