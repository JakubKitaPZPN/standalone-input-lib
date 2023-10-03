import {NgModule} from '@angular/core';
import {StyledInputComponent} from './styled-input.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    StyledInputComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    StyledInputComponent
  ]
})
export class StyledInputModule { }
