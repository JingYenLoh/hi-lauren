import { Injectable } from '@angular/core';
import { myBooking } from './myBooking';
import { listOfBookings } from './mock-bookings';

@Injectable()
export class BookingserviceService {

  constructor() { }
  getBookings(): myBooking[] {
    return listOfBookings;
  }
  
  addBooking(item: myBooking): void {
       listOfBookings.push(item);     
    }

}
