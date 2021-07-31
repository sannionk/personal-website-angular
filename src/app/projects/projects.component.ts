import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: string[] = ['route-planner', 'billing-project', 'software-component-manager', 'this-website']

  constructor() { }

  ngOnInit(): void {
  }

}
