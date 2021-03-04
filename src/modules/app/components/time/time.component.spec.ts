import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {TimeComponent} from '..';

describe('TimeComponent', () => {
  let component: TimeComponent;
  let fixture: ComponentFixture<TimeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TimeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show time in html', () => {
    const span = fixture.nativeElement.querySelector('.time');
    expect(span).toBeTruthy();
  });

});
