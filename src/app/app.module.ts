import { NgModule } from '@angular/core';
import { SkillComponent } from './timeline/skill/skill.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectComponent } from './timeline/project/project.component';
import { ContactComponent } from './timeline/contact/contact.component';
import { AboutComponent } from './timeline/about/about.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [],

  imports: [BrowserModule],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule {}
