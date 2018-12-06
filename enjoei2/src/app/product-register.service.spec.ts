import { TestBed } from '@angular/core/testing';

import { ProductRegisterService } from './product-register.service';

describe('ProductRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductRegisterService = TestBed.get(ProductRegisterService);
    expect(service).toBeTruthy();
  });
});
