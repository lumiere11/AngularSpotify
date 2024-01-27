import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError():void{
    const elNative = this.elHost.nativeElement;
    elNative.src = "https://i.imgur.com/fFU3IqP.png"
  }
  constructor(private elHost : ElementRef) {
    console.log(this.elHost);
   }

}
