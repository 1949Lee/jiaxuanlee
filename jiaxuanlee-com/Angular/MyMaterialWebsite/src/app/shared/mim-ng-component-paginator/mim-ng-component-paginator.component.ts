import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mim-ng-component-paginator',
  templateUrl: './mim-ng-component-paginator.component.html',
  styleUrls: ['./mim-ng-component-paginator.component.scss']
})
export class MimNgComponentPaginatorComponent implements OnInit {

  @Output('change') changePageIndex:EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  doChangePageIndex(index){
    this.changePageIndex.emit(index);
  }
}
