import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { IndexModule } from './index/index.module';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  imports: [
    SharedModule,
    IndexModule,
    MoviesModule,
  ],
  declarations: []
})
export class CoreModule { }
