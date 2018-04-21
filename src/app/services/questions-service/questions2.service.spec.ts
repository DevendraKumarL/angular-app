import { TestBed, inject } from '@angular/core/testing';

import { Questions2Service } from './questions2.service';

describe('Questions2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Questions2Service]
    });
  });

  it('should be created', inject([Questions2Service], (service: Questions2Service) => {
    expect(service).toBeTruthy();
  }));
});
