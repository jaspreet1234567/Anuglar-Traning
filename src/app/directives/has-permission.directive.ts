import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective {

  @Input() appHasPermission: boolean;

  constructor(
    private tempRef: TemplateRef<any>,
    private contRef: ViewContainerRef
  ) { }

  ngOnInit() {
    if (this.appHasPermission) {
      this.contRef.createEmbeddedView(this.tempRef);
    }
  }

}
