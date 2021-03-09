import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {HealthCheckStatusComponent} from './health-check-status.component';

describe('HealthCheckStatusComponent', () => {
  let component: HealthCheckStatusComponent;
  let fixture: ComponentFixture<HealthCheckStatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ HealthCheckStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCheckStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
