import { TestBed, inject } from '@angular/core/testing';

import { EditJobService } from './edit-job.service';

describe('EditJobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditJobService]
    });
  });

  it('should be created', inject([EditJobService], (service: EditJobService) => {
    expect(service).toBeTruthy();
  }));
});
