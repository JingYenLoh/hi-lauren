/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResidentsService } from './residents.service';

describe('ResidentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResidentsService]
    });
  });

  it('should ...', inject([ResidentsService], (service: ResidentsService) => {
    expect(service).toBeTruthy();
  }));
});
