import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Router, ActivationStart, ActivationEnd,ActivatedRoute } from '@angular/router';
import { LoggerService } from '../../services/logger.service';
import { appConfig } from '../../app.config';
import { LeeService } from '../../services/lee.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isTop: boolean;
  private currentPath;

  @Output() sideNavToggle: EventEmitter<boolean> = new EventEmitter();
  public viewport: { [key: string]: any };
  // activeRoutePath: string;


  constructor(
    private router: Router,
    private activeRoute:ActivatedRoute,
    private logger: LoggerService,
    @Inject(appConfig) public app,
    private lee: LeeService
   ) {
    this.logger.log(this.app.header)();
    this.router.events.subscribe((e: any) => {
      if (e instanceof ActivationStart) {
        // this.logger.log(e.snapshot.routeConfig)();
        this.currentPath = e.snapshot.routeConfig.path;
        if (e.snapshot.routeConfig.path == 'index') {
          if(
            document.getElementsByTagName('mat-sidenav-content')[0].scrollTop <
            this.app.header.height / 2
          ){
            this.isTop = true;
          }
        }
        else{
          this.isTop = false;
        }
        this.app.header.items = this.app.header.items.map((item) => {
          if (item.path == e.snapshot.routeConfig.path) {
            item.active = true;
          }
          else {
            if (_.filter(item.subItems, (subItem) => { return subItem.path == e.snapshot.routeConfig.path }).length != 0) {
              item.active = true;
            }
            else {
              item.active = false;
            }
          }
          return item;
        });
      }
      else if (e instanceof ActivationEnd) {

      }
    })
    this.viewport = this.lee.viewport.ViewportSize();
    // .debounceTime(150)
    this.lee.contentScroll.scroll$.subscribe((scrollTop) => {
      if(this.currentPath== 'index'){
        if(scrollTop >= 64){
          this.isTop = false;
        }
        else{
          this.isTop = true;
        }
      }
    });
  }

  ngOnInit() {
    this.lee.viewport.viewport$.subscribe((vp) => {
      this.viewport = vp;
    })
    // this.app.changeLang("en");
  }

  doSideNavToggle() {
    this.sideNavToggle.emit(true);
  }

  menuButtonClick(i) {
    this.app.header.items = this.app.header.items.map((item, index) => {
      if (index == i) {
        if (item.path) {
          item.active = true;
          item.focus = false;
          this.router.navigate([`/${item.path}`]);
        }
        else {
          item.active = false;
          item.focus = true;
        }
      }
      return item;
    })
  }

  submenuButtonClick(i,sub_i) {
    this.router.navigate([`/${this.app.header.items[i].subItems[sub_i].path}`]);
    this.app.header.items[i].focus = false;
  }

}
