import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  public isAutheticated:boolean = false;

  constructor() { }
}
