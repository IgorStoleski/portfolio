import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboutMeComponent,
    ContactComponent,
    HeaderComponent,
    PortfolioComponent,
    SkillsComponent,
    LandingPageComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
