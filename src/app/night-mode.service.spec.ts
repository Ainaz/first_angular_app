import { TestBed, inject } from '@angular/core/testing';

import { NightModeService } from './night-mode.service';

describe('NightModeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NightModeService]
    });
  });

  it('should be created', inject([NightModeService], (service: NightModeService) => {
    expect(service).toBeTruthy();
  }));
});
