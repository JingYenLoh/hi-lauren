/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequestserviceService } from './requestservice.service';

describe('RequestserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestserviceService]
    });
  });

  it('should ...', inject([RequestserviceService], (service: RequestserviceService) => {
    expect(service).toBeTruthy();
  }));
});
