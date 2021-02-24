import { AboutDialogComponent } from './about-dialog.component';
import {AppConfigService} from '../../../core/services';
import {CoreTestingModule} from '../../../core/core.testing.module';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {DeploymentVersions} from '../../../../shared/models/deployment-versions.model';

describe('AboutDialogComponent', () => {
  let spectator: Spectator<AboutDialogComponent>;
  let versions: DeploymentVersions;

  // TODO: Hvorfor er dette nødvendig?
  versions = new DeploymentVersions({});

  const createComponent = createComponentFactory(
    {
      component: AboutDialogComponent,
      imports: [CoreTestingModule.forRoot()],
      providers: [{provide: AppConfigService, useValue: {versions}}]
    });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
