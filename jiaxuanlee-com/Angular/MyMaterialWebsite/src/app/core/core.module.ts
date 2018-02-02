import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { IndexModule } from './index/index.module';
import { MusicModule } from './music/music.module';

@NgModule({
  imports: [
    SharedModule,
    IndexModule,
    MusicModule,
  ],
  declarations: []
})
export class CoreModule { }
