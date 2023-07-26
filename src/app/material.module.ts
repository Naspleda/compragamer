import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    declarations: [],
    imports: [
      CommonModule
    ],
    
    exports: [
      MatCardModule,
      MatButtonModule,
      MatSlideToggleModule,

      MatProgressBarModule,
      MatGridListModule,
      MatToolbarModule,
      MatIconModule,
      MatBadgeModule,
      MatInputModule,
      MatFormFieldModule,
    ]
  })
  export class MaterialModule { }