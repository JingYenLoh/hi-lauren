import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { routing }  from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FacilityComponent } from './facility/facility.component';
import { HelpComponent } from './help/help.component';
import { MapComponent } from './map/map.component';
import { RequestComponent } from './request/request.component';
import { LoginComponent } from './login/login.component';
import { PoiComponent } from './poi/poi.component';
import { UserComponent } from './user/user.component';
import { FacilitydetailsComponent } from './facilitydetails/facilitydetails.component';

import { RequestserviceService } from './requestservice.service';
import { ResidentsService } from 'app/residents.service';
import { PostsService } from './posts.service';
import { BookingserviceService } from './bookingservice.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacilityComponent,
    HelpComponent,
    MapComponent,
    RequestComponent,
    LoginComponent,
    PoiComponent,
    UserComponent,
    FacilitydetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAaPIznuDYhRmZK8dBzk_22X9cFeFtAQvo'
      })
  ],
  providers: [BookingserviceService, RequestserviceService, ResidentsService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
