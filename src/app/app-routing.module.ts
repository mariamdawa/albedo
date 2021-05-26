import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ScheduleComponent} from "./schedule/schedule.component";
import {CompanyComponent} from "./company/company.component";
import {LocationComponent} from './location/location.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {FunfactsComponent} from './funfacts/funfacts.component';
import {SingleComponent} from './single/single.component';

const routes: Routes = [
  {path : "",redirectTo :'home' , pathMatch:"full"},
  {path: "home", component:HomeComponent},
  {
    path : "schedule" , component: ScheduleComponent ,children: [
       { path : "companies" , component :CompanyComponent},
       {path: "locations", component:LocationComponent}
       
       
      ]
   
  },
  {path:"about-us", component:AboutUsComponent},
  {path:"fun-facts",component:FunfactsComponent},
  {path: "single", component:SingleComponent}
  ]
  ;
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  