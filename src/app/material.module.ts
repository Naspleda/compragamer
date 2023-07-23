import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatProgressBarModule } from '@angular/material/progress-bar'
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [],
    imports: [
      CommonModule
    ],
    exports: [
        MatProgressBarModule,
        MatCardModule
    ]
  })
  export class MaterialModule { }