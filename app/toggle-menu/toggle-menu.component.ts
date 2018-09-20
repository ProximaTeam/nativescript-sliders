import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ns-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.css']
})
export class ToggleMenuComponent {

  @Input() selectedButtonType;
  @Input() buttons: Array<ToggleButtonItem> = [];
  @Output() buttonSelect: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onButtonTap(type: string) {
    this.selectedButtonType = type;
    this.buttonSelect.emit(type);
  }

}

export interface ToggleButtonItem {
  label?: string;
  type?: string;
}
