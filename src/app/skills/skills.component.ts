import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: string[] = ['html', 'css', 'javascript', 'typescript', 'angular', 'python', 'java', 'php', 'sql', 'docker', 'git']
  expandedSkill: string;
  
  expandCard(skill: string) {
    this.expandedSkill = skill;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
