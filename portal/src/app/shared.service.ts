import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:56436/api";

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http:HttpClient) { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  getArtList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/articles');
  }

  addArticles(val:any){
    return this.http.post<any>(this.APIUrl+'/articles',val);
  }

  updateArticles(val:any){
    return this.http.put<any>(this.APIUrl+'/articles/',val);
  }

  deleteArticles(val:any){
    return this.http.delete<any>(this.APIUrl+'/articles/'+val);
  }

}


