import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
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
export class HeroComponent {
  state = 'start';

  toggleRotation() {
    this.state = this.state === 'start' ? 'end' : 'start';
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = '../../assets/Resume_Sandhya_Yadav_Aug5.pdf '; // Path to your CV file
    link.download = 'My_CV.pdf'; // Name of the file to be downloaded
    link.click();
  }
}
