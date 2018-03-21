import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [HeaderComponent, FooterComponent, SideNavComponent],
  exports:[
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
  ]
})
export class LayoutModule { }
