import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {CrawlerStatusComponent} from './crawlerstatus.component';
import {MatCardModule} from '@angular/material/card';
import {RunStatus} from '../../../../shared/models/controller';
import {AbilityModule} from '@casl/angular';
import {CoreTestingModule} from '../../../core/core.testing.module';
import {By} from '@angular/platform-browser';

describe('CrawlerStatusComponent', () => {
  let component: CrawlerStatusComponent;
  let fixture: ComponentFixture<CrawlerStatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoreTestingModule.forRoot(), MatCardModule, AbilityModule],
      declarations: [ CrawlerStatusComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlerStatusComponent);
    component = fixture.componentInstance;
    component.runStatus = RunStatus.RUNNING;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have status in html', () => {
    const list = fixture.debugElement.query(By.css('.crawlerRunningButton')).nativeElement;
    expect(list.innerHTML).toContain('RUNNING');
  });

});
