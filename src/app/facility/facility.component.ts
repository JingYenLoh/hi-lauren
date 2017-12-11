import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingserviceService } from '../bookingservice.service';
import { myBooking } from '../myBooking';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  bookingForm: FormGroup;
  edited = false;
  thisone = "";
  store: myBooking[] = [];
  newItem : myBooking;

  constructor(private fb: FormBuilder, private bookingService: BookingserviceService) { }

  ngOnInit() {
  this.bookingForm = this.fb.group({
      facilityname:['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });

  }

    onSubmit()
  {
      this.edited = true;

      this.newItem = new myBooking();
      this.newItem.facilityname = this.bookingForm.value.facilityname;
      this.newItem.date = this.bookingForm.value.date;
      this.newItem.time = this.bookingForm.value.time;
      
      this.bookingService.addBooking(this.newItem);
      
      this.bookingForm.reset();
      
      this.store = this.bookingService.getBookings();
      let arrayLastIndex = this.store.length-1;
     this.thisone = this.store[arrayLastIndex].facilityname;
  }
}

