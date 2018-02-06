import { Component, OnInit,Output,Input,EventEmitter, Inject} from '@angular/core';
import { LeeService } from '../../services/lee.service';
import { LoggerService } from '../../services/logger.service';
import { appConfig } from '../../app.config';

@Component({
  selector: 'app-mim-ng-component-paginator',
  templateUrl: './mim-ng-component-paginator.component.html',
  styleUrls: ['./mim-ng-component-paginator.component.scss']
})
export class MimNgComponentPaginatorComponent implements OnInit {

  @Input('startPage') startIndex:number = 0;
  @Input('totalAmount') length:number = 0;
  @Input('limit') limit:number = 0;
  @Output('change') changePageIndex:EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private lee:LeeService,
    private logger:LoggerService,
    @Inject(appConfig) public app
  ) { }

  ngOnInit() {
  }

  doChangePageIndex(index){
    this.changePageIndex.emit(index);
  }
}
