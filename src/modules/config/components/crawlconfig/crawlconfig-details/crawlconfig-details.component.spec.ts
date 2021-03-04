import {CrawlConfigDetailsComponent} from './crawlconfig-details.component';
import {CoreTestingModule} from '../../../../core/core.testing.module';
import {ConfigObject, Kind} from '../../../../../shared/models';
import {AuthService} from '../../../../core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {CommonsModule} from '../../../../commons';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MetaComponent} from '../../meta/meta.component';
import {LabelComponent} from '../../label/label.component';
import {LabelService} from '../../../services';
import {of} from 'rxjs';
import {AnnotationComponent} from '../../annotation/annotation.component';
import {AbilityModule} from '@casl/angular';

describe('CrawlConfigDetailsComponent', () => {
  let component: CrawlConfigDetailsComponent;
  let fixture: ComponentFixture<CrawlConfigDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AbilityModule, CoreTestingModule.forRoot(), CommonsModule, NoopAnimationsModule],
      declarations: [CrawlConfigDetailsComponent, MetaComponent, LabelComponent, AnnotationComponent],
      providers: [
        {
          provide: LabelService,
          useValue: {
            getLabelKeys: () => of([])
          }
        },
        {provide: AuthService, useValue: {canUpdate: () => true}},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlConfigDetailsComponent);
    component = fixture.componentInstance;
    component.configObject = new ConfigObject({kind: Kind.CRAWLCONFIG});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
