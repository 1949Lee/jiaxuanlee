import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatTooltipModule,
  MatIconRegistry,
  MatMenuModule,
  MatSelectModule,
  MatFormFieldModule,
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
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  declarations: []
})
export class MyMaterialModuleModule {
  constructor(ir:MatIconRegistry,dm:DomSanitizer){
    loadSvgResources(ir,dm);
  }
}
