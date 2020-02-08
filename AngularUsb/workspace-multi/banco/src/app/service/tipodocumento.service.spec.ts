import { TestBed } from '@angular/core/testing';

import { TipodocumentoService } from './tipodocumento.service';

describe('TipodocumentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipodocumentoService = TestBed.get(TipodocumentoService);
    expect(service).toBeTruthy();
  });
});
