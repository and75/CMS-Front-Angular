import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngVar]',
  standalone: true
})
export class NgVarDirective {
  private context: any = {};

  constructor(
    private vcRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input()
  set ngVar(value: any) {
    this.context.$implicit = this.context.ngVar = value;
    this.updateView();
  }

  private updateView() {
    this.vcRef.clear();
    this.vcRef.createEmbeddedView(this.templateRef, this.context);
  }
}