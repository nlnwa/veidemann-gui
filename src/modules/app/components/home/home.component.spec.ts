import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {MatDialogModule} from '@angular/material/dialog';
import {HealthApiService} from '../../../core/services/api/health-api.service';
import {CoreTestingModule} from '../../../core/core.testing.module';
import {AbilityModule} from '@casl/angular';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoreTestingModule.forRoot(), MatDialogModule, AbilityModule],
      providers: [
        {provide: HealthApiService, useValue: {}}
      ],
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
