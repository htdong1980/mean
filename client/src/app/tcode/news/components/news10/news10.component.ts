import { TCode } from '../../../../core/type/tcode';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'news-10',
  templateUrl: './news10.html',
  styleUrls: ['./news10.scss'],
})

export class News10 {

  prefix: string = 'news';

  userRight: TCode[] = [
    { 'id': 1, 'tcode': 'news01' },
    { 'id': 1, 'tcode': 'news03' },
    { 'id': 2, 'tcode': 'news02' },
    { 'id': 2, 'tcode': 'news04' },
    { 'id': 2, 'tcode': 'news06' },
    { 'id': 2, 'tcode': 'news05' },
    { 'id': 3, 'tcode': 'news16' },
    { 'id': 4, 'tcode': 'news12' },
    { 'id': 4, 'tcode': 'news14' },
    { 'id': 4, 'tcode': 'news15' },
    { 'id': 4, 'tcode': 'news13' },
    { 'id': 4, 'tcode': 'news11' },
  ];

  constructor(
    private router: Router
  ) { }

  /* To get value and navigate the link */
  private onClick(value: string): void {
    let url: string = '/pages/tcode/' + value + '/index/6';
    this.router.navigate([url]);
  }

}
