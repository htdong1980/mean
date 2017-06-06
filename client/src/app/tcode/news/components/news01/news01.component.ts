import { Component, OnInit } from '@angular/core';
// import { BaMenuService } from '../../../../theme/services';
// import { GlobalState } from '../../../../global.state';

@Component({
  selector: 'news-01',
  templateUrl: './news01.html',
  styleUrls: ['./news01.scss'],
})

export class News01 implements OnInit {
  constructor(
    // private _service: BaMenuService,
    // private _state: GlobalState,
  ) {
    /*
    let activeLink = {'title':''};
    activeLink.title = "This is News";
    this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
    */
  }

  ngOnInit() {

  }

}
