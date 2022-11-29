import {
    animate,
    keyframes,
    query,
    stagger,
    state,
    style,
    transition,
    trigger
  } from '@angular/animations';
  
  export const speedDialFabAnimations = [
    trigger('fabToggler', [
      state('inactive', style({
        transform: 'rotate(0deg)'
      })),
      state('active', style({
        transform: 'rotate(45deg)'
      })),
      transition('* <=> *', animate('2000ms cubic-bezier(0.1, 2, 0.2, 4)')),
    ]),
    trigger('speedDialStagger', [
      transition('* => *', [
  
        query(':enter', style({ opacity: 0 }), {optional: true}),
  
        query(':enter', stagger('100ms',
          [
            animate('500ms cubic-bezier(0.4, 4, 0.2, 1)',
              keyframes(
                [
                  style({opacity: 0, transform: 'translate(15px,10px)'}),
                  style({opacity: 1, transform: 'translateY(0)'}),
                ]
              )
            )
          ]
        ), {optional: true}),
  
        query(':leave', stagger('100ms',
          [
            animate('400ms cubic-bezier(0.4, 0.0, 0.2, 0.2)',
            keyframes([
              style({opacity: 1}),
              style({opacity: 1, transform: 'translate(-20px,-10px)'}),
              style({opacity: 0, transform: 'translate(50px,20px)'}),
            ])
            )
          ]), {optional: true}
        )
  
      ])
    ])
  ];
  