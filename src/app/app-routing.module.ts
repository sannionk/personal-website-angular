import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { CvComponent } from './cv/cv.component';
import { RoutePlannerComponent } from './route-planner/route-planner.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'home', component: InfoComponent },
  { path: 'cv', component: CvComponent },
  { path: 'route-planner', component: RoutePlannerComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
