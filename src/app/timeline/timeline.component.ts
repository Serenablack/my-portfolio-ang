import { Component, Input, signal } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  animations: [
    trigger('barState', [
      state(
        'vertical',
        style({
          height: '50px',
          width: '4px',
          backgroundColor: '#00ff99',
          transform: 'translateY(0)',
        })
      ),
      state(
        'horizontal',
        style({
          height: '4px',
          width: 'calc(100% - 60px)',
          backgroundColor: '#00ff99',
          transform: 'translateY(-50%) translateX(40px)',
        })
      ),
      transition('vertical <=> horizontal', [animate('0.5s ease-in-out')]),
    ]),
    trigger('circleState', [
      state(
        'small',
        style({
          width: '20px',
          height: '20px',
          backgroundColor: '#00ff99',
        })
      ),
      state(
        'large',
        style({
          width: '30px',
          height: '30px',
          backgroundColor: '#00ff99',
        })
      ),
      transition('small <=> large', [animate('0.5s ease-in-out')]),
    ]),
    trigger('contentState', [
      state(
        'collapsed',
        style({
          maxHeight: '0',
          opacity: 0,
          overflow: 'hidden',
        })
      ),
      state(
        'expanded',
        style({
          maxHeight: '1000px',
          opacity: 1,
        })
      ),
      transition('collapsed <=> expanded', [animate('0.5s ease-in-out')]),
    ]),
  ],
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  isExpanded = signal(false);
  @Input() title: string = '';

  toggleContent() {
    this.isExpanded.update((value) => !value);
  }
}
