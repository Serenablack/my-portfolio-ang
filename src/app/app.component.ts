import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';

import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    SkillComponent,
    ProjectComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    HeroComponent,
    AppComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Sandhya-Yadav';
  @ViewChild('heroSection', { static: false, read: ElementRef })
  heroSection!: ElementRef;
  @ViewChild('aboutSection', { static: false, read: ElementRef })
  aboutSection!: ElementRef;
  @ViewChild('projectSection', { static: false, read: ElementRef })
  projectSection!: ElementRef;
  @ViewChild('skillSection', { static: false, read: ElementRef })
  skillSection!: ElementRef;
  @ViewChild('contactSection', { static: false, read: ElementRef })
  contactSection!: ElementRef;

  scrollToSection(section: string) {
    let element: ElementRef | null = null;

    switch (section) {
      case 'hero':
        element = this.heroSection;
        break;
      case 'about':
        element = this.aboutSection;
        break;
      case 'project':
        element = this.projectSection;
        break;
      case 'skill':
        element = this.skillSection;
        break;
      case 'contact':
        element = this.contactSection;
        break;
      default:
        return;
    }
    console.log(element, element.nativeElement);
    if (element && element.nativeElement) {
      element.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
