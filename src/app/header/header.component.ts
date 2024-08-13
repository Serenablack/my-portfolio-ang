import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('rotateFrame', [
      state(
        'start',
        style({ transform: 'rotate(0deg)', borderColor: '#00ff99' })
      ),
      state(
        'end',
        style({ transform: 'rotate(360deg)', borderColor: '#00ff99' })
      ),
      transition('start => end', [animate('5s linear')]),
      transition('end => start', [animate('0s')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  constructor(private appComponent: AppComponent) {}
  greeting = {
    username: 'Sandhya Yadav',
    title: "Hi all, I'm Sandhya",
    subTitle:
      'A passionate Software Developer 🚀 having an experience of building Web applications using JavaScript / Reactjs / Nodejs / Typescript / Nextjs / Nestjs and some other cool libraries and frameworks.',
    resumeLink:
      'https://docs.google.com/document/d/1gqU-bpux8UxHcYw6Iar64c1szfDu55BWT9UAzoHn76o/edit?usp=sharing',
  };

  scrollTo(section: string) {
    this.appComponent.scrollToSection(section);
  }
  ngOnInit(): void {}
}
