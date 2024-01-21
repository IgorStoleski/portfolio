import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgClass, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  
  constructor(public translate: TranslateService) {   
     
  }

  ngOnInit() {
    const menuCheckbox = document.querySelector('.burger-menu input');
    const closeMenuLinks = document.querySelectorAll('.sidebar a');

    closeMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (menuCheckbox) {
          (menuCheckbox as HTMLInputElement).checked = false;
        }
      });
    });
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('dropbtn')) {
      this.isDropdownOpen = false;
    }
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }


}


