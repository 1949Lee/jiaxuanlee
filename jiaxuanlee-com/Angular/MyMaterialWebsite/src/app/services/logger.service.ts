import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor(isDev:boolean) { }

  log(obj:any){
    return console.log.bind(this,obj);
  }

}
