import {CrawlConfigDetailsComponent} from './crawlconfig-details.component';
import {FormBuilder} from '@angular/forms';
import {CoreTestingModule} from '../../../../core/core.testing.module';
import {ConfigObject, Kind} from '../../../../../shared/models';
import {AuthService} from '../../../../core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {CommonsModule} from '../../../../commons';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('CrawlConfigDetailsComponent', () => {
  let component: CrawlConfigDetailsComponent;
  let fixture: ComponentFixture<CrawlConfigDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoreTestingModule.forRoot(), CommonsModule, NoopAnimationsModule],
      declarations: [CrawlConfigDetailsComponent],
      providers: [FormBuilder,
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
