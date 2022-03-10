import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from '../services/core/core.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signin: FormGroup;

  constructor(private router: Router, private coreService: CoreService) {
    this.signin = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit() {
  }

  signinSubmit() {
    if (!this.signin.valid) {
      return;
    } else {
      this.coreService.post('signin', this.signin.value).subscribe((res) => {
        console.log('list of users', res);
      }, (err) => {
        console.log('error', err);
      });
    }


  }

}
