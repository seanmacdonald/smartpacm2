import { TestBed, inject } from '@angular/core/testing';

import { MapButtonsService } from './map-buttons.service';

describe('MapButtonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapButtonsService]
    });
  });

  it('should be created', inject([MapButtonsService], (service: MapButtonsService) => {
    expect(service).toBeTruthy();
  }));
});
