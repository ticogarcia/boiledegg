import { TestBed } from '@angular/core/testing';

import { SignupFormService } from './signup-form.service';

describe('SignupFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupFormService = TestBed.get(SignupFormService);
    expect(service).toBeTruthy();
  });
});
