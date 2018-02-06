import { Injectable, Inject } from '@angular/core';
import { appConfig } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { LatstResult } from '../utils/music.utils';
import * as _ from 'lodash';

@Injectable()
export class MusicService {

  private latestURL = '/top/album';
  private topURL = '/top/list?idx=6';
  private _limit:number;

  set limit(val){
    this._limit = val;
  }

  constructor(
    @Inject(appConfig) private app,
    private http:HttpClient
  ) {
    this._limit = this.app.music.limits[1];
  }

  getLatest(){
    return this.http.get(`${this.app.musicURL+this.latestURL}?offset=0&limit=${this._limit}`).map((res: { [key: string]: any }) => {
      let End = new LatstResult();
      End.albums = _.map(res.albums, (ablum: { [key: string]: any }) => {
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
      End.code = res.code;
      End.total = res.total;
      return End;
    });
  }

}
