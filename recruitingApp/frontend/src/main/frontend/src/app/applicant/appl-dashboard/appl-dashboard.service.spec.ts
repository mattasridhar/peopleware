import { TestBed, inject } from '@angular/core/testing';

import { ApplDashboardService } from './appl-dashboard.service';

describe('ApplDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplDashboardService]
    });
  });

  it('should be created', inject([ApplDashboardService], (service: ApplDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
