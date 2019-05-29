import { TestBed, inject } from '@angular/core/testing';

import { CompDashboardService } from './comp-dashboard.service';

describe('CompDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompDashboardService]
    });
  });

  it('should be created', inject([CompDashboardService], (service: CompDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
