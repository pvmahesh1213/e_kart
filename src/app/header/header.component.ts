import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  foods: any[] = [
    { value: 'profile', viewValue: 'Profile' },
    { value: 'products', viewValue: 'View Products' },
    { value: 'addproducts', viewValue: 'Add Products' }
  ];
  menuValue = new FormControl('');
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/signin"]);
  }

  navigateMenu(value) {
    let userData: any = JSON.parse(localStorage.getItem('userData'));
    if (this.menuValue.value === "profile") {
      this.router.navigate(["/admin/profile", userData.localId])
    } else if (this.menuValue.value === 'addproducts') {
      this.router.navigateByUrl("/admin/addproduct");
    }

  }

}
