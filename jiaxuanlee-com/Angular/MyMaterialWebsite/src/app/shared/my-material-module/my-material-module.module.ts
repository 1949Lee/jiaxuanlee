import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  exports:[
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: []
})
export class MyMaterialModuleModule { }
