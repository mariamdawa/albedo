import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import {YoutubePlayerModule} from 'ngx-youtube-player';
import { AboutUsComponent } from './about-us/about-us.component';
import { CompanyComponent } from './company/company.component';
import {AppRoutingModule} from './app-routing.module';
import { LocationComponent } from './location/location.component';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleComponent } from './single/single.component';
import {DataService} from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    ScheduleComponent,
    HomeComponent,
    AboutUsComponent,
    CompanyComponent,
    LocationComponent,
    FunfactsComponent,
    SingleComponent


  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    AppRoutingModule,
    HttpClientModule
  

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
