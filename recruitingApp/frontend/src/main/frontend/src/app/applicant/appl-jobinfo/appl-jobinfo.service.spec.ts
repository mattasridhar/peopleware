import { TestBed, inject } from '@angular/core/testing';

import { ApplJobinfoService } from './appl-jobinfo.service';

describe('ApplJobinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplJobinfoService]
    });
  });

  it('should be created', inject([ApplJobinfoService], (service: ApplJobinfoService) => {
    expect(service).toBeTruthy();
  }));
});
