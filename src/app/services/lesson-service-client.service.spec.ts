import { TestBed } from '@angular/core/testing';

import { LessonServiceClientService } from './lesson-service-client.service';

describe('LessonServiceClientService', () => {
  let service: LessonServiceClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonServiceClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
