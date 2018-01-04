import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModuleModule } from './my-material-module/my-material-module.module';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModuleModule,
  ],
  exports:[
    CommonModule,
    MyMaterialModuleModule,
  ],
  declarations: []
})
export class SharedModule { }
