import { Component, OnInit, Inject } from '@angular/core';
import { MusicService } from '../../../services/music.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../../../services/logger.service';
import { LatstResult } from '../../../utils/music.utils';
import * as _ from 'lodash';
import { LeeService } from '../../../services/lee.service';
import { appConfig } from '../../../app.config';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {
  latestList: LatstResult;


  constructor(
    private movie: MusicService,
    private http: HttpClient,
    private logger: LoggerService,
    private lee:LeeService,
    @Inject(appConfig) private app
  ) {
    this.showList();
  }

  ngOnInit() {
  }

  showList(){
    this.movie.getLatest().subscribe((res: { [key: string]: any }) => {
      this.logger.log(res)();
      this.latestList = res as LatstResult;
    });
  }

  changPageSum(val){
    this.movie.limit = val;
    // this.logger.log(val)();
    this.showList();
  }

}
