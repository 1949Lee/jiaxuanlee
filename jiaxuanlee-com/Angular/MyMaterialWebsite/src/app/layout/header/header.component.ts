import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router ,ActivationStart,ActivationEnd} from '@angular/router';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggle: EventEmitter<boolean> = new EventEmitter();


  constructor(
    private router: Router,
    private logger:LoggerService
  ) {
    this.router.events.subscribe( (e:any) =>{
      if(e instanceof ActivationStart){
        this.logger.log(e.snapshot.routeConfig)();
        if(e.snapshot.routeConfig.path == "index"){
          this.logger.log('导航首页开始')();
        }
      }
      else if(e instanceof ActivationEnd){
        if(e.snapshot.routeConfig.path == "index"){
          this.logger.log('导航首页结束')();
        }
      }
    })
  }

  ngOnInit() {

  }

  doSideNavToggle() {
    this.sideNavToggle.emit(true);
  }

}
