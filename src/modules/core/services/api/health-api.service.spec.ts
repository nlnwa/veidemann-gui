import {inject, TestBed} from '@angular/core/testing';
import {AbilityModule} from '@casl/angular';
import {CoreTestingModule} from '../../core.testing.module';
import {HealthApiService} from './health-api.service';
import {HttpClient} from '@angular/common/http';

describe('HealthApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreTestingModule.forRoot(), AbilityModule],
      providers: [HealthApiService,
        {provide: HttpClient, useValue: {}}
        ]
    });
  });

  it('should be created', inject([HealthApiService], (service: HealthApiService) => {
    expect(service).toBeTruthy();
  }));
});
