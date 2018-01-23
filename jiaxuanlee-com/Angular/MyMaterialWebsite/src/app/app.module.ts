import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MyMaterialModuleModule } from './shared/my-material-module/my-material-module.module';
import { LayoutModule } from './layout/layout.module';
import { appConfig, AppConfigJSON } from './app.config';
import { LoggerService } from './services/logger.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MediaMatcher, BreakpointObserver } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material';
import { loadSvgResources } from './utils/svg.utils';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { LeeService } from './services/lee.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
    // FlexLayoutModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: appConfig, useValue: AppConfigJSON },
    {
      provide: LoggerService,
      useFactory: (_app) => {
        return new LoggerService(_app.isDev);
      },
      deps: [appConfig]
    },
    MediaMatcher,
    BreakpointObserver,
    LeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
