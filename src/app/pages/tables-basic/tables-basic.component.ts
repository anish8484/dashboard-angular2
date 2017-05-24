import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'lk-tables-basic',
  templateUrl: './tables-basic.component.html',
  styleUrls: [
    './tables-basic.component.scss'
  ]
})
export class TablesBasicComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) {
    appService.getState().topnavTitle = 'User Table';
  }

  ngOnInit() {
  }

}
