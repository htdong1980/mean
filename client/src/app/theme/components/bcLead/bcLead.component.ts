import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bc-lead',
  templateUrl: './bcLead.html',
  styleUrls: ['./bcLead.scss'],
})
export class BcLead implements OnInit {
  @Input() prefix: string;
  @Input() tcode: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit () {
  }

  /* To get value and navigate the link */
  private onClick(value: string): void {
    let url: string = '/pages/tcode/' + this.prefix + '/' + this.tcode + '/' + value;
    console.log(url);
    this.router.navigate([url]);
  }

}
