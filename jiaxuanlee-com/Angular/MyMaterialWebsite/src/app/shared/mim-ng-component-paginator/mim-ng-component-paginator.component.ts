import { Component, OnInit, Output, Input, EventEmitter, Inject, SimpleChanges } from '@angular/core';
import { LeeService } from '../../services/lee.service';
import { LoggerService } from '../../services/logger.service';
import { appConfig } from '../../app.config';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-mim-ng-component-paginator',
  templateUrl: './mim-ng-component-paginator.component.html',
  styleUrls: ['./mim-ng-component-paginator.component.scss']
})
export class MimNgComponentPaginatorComponent implements OnInit, OnChanges {

  @Input('startPage') public startIndex: number = 0;
  @Input('totalAmount') public length: number = 0;
  @Input('limit') public limit: number = 0;
  @Output('change') public changePageIndex: EventEmitter<number> = new EventEmitter<number>();
  public currerntIndex: number = 0;
  public pageSum: number = 0;
  public pagerShow: Array<{[key:string]:any}>;

  constructor(
    private lee: LeeService,
    private logger: LoggerService,
    @Inject(appConfig) public app
  ) {
    this.initPagerShow();
    this.logger.log(this.lee.responsive.curr)();
    this.lee.responsive.xs$.subscribe((res)=>{
      this.logger.log(res.matches)();
    });
  }

  ngOnInit() {
    this.currerntIndex = this.startIndex;
    this.pageSum = Math.ceil(this.length / this.limit);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.logger.log(changes)();
    if (changes.length) {
      this.length = changes.length.currentValue;
      this.pageSum = Math.ceil(this.length / this.limit);
    }
    if(changes.startIndex){
      this.startIndex = changes.startIndex.currentValue;
      this.currerntIndex = this.startIndex;
    }
  }

  initPagerShow(){
    this.pagerShow = new Array(this.app.paginator.shownSum);
    this.pagerShow = this.pagerShow.fill({}).map((p,index)=>{
      p = {};
      p.value = index;
      p.text = index+1;
      return p
    });
  }

  resetPagerShow(){
    let start = this.currerntIndex - Math.floor(this.app.paginator.shownSum / 2) + 1;
    this.pagerShow = this.pagerShow.fill({}).map((p,index)=>{
      p = {};
      p.value = index + start;
      p.text = index+1 + start;
      return p
    });
    this.logger.log(this.pagerShow)();
  }

  next() {
    if (this.currerntIndex < this.pageSum - 1) {
      this.doChangePageIndex(this.currerntIndex+1);
    }
  }

  prev() {
    if (this.currerntIndex > 0) {
      this.doChangePageIndex(this.currerntIndex-1);
    }
  }

  doChangePageIndex(index) {
    this.changePageIndex.emit(index);
    this.currerntIndex = index;
    if(this.currerntIndex > this.pagerShow[Math.floor(this.app.paginator.shownSum / 2)].value){
      this.resetPagerShow();
    }
  }
}
