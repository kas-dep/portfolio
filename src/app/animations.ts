import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const EnterLeft = [
  trigger('enterLeft', [
    transition(':enter', [
      style({ transform: ' translateX(-1.5rem)', opacity: 0 }),
      animate(
        '700ms 700ms ease-in',
        style({ transform: ' translateX(0)', opacity: 1 })
      ),
    ]),
  ]),
];

export const EnterRight = [
  trigger('enterRight', [
    transition(':enter', [
      style({ transform: ' translateX(1.5rem)', opacity: 0 }),
      animate(
        '700ms 1400ms ease-in',
        style({ transform: ' translateX(0)', opacity: 1 })
      ),
    ]),
  ]),
];
export const EnterHeader = [
  trigger('enterHeader', [
    transition(':enter', [
      style({ transform: 'translateY(-3rem)', opacity: 0 }),
      animate(
        '700ms ease-in',
        style({ transform: 'translateY(0) ', opacity: 1 })
      ),
    ]),
  ]),
];

export const FalllDown = [
  trigger('fallDown', [
    transition(':enter', [
      query('.project', [
        style({ transform: 'translateY(-16px)', opacity: 0 }),
        stagger('400ms', [
          animate('500ms', style({ transform: 'translateY(0)', opacity: 1 })),
        ]),
      ]),
    ]),
  ]),
];
