import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicRoutingModule } from './music-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LatestComponent} from './latest/latest.component';
import { TopComponent } from './top/top.component';

@NgModule({
  imports: [
    SharedModule,
    MusicRoutingModule
  ],
  declarations: [LatestComponent, TopComponent]
})
export class MusicModule { }
