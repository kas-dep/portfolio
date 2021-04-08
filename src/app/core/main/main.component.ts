import { Component } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('toggleMenu', [
      state('closed', style({ 'z-index': -10, top: '-100%' })),
      state('open', style({ 'z-index': 150, bottom: 0 })),
      transition('* => *', animate('300ms ease')),
    ]),

    trigger('lineOneAnimation', [
      state('burger', style({ top: '0' })),
      state('x', style({ top: '50%', transform: 'rotate(-45deg)' })),
      transition(
        'burger => x',
        animate(
          '500ms ease',
          keyframes([
            style({ top: '0', offset: 0 }),
            style({ top: '50%', offset: 0.3 }),
            style({ top: '50%', offset: 0.6 }),
            style({ transform: 'rotate(-45deg)', offset: 1 }),
          ])
        )
      ),
      transition(
        'x => burger',
        animate(
          '500ms ease',
          keyframes([
            style({ transform: 'rotate(-45deg)', offset: 0 }),
            style({ transform: 'rotate(0)', offset: 0.3 }),
            style({ top: '50%', offset: 0.6 }),
            style({ top: '0', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('lineTwoAnimation', [
      state('burger', style({ backgroundColor: '#fff' })),
      state('x', style({ backgroundColor: 'transparent' })),
      transition('* => *', animate('300ms')),
    ]),
    trigger('lineThreeAnimation', [
      state('burger', style({ top: '100%' })),
      state('x', style({ top: '50%', transform: 'rotate(45deg)' })),
      transition(
        'burger => x',
        animate(
          '500ms ease',
          keyframes([
            style({ top: '100%', offset: 0 }),
            style({ top: '50%', offset: 0.3 }),
            style({ top: '50%', offset: 0.6 }),
            style({ transform: 'rotate(45deg)', offset: 1 }),
          ])
        )
      ),
      transition(
        'x => burger',
        animate(
          '500ms ease',
          keyframes([
            style({ transform: 'rotate(45deg)', offset: 0 }),
            style({ transform: 'rotate(0)', offset: 0.3 }),
            style({ top: '50%', offset: 0.6 }),
            style({ top: '100%', offset: 1 }),
          ])
        )
      ),
    ]),
  ],
})
export class MainComponent {
  isMenuOpen = false;

  constructor() {}

  openCloseMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
