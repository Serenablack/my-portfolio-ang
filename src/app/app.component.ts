import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillComponent } from './timeline/skill/skill.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectComponent } from './timeline/project/project.component';
import { ContactComponent } from './timeline/contact/contact.component';
import { AboutComponent } from './timeline/about/about.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    SkillComponent,
    ResumeComponent,
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
  title = 'my-portfolio-ang';
}
