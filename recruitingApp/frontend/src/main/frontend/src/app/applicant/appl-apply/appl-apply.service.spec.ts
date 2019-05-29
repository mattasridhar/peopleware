import { TestBed, inject } from '@angular/core/testing';

import { ApplApplyService } from './appl-apply.service';

describe('ApplApplyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplApplyService]
    });
  });

  it('should be created', inject([ApplApplyService], (service: ApplApplyService) => {
    expect(service).toBeTruthy();
  }));
});
