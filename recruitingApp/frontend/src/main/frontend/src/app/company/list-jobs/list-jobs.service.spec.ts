import { TestBed, inject } from '@angular/core/testing';

import { ListJobsService } from './list-jobs.service';

describe('ListJobsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListJobsService]
    });
  });

  it('should be created', inject([ListJobsService], (service: ListJobsService) => {
    expect(service).toBeTruthy();
  }));
});
