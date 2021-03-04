import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CrawlhostgroupconfigPreviewComponent } from './crawlhostgroupconfig-preview.component';
import {ConfigObject, Kind} from '../../../../../shared/models';

describe('CrawlhostgroupconfigPreviewComponent', () => {
  let component: CrawlhostgroupconfigPreviewComponent;
  let fixture: ComponentFixture<CrawlhostgroupconfigPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlhostgroupconfigPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlhostgroupconfigPreviewComponent);
    component = fixture.componentInstance;
    component.configObject = new ConfigObject({kind: Kind.CRAWLHOSTGROUPCONFIG});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
