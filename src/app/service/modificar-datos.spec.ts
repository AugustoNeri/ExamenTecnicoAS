import { TestBed } from '@angular/core/testing';

import { ModificarDatos } from './modificar-datos';

describe('ModificarDatos', () => {
  let service: ModificarDatos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarDatos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
