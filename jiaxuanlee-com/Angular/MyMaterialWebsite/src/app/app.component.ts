import { ChangeDetectorRef, Component, Inject, ViewChild, ElementRef, AfterViewInit, enableProdMode } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { appConfig } from './app.config';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { BreakpointObserver } from '@angular/cdk/layout/';
import { LeeService } from './services/lee.service';
import { Observable } from 'rxjs';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivationStart, ActivationEnd } from '@angular/router';
import { MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR } from '@angular/material';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  widthWithoutScroll: any;
  viewportSize: { width: number; height: number; };
  $media: any;
  sideNavOpened: boolean;
  title = 'app';
  mobileQuery: MediaQueryList;
  isMarginTop: boolean = false;


  fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);



  private _mobileQueryListener: () => void;

  constructor(
    private logger: LoggerService,
    @Inject(appConfig) public app,
    private media: ObservableMedia,
    private router: Router,
    private lee: LeeService
  ) {
    // this.media.subscribe((mediaChange: MediaChange) => {
    //    this.logger.log(this.lee.ViewportSize())();
    // });
    this.viewportSize = this.lee.viewport.ViewportSize();
    this.lee.viewport.viewport$.subscribe((view) => {
      this.viewportSize = view;
    });
    this.router.events.subscribe((e: any) => {
      if (e instanceof ActivationStart) {
        this.logger.log(e.snapshot.routeConfig)();
        // this.activeRoutePath = e.snapshot.routeConfig.path;
        if (e.snapshot.routeConfig.path == 'index') {
          this.isMarginTop = false;
        }
        else {
          this.isMarginTop = true;
        }
      }
      else if (e instanceof ActivationEnd) {

      }
    })
  }
  ngOnInit() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(300) // 以免频繁处理
      .subscribe((event) => {
        // 这里处理页面变化时的操作
        this.lee.viewport.changeViewportSize();
      });
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    // this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  handleSideNavToggle($event: boolean) {
    this.sideNavOpened = $event;
  }
  contentScroll(event) {
    this.lee.contentScroll.change(
      document.getElementsByTagName('mat-sidenav-content')[0].scrollTop
    );
  }

}
