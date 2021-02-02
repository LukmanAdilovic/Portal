import { NavbarComponent } from './../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutheticationService } from '../core/authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
  token: any;

  constructor(private router: Router, private http: HttpClient, private autheticated: AutheticationService) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    const credentials = {
      'username': form.value.username,
      'password':form.value.password
    }

    this.http.post("http://localhost:56436/api/login", credentials)
    .subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.autheticated.isAutheticated = true;
      this.router.navigate(["/home"]);
    }, err => {
      this.invalidLogin = true;
    })
  }
}
