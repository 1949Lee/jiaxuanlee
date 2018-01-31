import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LatestComponent} from './latest/latest.component';
import { TopComponent } from './top/top.component';

@NgModule({
  imports: [
    SharedModule,
    MoviesRoutingModule
  ],
  declarations: [LatestComponent, TopComponent]
})
export class MoviesModule { }
