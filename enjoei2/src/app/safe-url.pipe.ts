import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor (private sanitinizer: DomSanitizer) {}

  transform(value: string): any {
    value = 'data:image/jpeg;base64,' + value
    return this.sanitinizer.bypassSecurityTrustResourceUrl(value);
  }

}
