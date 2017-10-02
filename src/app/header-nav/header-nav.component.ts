import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.sass'],

})
export class HeaderNavComponent implements OnInit {
  public showHide;
  constructor() {
    this.showHide = false;

  }
  changeShowStatus(){
    this.showHide = !this.showHide;
  }

  ngOnInit() {
  }

}
