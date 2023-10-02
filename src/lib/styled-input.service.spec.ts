import { TestBed } from '@angular/core/testing';

import { StyledInputService } from './styled-input.service';

describe('StyledInputService', () => {
  let service: StyledInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyledInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
