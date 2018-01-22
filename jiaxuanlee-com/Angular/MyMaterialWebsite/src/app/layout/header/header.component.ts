import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Router, ActivationStart, ActivationEnd } from '@angular/router';
import { LoggerService } from '../../services/logger.service';
import { appConfig } from '../../app.config';
import { LeeService } from '../../services/lee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggle: EventEmitter<boolean> = new EventEmitter();
  public viewport: { [key: string]: any };


  constructor(
    private router: Router,
    private logger: LoggerService,
    @Inject(appConfig) public app,
    private lee: LeeService
  ) {
    this.logger.log(this.app.header)();
    this.router.events.subscribe((e: any) => {
      if (e instanceof ActivationStart) {
        this.logger.log(e.snapshot.routeConfig)();
        if (e.snapshot.routeConfig.path == "index") {
          // this.logger.log('导航首页开始')();
        }
      }
      else if (e instanceof ActivationEnd) {
        if (e.snapshot.routeConfig.path == "index") {
          // this.logger.log('导航首页结束')();
        }
      }
    })
    this.viewport = this.lee.viewport.ViewportSize();
  }

  ngOnInit() {
    this.lee.viewport.viewport$.subscribe((vp) => {
      this.viewport = vp;
    })
  }

  doSideNavToggle() {
    this.sideNavToggle.emit(true);
  }

  menuButtonClick(i){
    this.app.header.items = this.app.header.items.map((item,index) =>{
      if(index == i){
        item.active = true;
        item.focus = true;
      }
      else{
        item.active = false;
        item.focus = false;
      }
      return item;
    })
  }

  submenuButtonClick(i){

  }

}
