import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../services/music.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {
  latestList$: any;
  

  constructor(
    private movie:MusicService,
    private http:HttpClient,
    private logger:LoggerService
   ) { 
    this.movie.getLatest().subscribe((res:{[key:string]:any})=>{
      this.logger.log(res)();
      this.latestList$ = res.result;
    });
  }

  ngOnInit() {
  }

}
