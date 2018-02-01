import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {
  latestList$: Observable<Object>;
  

  constructor(
    private movie:MoviesService,
    private http:HttpClient
   ) { 
    this.latestList$ = this.movie.getLatest();
  }

  ngOnInit() {
  }

}
