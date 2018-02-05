import { Injectable, Inject } from '@angular/core';
import { appConfig } from '../app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MusicService {

  private latestURL = '/top/album';
  private topURL = '/top/list?idx=6';
  private limit;

  constructor(
    @Inject(appConfig) private app,
    private http:HttpClient
  ) {
    this.limit = this.app.music.limit
  }

  getLatest(){
    return this.http.get(`${this.app.musicURL+this.latestURL}?offset=0&limit=${this.limit}`);
  }

}
