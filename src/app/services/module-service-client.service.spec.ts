import { TestBed } from '@angular/core/testing';

import { ModuleServiceClientService } from './module-service-client.service';

describe('ModuleServiceClientService', () => {
  let service: ModuleServiceClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleServiceClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
