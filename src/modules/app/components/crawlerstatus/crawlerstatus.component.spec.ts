import {CrawlerStatusComponent} from './crawlerstatus.component';
import {MatCardModule} from '@angular/material/card';
import {RunStatus} from '../../../../shared/models/controller';
import {AbilityModule} from '@casl/angular';
import {CoreTestingModule} from '../../../core/core.testing.module';
import {createComponentFactory, Spectator} from '@ngneat/spectator';

describe('CrawlerStatusComponent', () => {
  let spectator: Spectator<CrawlerStatusComponent>;

  const createComponent = createComponentFactory(
    {
      component: CrawlerStatusComponent,
      imports: [CoreTestingModule.forRoot(), MatCardModule, AbilityModule],
      providers: []
    });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should have correct status in html', () => {
    spectator.setInput('runStatus', RunStatus.RUNNING);
    const list = spectator.queryAll('.crawlerRunningButton');
    expect(list).not.toBeNull();
    expect(list).toHaveText('RUNNING');
  });

});
