import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup }  from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    myForm: FormGroup;
    edited = false;

  constructor(private fb: FormBuilder) { }

    ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      email: '',
      password: ''
    });
  }
  
  onSubmit()
  {
      this.edited = true;
  }
}
