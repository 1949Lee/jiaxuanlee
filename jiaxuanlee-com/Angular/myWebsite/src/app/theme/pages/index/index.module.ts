import { NgModule } from '@angular/core';
import { DefaultComponent } from './default/default.component';
import { ShareModule } from '../../../share/share.module';
import { IndexRoutingModule } from './index-routing.module';
import { LastNewsComponent } from './last-news/last-news.component';

@NgModule({
  imports: [
    ShareModule,
    IndexRoutingModule
  ],
  declarations: [DefaultComponent, LastNewsComponent]
})
export class IndexModule { }
