import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PolitenessConfigDialogComponent } from './politenessconfig-dialog.component';

describe('PolitenessConfigDialogComponent', () => {
  let component: PolitenessConfigDialogComponent;
  let fixture: ComponentFixture<PolitenessConfigDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PolitenessConfigDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitenessConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
