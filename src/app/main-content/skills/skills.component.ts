import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
  }


  skillIcons1 = [
    {
      icon: 'Angular.svg',
      name: 'Angular'
    },
    {
      icon: 'typescript.svg',
      name: 'TypeScript'
    },
    {
      icon: 'Javascript.svg',
      name: 'JavaScript'
    },
    {
      icon: 'html.svg',
      name: 'HTML'
    },
    {
      icon: 'Firebase.svg',
      name: 'Firebase'
    },
    {
      icon: 'git.svg',
      name: 'GIT'
    },
    {
      icon: 'css.svg',
      name: 'CSS'
    },
    {
      icon: 'Api.svg',
      name: 'Resp-API'
    },
    {
      icon: 'scrum.svg',
      name: 'Scrum'
    },
    {
      icon: 'material.svg',
      name: 'Material design'
    },
    {
      icon: 'linux2.png',
      name: 'Linux'
    },
    {
      icon: 'python.png',
      name: 'Python'
    },
    {
      icon: 'django.png',
      name: 'Django'
    },
    {
      icon: 'redis.png',
      name: 'Redis'
    },
    {
      icon: 'postgreSQL.png',
      name: 'PostgreSQL'
    },
    {
      icon: 'sql.png',
      name: 'SQL'
    },
    {
      icon: 'cloud.png',
      name: 'Cloud'
    },
  ];
}
