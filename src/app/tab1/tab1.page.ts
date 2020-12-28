import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router : Router) {}
  email: string;
  password: string;

  login(){
    if (this.email === 'admin' && this.password === 'admin')
    this.router.navigate(['/tabs/tab1/desktop'])
  }  
  
}
