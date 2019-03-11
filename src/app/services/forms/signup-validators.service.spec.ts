import { TestBed } from '@angular/core/testing';

import { SignupValidatorsService } from './signup-validators.service';

describe('SignupValidatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupValidatorsService = TestBed.get(SignupValidatorsService);
    expect(service).toBeTruthy();
  });
});
