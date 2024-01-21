import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgClass, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(public translate: TranslateService) {}

  projects = [
    {
      imgSrc: 'join2.png',
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      descriptionKey: 'PROJECTS.JOIN',

      liveTestLink: 'https://igor-stoleski.developerakademie.net/join/index.html',
      githubLink: 'https://github.com/IgorStoleski',
    },
    {
      imgSrc: 'epl.png',
      title: 'El pollo loco',
      technologies: 'JavaScript | HTML | CSS',
      descriptionKey: 'PROJECTS.EPL',

      liveTestLink: 'https://igor-stoleski.developerakademie.net/el_pollo_loco/index.html',
      githubLink: 'https://github.com/IgorStoleski/el_pollo_loco',
    },
    {
      imgSrc: 'join2.png',
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      descriptionKey: 'PROJECTS.JOIN',

      liveTestLink: 'https://igor-stoleski.developerakademie.net/join/index.html',
      githubLink: 'https://github.com/IgorStoleski',
    },
    {
      imgSrc: 'epl.png',
      title: 'El pollo loco',
      technologies: 'JavaScript | HTML | CSS',
      descriptionKey: 'PROJECTS.EPL',

      liveTestLink: 'https://igor-stoleski.developerakademie.net/el_pollo_loco/index.html',
      githubLink: 'https://github.com/IgorStoleski/el_pollo_loco',
    },
  ];


}
