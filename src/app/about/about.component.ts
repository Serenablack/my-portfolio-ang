import { Component, ElementRef, signal } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    // TimelineComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  // isExpanded = signal(false);

  // toggleContent() {
  //   this.isExpanded.update((value) => !value);
  // }
  skillsSection = {
    title: 'GOALS',
    subTitle:
      'DEDICATED FULL STACK DEVELOPER, FAST LEARNER AND TECH ENTHUSIAST CURRENTLY ON A LOOK OUT FOR SUITABLE ROLES',
    // skills: [
    //   '⚡ Develop highly interactive Front end / User Interfaces for web applications and mobile applications',
    //   '⚡ Creating application backend in Node, Express & Spring boot',
    //   '⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks',
    //   '⚡ Integration of third party services such as Firebase/ Heroku/ AWS',
    //   '⚡ Experience of creating niche components ',
    // ],
    futureGoals: [
      '🌱 Continue learning and mastering cutting-edge technologies',
      '🌱 Contribute to open-source projects in the community',
      '🌱 Work on innovative and impactful projects that push the boundaries of technology',
      '🌱 Find a role that challenges me and allows me to grow',
    ],
  };
  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {}
}
