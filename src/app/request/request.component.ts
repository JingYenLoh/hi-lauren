import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestserviceService } from '../requestservice.service';
import { myUserR } from '../myUserR';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requestForm: FormGroup;
  edited = false;
  thisone = "";
  store: myUserR[] = [];
  newItem : myUserR;

  constructor(private fb: FormBuilder, private requestService: RequestserviceService) { }

    ngOnInit() {
    this.requestForm = this.fb.group({
      request: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit()
  {
      this.edited = true;

      this.newItem = new myUserR();
      this.newItem.request = this.requestForm.value.request;
      this.newItem.description = this.requestForm.value.description;
      
      this.requestService.addUser(this.newItem);

      this.requestForm.reset();
      
      this.store = this.requestService.getUsers();
      let arrayLastIndex = this.store.length-1;
     this.thisone = this.store[arrayLastIndex].request;
  }
}

