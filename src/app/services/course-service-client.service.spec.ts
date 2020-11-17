import { TestBed } from '@angular/core/testing';

import { CourseServiceClientService } from './course-service-client.service';

describe('CourseServiceClientService', () => {
  let service: CourseServiceClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseServiceClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
