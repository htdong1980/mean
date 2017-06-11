import { User } from '../../../../../core/models/user';
import { Mje } from '../../../../../core/models/mje';
import { MjeService } from '../../../../../core/services/mje.service';

import { BcPagerService } from '../../../../../theme/services';
import { BcUtilsService } from '../../../../../theme/services';

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'mje-list',
  templateUrl: './mjeList.html',
  styleUrls: ['./mjeList.scss'],
})

export class MjeList implements OnInit {
  // @Input() news: News[];
  currentUser: User;

  // array of all items to be paged
  mjes: Mje[] = [];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  // @Output() onEdit = new EventEmitter<string>();

  constructor(
    private http: Http,
    private router: Router,
    private mjeService: MjeService,
    private pagerService: BcPagerService,
    private utilsService: BcUtilsService,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAll();
  }

  deleteMje(_id: string) {
    this.mjeService.delete(_id).subscribe(() => { this.loadAll(); });
  }

  private loadAll() {
    this.mjeService.getAll().subscribe(mjes => {
      this.mjes = mjes;

      // initialize to page 1
      this.setPage(1);
    });
  }

  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) { return; }
      // get pager object from service
      this.pager = this.pagerService.getPager(this.mjes.length, page);
      // get current page of items
      this.pagedItems = this.mjes.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  /* To get value and navigate the link */
  private onClick(tcode: string, value: string): void {
    const url: string = this.utilsService.toForm(tcode, value);
    console.log(url);
    this.router.navigate([url]);
  }

}
