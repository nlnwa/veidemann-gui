import {AboutDialogComponent} from './about-dialog.component';
import {AppConfigService} from '../../../core/services';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {DeploymentVersions} from '../../../../shared/models/deployment-versions.model';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';

describe('AboutDialogComponent', () => {
  let spectator: Spectator<AboutDialogComponent>;
  let versions: DeploymentVersions;

  const expectedVersion = 'unittesting';
  versions = new DeploymentVersions({veidemannController: expectedVersion});

  const createComponent = createComponentFactory(
    {
      component: AboutDialogComponent,
      imports: [MatDialogModule, MatDividerModule],
      providers: [{provide: AppConfigService, useValue: {versions}}]
    });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should use dashboard-version from environment', () => {
    expect(spectator.component.dashBoardversion).toBe('DEV');
  });

  it('should have expected content in deployment-version-list ', () => {
    const list = spectator.queryAll('.deployment-version-list li');
    expect(list).not.toBeNull();
    expect(list).toHaveText(expectedVersion);
  });
});
