import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-help-link',
  templateUrl: './help-link.component.html',
  styleUrls: ['./help-link.component.css']
})
export class HelpLinkComponent implements OnInit {
  title = 'angular-learning';
  constructor() { }

  ngOnInit() {
  }
  goFirstHomework(){
    window.location.href = 'firstofassignment';
  }
  goSecondHomework(){
    window.location.href = 'secondhomework';
  }
  goThirdHomework(){
    window.location.href = 'thirdhomework';
  }
  goFourthHomework(){
    window.location.href = 'fivepage';
  }
  goFifthHomework(){
    window.location.href = 'sixpage';
  }
}
