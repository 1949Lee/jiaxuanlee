import { Injectable, Inject } from '@angular/core';
import { appConfig } from '../app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {

  constructor(
    @Inject(appConfig) app,
    private http:HttpClient
  ) { }

  getLatest(){
    return this.http.get('http://musicapi.leanapp.cn/top/list?idx=0');
  }

}
