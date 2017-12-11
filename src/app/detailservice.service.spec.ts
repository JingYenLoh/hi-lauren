/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailserviceService } from './detailservice.service';

describe('DetailserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailserviceService]
    });
  });

  it('should ...', inject([DetailserviceService], (service: DetailserviceService) => {
    expect(service).toBeTruthy();
  }));
});
