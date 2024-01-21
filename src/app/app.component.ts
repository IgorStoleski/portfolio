import AOS from 'aos';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from "./main-content/header/header.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    MainContentComponent,
    FooterComponent,
    HeaderComponent,
    TranslateModule
  ]
})
export class AppComponent {
  title = 'Portfolio';
  ngOnInit() {
    AOS.init();
  }
  constructor(public translate: TranslateService) {

  }

} 