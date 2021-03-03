import {ModuleWithProviders, NgModule} from '@angular/core';

import {AppConfigService, AuthService, ConfigApiService, ErrorService, GuardService, SnackBarService} from './services';
import {AppInitializerService} from './services';
import {of} from 'rxjs';
import {Ability, PureAbility} from '@casl/ability';


@NgModule()
export class CoreTestingModule {
  static forRoot(): ModuleWithProviders<CoreTestingModule> {
    return {
      ngModule: CoreTestingModule,
      providers: [
        {provide: Ability, useValue: new Ability()},
        {provide: PureAbility, useExisting: Ability},
        {
          provide: AppConfigService,
          useValue: {}
        },
        {
          provide: AppInitializerService,
          useValue: {}
        },
        {
          provide: ConfigApiService,
          useValue: {
            list: () => of(null)
          }
        },
        {
          provide: AppConfigService,
          useValue: {}
        },
        {
          provide: GuardService,
          useValue: {}
        },
        {
          provide: AuthService,
          useValue: {
            isAdmin: () => true,
            isCurator: () => true
          }
        },
        {
          provide: ErrorService,
          useValue: {}
        },
        {
          provide: SnackBarService,
          useValue: {}
        }
      ]
    };
  }
}
