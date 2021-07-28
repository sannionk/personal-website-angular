import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  skills: string[] = ['html', 'css', 'javascript', 'typescript', 'angular', 'python', 'java', 'php', 'sql', 'docker', 'git']
  constructor() { }

  ngOnInit(): void {
  }

}
