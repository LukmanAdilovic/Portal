import { Component } from '@angular/core';
import { AutheticationService } from '../core/authetication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public autheticated: AutheticationService) { }

  
  ngOnInit(){
  }

  signout() {
    this.autheticated.isAutheticated = false;
  }

}
