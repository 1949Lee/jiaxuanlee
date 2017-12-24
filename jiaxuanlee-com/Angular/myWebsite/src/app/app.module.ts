import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { ShareModule } from './share/share.module';
import { AppConfigJSON, appConfig } from './app.config';
import { LoggerService } from './_services/logger.service';

@NgModule({
  declarations: [
    ThemeComponent,
    AppComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeRoutingModule,
    AuthModule,
    ShareModule
  ],
  providers: [
    ScriptLoaderService,
    {
      provide:LoggerService,
      useFactory:(_app) => {
        return new LoggerService(_app.isDev);
      },
      deps:[appConfig]
    },
    {provide:appConfig,useValue:AppConfigJSON}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }