import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from './dialog.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';

describe('DialogComponent', () => {
  let spectator: Spectator<DialogComponent>;

  const createComponent = createComponentFactory(
    {
      component: DialogComponent,
      imports: [MatDialogModule],
      providers: [{provide: MAT_DIALOG_DATA, useValue: {}}]
    });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

});
