import { Injectable } from '@angular/core';

@Injectable()
export class BcUtilsService {
  private url: string = '/pages/tcode/';

  toLead(tcode: string): string {
    const prefix: string = tcode.substring(0, (tcode.length - 2)) + '/';
    return this.url + prefix + tcode;
  }

  toForm(tcode: string, value: string): string {
    const prefix: string = tcode.substring(0, (tcode.length - 2)) + '/';
    return this.url + prefix + tcode + '/' + value;
  }

}
