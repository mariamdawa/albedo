import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {ScheduleComponent} from '../schedule/schedule.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  player: YT.Player;
  private id: string = 'Jv3Ql0A2oi0';
  data;
 
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
  constructor(private httpService: HttpClient) {
     this.httpService.get('../../assets/final.json').subscribe((dat) => {
      this.data = dat;
      
         // FILL THE ARRAY WITH DATA.
         console.log(this.data);
         
    },
    (err: HttpErrorResponse) => {
      console.log (err.message, "no");
    });
    }

  ngOnInit() {
    
  }

}
