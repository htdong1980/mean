import { Injectable } from '@angular/core';

@Injectable()
export class BcUtilsService {
  /* To centrally transform the tcode to complete URL for navigation */
  private url: string = '/pages/tcode/';

  // toLead: URL redirect to Lead - /pages/tcode/mje/mje00
  toLead(tcode: string): string {
    const prefix: string = tcode.substring(0, (tcode.length - 2)) + '/';
    return this.url + prefix.toLowerCase() + tcode.toLowerCase();
  }

  // toForm: URL redirect to Form - /pages/tcode/mje/mje00/123
  toForm(tcode: string, value: string): string {
    const prefix: string = tcode.substring(0, (tcode.length - 2)) + '/';
    return this.url + prefix.toLowerCase() + tcode.toLowerCase() + '/' + value;
  }

  // toHome: URL redirect to Home - /pages/tcode/mje
  toHome(tcode: string): string {
    const prefix: string = tcode.substring(0, (tcode.length - 2));
    return this.url + prefix.toLowerCase();
  }
  
}
