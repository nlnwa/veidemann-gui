import {AboutDialogComponent} from './about-dialog.component';
import {AppConfigService} from '../../../core';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {DeploymentVersions} from '../../../../shared/models/deployment-versions.model';
import {CommonsModule} from '../../../commons';

describe('AboutDialogComponent', () => {
  let spectator: Spectator<AboutDialogComponent>;
  let versions: DeploymentVersions;

  const expectedVersion = 'unittesting';
  versions = new DeploymentVersions({veidemannController: expectedVersion});

  const createComponent = createComponentFactory(
    {
      component: AboutDialogComponent,
      imports: [CommonsModule],
      providers: [{provide: AppConfigService, useValue: {versions}}]
    });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should use dashboard-version from environment', () => {
    expect(spectator.component.dashBoardversion).toBe('DEV');
  });

  it('should have expectedVersion in deployment-version-list ', () => {
    const list = spectator.queryAll('.deployment-version-list li');
    expect(list).not.toBeNull();
    expect(list).toHaveText(expectedVersion);
  });

  it('should show Veidemann-frontier in deployment-version-list ', () => {
    const list = spectator.queryAll('.deployment-version-list li');
    expect(list).not.toBeNull();
    expect(list).toHaveText('Veidemann-frontier');
  });

});
