import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModuleModule } from './my-material-module/my-material-module.module';
import { MimNgComponentCarouselComponent } from './mim-ng-component-carousel/mim-ng-component-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModuleModule,
  ],
  exports:[
    CommonModule,
    MyMaterialModuleModule,
    MimNgComponentCarouselComponent,
  ],
  declarations: [MimNgComponentCarouselComponent]
})
export class SharedModule { }
