import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


  constructor() { }

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
    }
  ];
/* 
  skillIcons2 = [
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
    }
  ];

  skillIcons3 = [
    {
      icon: 'scrum.svg',
      name: 'Scrum'
    },
    {
      icon: 'material.svg',
      name: 'Material design'
    }
  ]; */



}
