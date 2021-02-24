import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AboutDialogComponent } from './about-dialog.component';
import { By } from '@angular/platform-browser';
import {AppConfigService} from '../../../core/services';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {CoreTestingModule} from '../../../core/core.testing.module';
import {AppConfig} from '../../../core/models/app-config.model';

describe('AboutDialogComponent', () => {
  let component: AboutDialogComponent;
  let fixture: ComponentFixture<AboutDialogComponent>;
  let appconf: AppConfig;

  appconf = new AppConfig( {
    versions: {}
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoreTestingModule.forRoot(), MatListModule, MatDialogModule],
      declarations: [ AboutDialogComponent ],
      providers: [{ provide: AppConfigService, useValue: appconf}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have content in deployment-version-list ', () => {
    const list = fixture.debugElement.query(By.css('.deployment-version-list')).nativeElement;
    expect(list.innerHTML).not.toBeNull();
    // console.log(list.innerHTML);
    expect(list.innerHTML.length).toBeGreaterThan(0);
  });
});
