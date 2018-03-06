import { Component, OnInit, Inject } from '@angular/core';
import { MusicService } from '../../../services/music.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../../../services/logger.service';
import { LatstResult } from '../../../utils/music.utils';
import * as _ from 'lodash';
import { LeeService } from '../../../services/lee.service';
import { appConfig } from '../../../app.config';
import * as $ from "jquery";

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
    public movie: MusicService,
    private http: HttpClient,
    private logger: LoggerService,
    public lee:LeeService,
    @Inject(appConfig) public app
  ) {
    this.loading = true;
    this.getList(this.pageIndex);
    this.lee.contentScroll.scroll$.debounceTime(200).subscribe((res) => {
      if(this.lee.responsive.all.xs.matches){
        if($('mat-sidenav-content')[0].scrollHeight - this.app.footer.height -this.lee.viewport.ViewportSize().height - 50 <= res){
          this.getNextPage();
        }
      }
    })
  }

  ngOnInit() {
  }

  getList(index){
    this.movie.getLatest(index).subscribe((res: { [key: string]: any }) => {
      this.latestList = res as LatstResult;
      this.loading = false;
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

  getNextPage(){
    this.loading = true;
    this.pageIndex++;
    this.movie.getLatest(this.pageIndex).subscribe((res: { [key: string]: any }) => {
      this.latestList.albums = _.concat(this.latestList.albums,res.albums);
      this.loading = false;
    });
    this.logger.log('新的一页')();
  }

}
