import { Component, OnInit, Inject } from '@angular/core';
import { LeeService } from '../../services/lee.service';
import { appConfig } from '../../app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public lee:LeeService,
    @Inject(appConfig) public app
  ) { }

  ngOnInit() {
  }

}
