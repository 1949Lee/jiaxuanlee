import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatTooltipModule,
  MatIconRegistry,
} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../../utils/svg.utils';

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
  ],
  declarations: []
})
export class MyMaterialModuleModule {
  constructor(ir:MatIconRegistry,dm:DomSanitizer){
    loadSvgResources(ir,dm);
  }
}
