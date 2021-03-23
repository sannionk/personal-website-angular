import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { CvComponent } from './cv/cv.component';
import { RoutePlannerComponent } from './route-planner/route-planner.component';

const routes: Routes = [
  { path: 'home', component: InfoComponent },
  { path: 'cv', component: CvComponent },
  { path: 'route-planner', component: RoutePlannerComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
