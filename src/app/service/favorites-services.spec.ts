import { TestBed } from '@angular/core/testing';

import { FavoritesServices } from './favorites-services';

describe('FavoritesServices', () => {
  let service: FavoritesServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
