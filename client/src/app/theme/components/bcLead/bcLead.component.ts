import { BcUtilsService } from '../../services/bcUtils';

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

  btnAction: string = '';
  leadInfo: string = '';

  constructor(
    private router: Router,
    private utilsService: BcUtilsService,
  ) { }

  ngOnInit () {
    this.btnAction = this.tcode.toLowerCase().substring(this.tcode.length - 2, this.tcode.length);
    // console.log(this.tcode);
    // console.log(this.btnAction);
  }

  /* To get value and navigate the link */
  private onClick(): void {
    const url: string = this.utilsService.toForm(this.tcode, this.leadInfo);
    // console.log(url);
    this.router.navigate([url]);
  }

  /* To return the home of tcode */
  private return(): void {
    const url: string = this.utilsService.toHome(this.tcode);
    // console.log(url);
    this.router.navigate([url]);
  }

}
