import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-styled-input',
  template: `
    <h2>
        {{ title }}
    </h2>
  `,
  styles: [
  ]
})
export class StyledInputComponent {
  @Input() title = 'title'
}
