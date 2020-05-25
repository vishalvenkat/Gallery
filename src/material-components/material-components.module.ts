import { NgModule } from '@angular/core';
import {MatCardModule, MatSelectModule, MatToolbarModule} from '@angular/material';

const materialComponents = [
  MatToolbarModule,
  MatSelectModule,
  MatCardModule
];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialComponentsModule { }
