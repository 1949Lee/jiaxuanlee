import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModuleModule } from './my-material-module/my-material-module.module';
import { MimNgComponentCarouselComponent } from './mim-ng-component-carousel/mim-ng-component-carousel.component';
import { PageNotFoundComponent } from './utils/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { MimNgComponentTabComponent } from './mim-ng-component-tab/mim-ng-component-tab.component';
import { MimNgComponentPaginatorComponent } from './mim-ng-component-paginator/mim-ng-component-paginator.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModuleModule,
    RouterModule,

  ],
  exports: [
    CommonModule,
    MyMaterialModuleModule,
    MimNgComponentCarouselComponent,
    PageNotFoundComponent,
    RouterModule,
    MimNgComponentTabComponent,
    MimNgComponentPaginatorComponent,
  ],
  declarations: [
    MimNgComponentCarouselComponent,
    PageNotFoundComponent,
    MimNgComponentTabComponent,
    MimNgComponentPaginatorComponent,
  ]
})
export class SharedModule { }
