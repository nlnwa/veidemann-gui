import {inject, TestBed} from '@angular/core/testing';
import {CoreTestingModule} from '../../core.testing.module';
import {ConfigApiService} from './config-api.service';

describe('ConfigApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreTestingModule.forRoot()],
      providers: [ConfigApiService]
    });
  });

  it('should be created', inject([ConfigApiService], (service: ConfigApiService) => {
    expect(service).toBeTruthy();
  }));
});
