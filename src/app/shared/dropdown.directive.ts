import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  opened = false;
  // @HostBinding('class.open') opened = false;

  constructor(private currentEl: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') dropdownClick() {
    this.opened = !this.opened;
    if (this.opened) {
      this.renderer.addClass(this.currentEl.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.currentEl.nativeElement, 'open');
    }
  }

}
