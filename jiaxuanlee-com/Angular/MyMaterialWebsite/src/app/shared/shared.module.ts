import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModuleModule } from './my-material-module/my-material-module.module';
import { MimNgComponentCarouselComponent } from './mim-ng-component-carousel/mim-ng-component-carousel.component';
import { PageNotFoundComponent } from './utils/page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModuleModule,
    RouterModule,
    
  ],
  exports:[
    CommonModule,
    MyMaterialModuleModule,
    MimNgComponentCarouselComponent,
    PageNotFoundComponent,
    RouterModule,
  ],
  declarations: [MimNgComponentCarouselComponent,PageNotFoundComponent,]
})
export class SharedModule { }
