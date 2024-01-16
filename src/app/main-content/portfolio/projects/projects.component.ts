import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      imgSrc: 'join2.png',
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',

      liveTestLink: 'https://igor-stoleski.developerakademie.net/join/index.html',
      githubLink: 'https://github.com/IgorStoleski',
    },
    {
      imgSrc: 'epl.png',
      title: 'El pollo loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the killer chicken',

      liveTestLink: 'https://igor-stoleski.developerakademie.net/el_pollo_loco/index.html',
      githubLink: 'https://github.com/IgorStoleski',
    },
    {
      imgSrc: 'join2.png',
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',

      liveTestLink: 'https://igor-stoleski.developerakademie.net/join/index.html',
      githubLink: 'https://github.com/IgorStoleski',
    },
    {
      imgSrc: 'epl.png',
      title: 'El pollo loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the killer chicken',

      liveTestLink: 'https://igor-stoleski.developerakademie.net/el_pollo_loco/index.html',
      githubLink: 'https://github.com/IgorStoleski',
    },
  ];


}
