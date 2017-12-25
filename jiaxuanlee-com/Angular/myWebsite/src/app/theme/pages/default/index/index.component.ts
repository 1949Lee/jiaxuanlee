import {Component, OnInit, ViewEncapsulation, Inject} from '@angular/core';
import { appConfig } from '../../../../app.config';

@Component({
  selector: '.m-wrapper.wrapper-no-padding-lfet',
  templateUrl: './index.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit {

  constructor(@Inject(appConfig) private app) {
  }

  ngOnInit() {
    
  }
}