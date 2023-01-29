import { TestBed } from '@angular/core/testing';

import { CoktailServiceService } from './coktail-service.service';

describe('CoktailServiceService', () => {
  let service: CoktailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoktailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
