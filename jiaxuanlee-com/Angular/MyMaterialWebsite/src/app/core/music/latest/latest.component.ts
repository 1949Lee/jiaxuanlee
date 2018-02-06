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
  public latestList: LatstResult;
  public loading:boolean;
  public pageIndex:number = 0;

  constructor(
    private movie: MusicService,
    private http: HttpClient,
    private logger: LoggerService,
    private lee:LeeService,
    @Inject(appConfig) private app
  ) {
    this.loading = true;
    this.getList(0);
  }

  ngOnInit() {
  }

  getList(index){
    this.movie.getLatest(index).subscribe((res: { [key: string]: any }) => {
      this.logger.log(res)();
      this.latestList = res as LatstResult;
      this.loading = false;
      // setTimeout(() => {
      //   this.latestList.total = 61;
      // }, 1500);
    });
  }

  changPageSum(val){
    this.movie.limit = val;
    // this.logger.log(val)();
    this.getList(0);
  }

  changPage(index){
    this.loading = true;
    this.getList(index);
    this.pageIndex = index;
  }

}
