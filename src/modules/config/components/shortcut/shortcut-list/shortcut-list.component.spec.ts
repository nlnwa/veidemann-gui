import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShortcutListComponent } from './shortcut-list.component';
import {ConfigObject, Kind} from '../../../../../shared/models/config';

fdescribe('ShortcutListComponent', () => {
  let component: ShortcutListComponent;
  let fixture: ComponentFixture<ShortcutListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should create with SeedConfig', () => {
    // FIXME Add to trigger more functionality
    component.configObject = new ConfigObject({kind: Kind.SEED});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  xit('should create with CrawlConfig', () => {
    // FIXME Add to trigger more functionality
    component.configObject = new ConfigObject({kind: Kind.CRAWLCONFIG});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
