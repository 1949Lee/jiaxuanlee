import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../services/music.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../../../services/logger.service';
import { LatstResult } from '../../../utils/music.utils';
import * as _ from 'lodash';
import { LeeService } from '../../../services/lee.service';

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
    private lee:LeeService
  ) {
    this.movie.getLatest().subscribe((res: { [key: string]: any }) => {
      this.logger.log(res)();
      this.latestList = new LatstResult();
      this.latestList.albums = _.map(res.albums, (ablum: { [key: string]: any }) => {
        let tem: { [key: string]: any } = {};
        tem.name = ablum.name;
        tem.blurPicUrl = ablum.blurPicUrl;
        tem.picUrl = ablum.picUrl;
        tem.id = ablum.id;
        tem.company = ablum.company;
        tem.artist = ablum.artist;
        tem.artists = ablum.artists;
        tem.size = ablum.size;
        tem.type = ablum.type;
        tem.status = ablum.status;
        tem.publishTime = ablum.publishTime;
        return tem;
      }) as Array<any>;
      
    });
  }

  ngOnInit() {
  }

}
