import { Component } from "@angular/core";
import { ToggleButtonItem } from '~/toggle-menu/toggle-menu.component';

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  gelList: Array<IGel> = [
    {
      color: '#FF7C8E',
      label: 'L002',
      name: 'Gel Name'
    },
    {
      color: '#FEB583',
      label: 'L035',
      name: 'Gel Name'
    },
    {
      color: '#FBD695',
      label: 'L003',
      name: 'Gel Name'
    },
    {
      color: '#E165FD',
      label: 'L058',
      name: 'Gel Name'
    },
    {
      color: '#FDB665',
      label: 'L004',
      name: 'Gel Name'
    },
    {
      color: '#FF3F3D',
      label: 'L027',
      name: 'Gel Name'
    }
  ];

  selectedColorType: ColorMenuStatus = ColorMenuStatus.HUE;
  colorButtons: Array<ToggleButtonItem> = [
    {
      label: 'Color',
      type: ColorMenuStatus.COLOR
    },
    {
      label: 'Hue',
      type: ColorMenuStatus.HUE
    },
    {
      label: 'Gel',
      type: ColorMenuStatus.GEL
    }
  ];

  selectedFanType: FanMenuStatus = FanMenuStatus.OFF;
  fanButtons: Array<ToggleButtonItem> = [
    {
      label: 'Off',
      type: FanMenuStatus.OFF
    },
    {
      label: 'Auto',
      type: FanMenuStatus.AUTO
    },
    {
      label: 'Full',
      type: FanMenuStatus.FULL
    }
  ];

  constructor() { }

  onFanButtonSelect(type: FanMenuStatus) {
    this.selectedFanType = type;
  }

  onColorButtonSelect(type: ColorMenuStatus) {
    this.selectedColorType = type;
  }

  onColorTempSliderValueUpdated(value: number) {
    console.log('Color temp value: ', value);
  }
}

export enum FanMenuStatus {
  OFF = 'OFF',
  AUTO = 'AUTO',
  FULL = 'FULL'
}

export enum ColorMenuStatus {
  COLOR = 'COLOR',
  HUE = 'HUE',
  GEL = 'GEL'
}

export interface IGel {
  color?: string;
  label?: string;
  name?: string;
}