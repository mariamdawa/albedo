import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SingleComponent} from '../single/single.component';
import {DataService} from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
@Injectable()

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
data;
public info;
constructor(private httpService: HttpClient, public dataService:DataService) {
  this.dataService.getSch().subscribe((dat) => {
   this.data = dat;
   this.getInfo(this.data[0].id);
      // FILL THE ARRAY WITH DATA.
      console.log(this.data);
      
 },
 (err: HttpErrorResponse) => {
   console.log (err.message, "no");
 });
 
}
getInfo(inf){
	this.dataService.data.subscribe((user)=>{
	this.dataService.activatedUser.next(user)
	console.log(user);
	});
}
// getInfo(inf){
//   this.dataService.signle=inf;
  


  ngOnInit() {
  }

}


