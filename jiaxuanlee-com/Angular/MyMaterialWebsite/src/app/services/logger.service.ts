import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor(public isDev: boolean) { }

  log(obj: any) {
    if (this.isDev) {
      return console.log.bind(this, obj);
    }
    else {
      return (e) => { };
    }

  }

}
