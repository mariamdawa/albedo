import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {ActivatedRoute, Params} from '@angular/router';;
import {ScheduleComponent} from "../schedule/schedule.component";
import {Injectable} from '@angular/core';
import {DataService} from '../data.service';
import {Subscription} from 'rxjs';

@Injectable()
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit, OnDestroy {
    data;
    disp;
    user;
    userSub:Subscription;
    
  constructor(private httpService: HttpClient, public activateRoute:ActivatedRoute, public dataService:DataService) { 
    // this.httpService.get('../../assets/final.json').subscribe((dat) => {
    //   this.data = dat;
      
    //      // FILL THE ARRAY WITH DATA.
    //      console.log(this.data);
    this.userSub=this.dataService.activatedUser.subscribe((user)=>{
      console.log(user);
      this.user=user;
      })
    // },
    // (err: HttpErrorResponse) => {
    //   console.log (err.message, "no");
    // });
  }


  ngOnInit() {
    // this.disp= this.dataService.signle;
    this.disp=this.activateRoute.snapshot.params['foo'];
    // if (!this.disp){
    //   this.disp = {
    //     Picture : "https://www.spacelaunchschedule.com/rockets/soyuz.jpg"
    //   }
    }
    // const id=this.activateRoute.snapshot.params['id'];
    // this.

    ngOnDestroy(){
      if(this.userSub){
      this.userSub.unsubscribe;
      }
      }

}
