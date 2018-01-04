import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports:[
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  declarations: []
})
export class MyMaterialModuleModule { }
