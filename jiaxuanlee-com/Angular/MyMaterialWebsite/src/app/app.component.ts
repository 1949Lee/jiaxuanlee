import { ChangeDetectorRef,Component, Inject } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { appConfig } from './app.config';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { BreakpointObserver } from '@angular/cdk/layout/';
import { LeeService } from './services/lee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  viewportSize: { width: number; height: number; };
  $media: any;
  sideNavOpened: boolean;
  title = 'app';
  mobileQuery: MediaQueryList;

  fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  

  private _mobileQueryListener: () => void;

  constructor(
     private logger:LoggerService,
     @Inject(appConfig) private app,
     private media: ObservableMedia,
     private lee:LeeService
    ) {
      // this.media.subscribe((mediaChange: MediaChange) => {
      //   this.logger.log(mediaChange)();
      // });
      this.viewportSize = lee.ViewportSize();
  }
  ngOnInit() {

  }

  ngOnDestroy(): void {
    // this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  handleSideNavToggle($event:boolean){
    this.sideNavOpened = $event;
  }

}
