import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data;
  signle;
  activatedUser:Subject<object>= new Subject();

  constructor(public httpService:HttpClient) { 
    
  }
  getSch(){
   return this.data= this.httpService.get('../../assets/final.json');}
}
