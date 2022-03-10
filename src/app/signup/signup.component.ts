import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from '../services/core/core.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: FormGroup;


  constructor(private router: Router,private coreService: CoreService) {
    this.signup = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'firsname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'mobile': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'role': new FormControl('user'),
      'status': new FormControl(true),
    })
  }

  ngOnInit() {
  }

  signupSubmit() {
    if (!this.signup.valid) {
      return;
    } else {
      this.coreService.post('signup', this.signup.value).subscribe((res) => {
        console.log('list of users', res);
      }, (err) => {
        console.log('error', err);
      });
    }
  }

}
