import { TestBed } from '@angular/core/testing';

import { TiendaStateService } from './tienda-state.service';

describe('TiendaStateService', () => {
  let service: TiendaStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiendaStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
