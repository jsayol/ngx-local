import { Directive, TemplateRef, EmbeddedViewRef, ViewContainerRef, Input } from '@angular/core';

@Directive({selector: '[ngxLocal]'})
export class NgxLocal {
  private _context: NgxLocalContext = new NgxLocalContext();
  private _viewRef: EmbeddedViewRef<NgxLocalContext> = null;

  constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef<NgxLocalContext>) {
  }

  @Input()
  set ngxLocal(value: any) {
    this._context.$implicit = value;
    this._updateView();
  }

  private _updateView() {
    if (!this._viewRef) {
      this._viewContainer.clear();
      if (this._templateRef) {
        this._viewRef = this._viewContainer.createEmbeddedView(this._templateRef, this._context);
      }
    }
  }
}

export class NgxLocalContext {
  public $implicit: any = null;
}
