import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { CustomBreakpointsModule } from './bootstrap-break-points/bootstrap-break-points.module';

@NgModule({
  imports: [
    SharedModule,
    CustomBreakpointsModule,
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports:[
    HeaderComponent,
    FooterComponent,
    CustomBreakpointsModule,
  ]
})
export class LayoutModule { }
