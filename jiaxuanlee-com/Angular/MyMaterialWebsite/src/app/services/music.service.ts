import { Injectable, Inject } from '@angular/core';
import { appConfig } from '../app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MusicService {

  private latestURL = '/top/album';
  private topURL = '/top/album';

  constructor(
    @Inject(appConfig) private app,
    private http:HttpClient
  ) { }

  getLatest(){
    return this.http.get(`${this.app.musicURL+this.latestURL}?offset=0&limit=30`);
  }

}
