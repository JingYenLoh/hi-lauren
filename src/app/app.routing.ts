import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; //import home components
import { FacilityComponent } from './facility/facility.component';
import { HelpComponent } from './help/help.component';
import { MapComponent } from './map/map.component';
import { RequestComponent } from './request/request.component';
import { PoiComponent } from './poi/poi.component';
import { UserComponent } from './user/user.component';
import { FacilitydetailsComponent } from './facilitydetails/facilitydetails.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'facility', component: FacilityComponent },
  { path: 'request', component: RequestComponent },
  { path: 'help', component: HelpComponent },
  { path: 'map', component: MapComponent },
  { path: 'poi', component: PoiComponent },
  { path: 'user', component: UserComponent },
  { path: 'details', component: FacilitydetailsComponent},
  { path: '', component: LoginComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
