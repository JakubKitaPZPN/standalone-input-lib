import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-styled-input',
  template: `
    <h2>
        {{ title }}
    </h2>
    <h3>h3: {{ title }} </h3>
  `,
  styles: [
  ]
})
export class StyledInputComponent {
  @Input() title = 'title'
}
