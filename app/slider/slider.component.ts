import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { GestureTypes, TouchGestureEventData } from 'tns-core-modules/ui/gestures';
import { layout } from 'tns-core-modules/utils/utils';

@Component({
  moduleId: module.id,
  selector: 'ns-slider, [ns-slider]',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {

  @ViewChild('sliderButton') sliderButton: ElementRef;
  @ViewChild('sliderContainer') sliderContainer: ElementRef;
  @ViewChild('valueLabel') valueLabel: ElementRef;

  @Input() title = 'Slider';
  @Input() minValue = 0;
  @Input() maxValue = 100;
  @Input() startValue = 0;
  @Input() unit = '';

  @Output() valueUpdated: EventEmitter<number> = new EventEmitter();

  containerWidth = 0;
  sliderButtonWidth = 0;
  startX = 0;
  positionX = 0;

  constructor() { }

  ngOnInit() {

    this.updateValue(this.startValue);

    // Layouts don't have dimensions when ngOnInit is executed
    setTimeout(() => {
      this.sliderButtonWidth = layout.toDeviceIndependentPixels(this.sliderButton.nativeElement.getMeasuredWidth());
      this.containerWidth = layout.toDeviceIndependentPixels(this.sliderContainer.nativeElement.getMeasuredWidth());
      this.initSlider();
    }, 200);

    this.sliderButton.nativeElement.on(GestureTypes.pan, (args) => {
      this.positionX = args.deltaX + this.startX;
      this.updateScrubberPosition();
      this.updateValue();
    });

    this.sliderButton.nativeElement.on(GestureTypes.touch, (args: TouchGestureEventData) => {
      // timeout to prevent pan gesture from updating after the startX is changed
      setTimeout(() => {
        if (args.action === 'down') {
          this.startX = this.sliderButton.nativeElement.translateX;
        } else if (args.action === 'up' || args.action === 'cancel') {
          this.startX = this.sliderButton.nativeElement.translateX;
        }
        if (args.action === 'up') {
          this.valueUpdated.emit(this.getValue());
        }
      }, 0);
    });
  }

  updateScrubberPosition() {
    if (this.positionX >= 0 && this.positionX <= this.containerWidth - this.sliderButtonWidth) {
      this.sliderButton.nativeElement.translateX = this.positionX;
    } else if (this.positionX <= 0) {
      this.sliderButton.nativeElement.translateX = 0;
    } else if (this.positionX >= this.containerWidth - this.sliderButtonWidth) {
      this.sliderButton.nativeElement.translateX = this.containerWidth - this.sliderButtonWidth;
    }
  }

  initSlider() {
    this.setScrubberPosition(this.startValue);
  }

  resetScrubberPositionTap() {
    this.setScrubberPosition(this.startValue);
    this.updateValue(this.startValue);
  }

  setScrubberPosition(value: number) {
    const positionX = ((value - this.minValue) / (this.maxValue - this.minValue)) * (this.containerWidth - this.sliderButtonWidth);
    this.sliderButton.nativeElement.translateX = positionX;
  }

  updateValue(forceValue = null) {
    const value = forceValue === null ? this.getValue() : forceValue;
    this.valueLabel.nativeElement.text = `${Math.round(value)}${this.unit}`;
  }

  ngOnDestroy() {
    this.sliderButton.nativeElement.off(GestureTypes.touch);
    this.sliderButton.nativeElement.off(GestureTypes.pan);
  }

  getValue() {
    if (this.positionX >= 0 && this.positionX <= this.containerWidth - this.sliderButtonWidth) {
      return this.positionX / (this.containerWidth - this.sliderButtonWidth) * (this.maxValue - this.minValue) + Number(this.minValue);
    } else if (this.positionX <= 0) {
      return this.minValue;
    } else if (this.positionX >= this.containerWidth - this.sliderButtonWidth) {
      return this.maxValue;
    }
  }

}
