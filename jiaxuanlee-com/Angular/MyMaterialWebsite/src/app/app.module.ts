import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MyMaterialModuleModule } from './shared/my-material-module/my-material-module.module';
import { MatIconModule } from '@angular/material';
import { LayoutModule } from './layout/layout.module';
import { MediaMatcher } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
  ],
  providers: [MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
