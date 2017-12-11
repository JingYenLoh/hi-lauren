import { Component, OnInit } from '@angular/core';
import { DetailserviceService } from '../detailservice.service';
import { facilityDetail } from '../facilityDetail';
import { listofDetail } from '../mock-detail';
@Component({
  selector: 'app-facilitydetails',
  templateUrl: './facilitydetails.component.html',
  styleUrls: ['./facilitydetails.component.css'],
  providers: [DetailserviceService]
})
export class FacilitydetailsComponent implements OnInit {
details : facilityDetail[];

  constructor(private detailservice: DetailserviceService) {
  this.details = this.detailservice.getAllDetail(); }

  ngOnInit() {
  }

}
