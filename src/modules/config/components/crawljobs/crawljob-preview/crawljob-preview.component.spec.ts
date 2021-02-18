import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CrawljobPreviewComponent } from './crawljob-preview.component';
import {CommonsModule} from '../../../../commons';
import {ConfigurationsModule} from "../../../configurations.module";

describe('CrawljobPreviewComponent', () => {
  let component: CrawljobPreviewComponent;
  let fixture: ComponentFixture<CrawljobPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ConfigurationsModule],
      declarations: [ CrawljobPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawljobPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
