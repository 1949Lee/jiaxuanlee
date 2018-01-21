import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { SharedModule } from '../../shared/shared.module';
import { IndexRoutingModule } from './index-routing.module';

@NgModule({
  imports: [
    SharedModule,
    IndexRoutingModule,
  ],
  declarations: [DefaultComponent]
})
export class IndexModule { }
