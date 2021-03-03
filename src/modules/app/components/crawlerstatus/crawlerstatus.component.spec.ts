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

  it('should show RUNNING status in html', () => {
    spectator.setInput('runStatus', RunStatus.RUNNING);
    const list = spectator.queryAll('.crawlerRunningButton');
    expect(list).not.toBeNull();
    expect(list).toHaveText('RUNNING');
  });

  it('should show PAUSED status in html', () => {
    spectator.setInput('runStatus', RunStatus.PAUSED);
    const list = spectator.queryAll('.crawlerPausedButton');
    expect(list).not.toBeNull();
    expect(list).toHaveText('PAUSED');
  });


  it('should show PAUSE_REQUESTED in html', () => {
    spectator.setInput('runStatus', RunStatus.PAUSE_REQUESTED);
    // FIXME: Fragile testing based on generic selector
    const list = spectator.queryAll('h1');
    expect(list).not.toBeNull();
    expect(list).toHaveText('IS PAUSING');
  });

});
