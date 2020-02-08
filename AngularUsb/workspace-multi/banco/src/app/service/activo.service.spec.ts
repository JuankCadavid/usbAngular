import { TestBed } from '@angular/core/testing';

import { ActivoService } from './activo.service';

describe('ActivoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivoService = TestBed.get(ActivoService);
    expect(service).toBeTruthy();
  });
});
