import { Component, Input, OnInit } from '@angular/core';
import { TCode } from '../../../../../../../core/type';

@Component({
  selector: 'mje-0x',
  templateUrl: './mje0x.html',
  styleUrls: ['./mje0x.scss'],
})

export class Mje0x implements OnInit {
  /* Template file
    - prefix is the tcode-prefix
    - rights is Access Control List for user, type: Literal Array of Objects literal
    since Array extend function can not be used with Literal Array, two approach considered:
    + Approach 1: Use Literal Array of Objects
    + Approach 2: Conver to Array to easily use Array extension
  */
  @Input() prefix: string;
  @Input() rights: TCode[];

  rightsLength: number;       // Approach 1
  rightsArray: any = null;    // Approach 2

  ngOnInit (){
    // Approach 1
    this.rightsLength = this.objectLength(this.rights);
    console.log(this.rightsLength);

    // Approach 2
    this.rightsArray = $.map(this.rights, function (value) { return value; });
    this.rightsArray.sort(this.compare);
    console.log(this.rightsArray.length);
  }

  /* Approach 1: Literal Array of Objects */
  private objectLength(obj) {
    var result = 0;
    for(var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        // or Object.prototype.hasOwnProperty.call(obj, prop)
        result++;
      }
    }
    return result;
  }

  private search(obj, key, nameKey){
    for (var i=0; i < this.rightsLength; i++) {
         if (obj[i][key] == nameKey) {
             return true;
         }
     }
     return false;
  }

  /* Approach 2: Array extension */
  private searchArray(arr, key, nameKey) {
    return (arr.some(function(obj) { return obj[key] == nameKey }));
  }

  private compare(a,b) {
    if (a.tcode < b.tcode)
      return -1;
    if (a.tcode > b.tcode)
      return 1;
    return 0;
  }

  /* To get value and navigate the link */
  private onClick(value){
    alert(value);
    console.log(this.search(this.rights, 'tcode', 'mje03'));
    console.log(this.searchArray(this.rightsArray, 'tcode', 'mje03'));
  }

}
