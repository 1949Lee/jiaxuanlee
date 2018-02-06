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

  constructor(
    private lee: LeeService,
    private logger: LoggerService,
    @Inject(appConfig) public app
  ) {

  }

  ngOnInit() {
    this.currerntIndex = this.startIndex;
    this.pageSum = Math.ceil(this.length / this.limit);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log(changes)();
    if (changes.length) {
      this.length = changes.length.currentValue;
      this.pageSum = Math.ceil(this.length / this.limit);
    }
    if(changes.startIndex){
      this.startIndex = changes.startIndex.currentValue;
      this.currerntIndex = this.startIndex;
    }
  }

  next() {
    if (this.currerntIndex < this.pageSum - 1) {
      this.currerntIndex += 1;
      this.doChangePageIndex(this.currerntIndex);
    }
  }

  prev() {
    if (this.currerntIndex > 0) {
      this.currerntIndex -= 1;
      this.doChangePageIndex(this.currerntIndex);
    }
  }

  doChangePageIndex(index) {
    this.changePageIndex.emit(index);
  }
}
