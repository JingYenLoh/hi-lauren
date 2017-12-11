/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookingserviceService } from './bookingservice.service';

describe('BookingserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingserviceService]
    });
  });

  it('should ...', inject([BookingserviceService], (service: BookingserviceService) => {
    expect(service).toBeTruthy();
  }));
});
