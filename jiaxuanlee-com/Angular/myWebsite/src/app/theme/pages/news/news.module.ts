import { NgModule } from '@angular/core';
import { NewsListComponent } from './news-list/news-list.component';
import { ShareModule } from '../../../share/share.module';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  imports: [
    ShareModule,
    NewsRoutingModule
  ],
  declarations: [NewsListComponent]
})
export class NewsModule { }
