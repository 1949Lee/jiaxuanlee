import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MimNgComponentCarouselComponent } from './mim-ng-component-carousel/mim-ng-component-carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MimNgComponentCarouselComponent
  ],
  exports:[
    CommonModule,
    MimNgComponentCarouselComponent
  ]
})
export class ShareModule { }
