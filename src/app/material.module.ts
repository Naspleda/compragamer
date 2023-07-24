import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatProgressBarModule } from '@angular/material/progress-bar'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,

      MatProgressBarModule
    ],
    
    exports: [
      MatCardModule,
      MatButtonModule,
      MatDatepickerModule,
      MatSlideToggleModule,

      MatProgressBarModule
    ]
  })
  export class MaterialModule { }