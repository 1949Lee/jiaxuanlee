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
  MatExpansionModule,
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
    MatExpansionModule,
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
    MatExpansionModule,
  ],
  declarations: []
})
export class MyMaterialModuleModule {
  constructor(ir:MatIconRegistry,dm:DomSanitizer){
    loadSvgResources(ir,dm);
  }
}
