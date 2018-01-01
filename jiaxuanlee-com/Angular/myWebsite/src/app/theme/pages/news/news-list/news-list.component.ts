import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: "app-news-list",
  templateUrl: './news-list.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
