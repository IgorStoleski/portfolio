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
      technologies: 'JavaScript | HTML | CSS | Django | Python',
      descriptionKey: 'PROJECTS.JOIN',

      liveTestLink: 'https://kanban-join.de/',
      githubLink: 'https://github.com/IgorStoleski/join_frontend',
    },
    {
      imgSrc: 'epl.png',
      title: 'El pollo loco',
      technologies: 'JavaScript | HTML | CSS',
      descriptionKey: 'PROJECTS.EPL',

      liveTestLink: 'https://el-pollo-loco.igor-stoleski.de/',
      githubLink: 'https://github.com/IgorStoleski/el_pollo_loco',
    },
    {
      imgSrc: 'videoflix.png',
      title: 'Videoflix',
      technologies: 'Angular | JavaScript | HTML | CSS | Django | Python | Redis | PostgreSQL',
      descriptionKey: 'PROJECTS.VIDEOFLIX',

      liveTestLink: 'https://video-flix.de/',
      githubLink: 'https://github.com/IgorStoleski/videoflix_backend',
    }
  ];


}
