"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var gestures_1 = require("tns-core-modules/ui/gestures");
var utils_1 = require("tns-core-modules/utils/utils");
var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.title = 'Slider';
        this.minValue = 0;
        this.maxValue = 100;
        this.startValue = 0;
        this.unit = '';
        this.valueUpdated = new core_1.EventEmitter();
        this.containerWidth = 0;
        this.sliderButtonWidth = 0;
        this.startX = 0;
        this.positionX = 0;
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateValue(this.startValue);
        // Layouts don't have dimensions when ngOnInit is executed
        setTimeout(function () {
            _this.sliderButtonWidth = utils_1.layout.toDeviceIndependentPixels(_this.sliderButton.nativeElement.getMeasuredWidth());
            _this.containerWidth = utils_1.layout.toDeviceIndependentPixels(_this.sliderContainer.nativeElement.getMeasuredWidth());
            _this.initSlider();
        }, 200);
        this.sliderButton.nativeElement.on(gestures_1.GestureTypes.pan, function (args) {
            _this.positionX = args.deltaX + _this.startX;
            _this.updateScrubberPosition();
            _this.updateValue();
        });
        this.sliderButton.nativeElement.on(gestures_1.GestureTypes.touch, function (args) {
            // timeout to prevent pan gesture from updating after the startX is changed
            setTimeout(function () {
                if (args.action === 'down') {
                    _this.startX = _this.sliderButton.nativeElement.translateX;
                }
                else if (args.action === 'up' || args.action === 'cancel') {
                    _this.startX = _this.sliderButton.nativeElement.translateX;
                }
                if (args.action === 'up') {
                    _this.valueUpdated.emit(_this.getValue());
                }
            }, 0);
        });
    };
    SliderComponent.prototype.updateScrubberPosition = function () {
        if (this.positionX >= 0 && this.positionX <= this.containerWidth - this.sliderButtonWidth) {
            this.sliderButton.nativeElement.translateX = this.positionX;
        }
        else if (this.positionX <= 0) {
            this.sliderButton.nativeElement.translateX = 0;
        }
        else if (this.positionX >= this.containerWidth - this.sliderButtonWidth) {
            this.sliderButton.nativeElement.translateX = this.containerWidth - this.sliderButtonWidth;
        }
    };
    SliderComponent.prototype.initSlider = function () {
        this.setScrubberPosition(this.startValue);
    };
    SliderComponent.prototype.resetScrubberPositionTap = function () {
        this.setScrubberPosition(this.startValue);
        this.updateValue(this.startValue);
    };
    SliderComponent.prototype.setScrubberPosition = function (value) {
        var positionX = ((value - this.minValue) / (this.maxValue - this.minValue)) * (this.containerWidth - this.sliderButtonWidth);
        this.sliderButton.nativeElement.translateX = positionX;
    };
    SliderComponent.prototype.updateValue = function (forceValue) {
        if (forceValue === void 0) { forceValue = null; }
        var value = forceValue === null ? this.getValue() : forceValue;
        this.valueLabel.nativeElement.text = "" + Math.round(value) + this.unit;
    };
    SliderComponent.prototype.ngOnDestroy = function () {
        this.sliderButton.nativeElement.off(gestures_1.GestureTypes.touch);
        this.sliderButton.nativeElement.off(gestures_1.GestureTypes.pan);
    };
    SliderComponent.prototype.getValue = function () {
        if (this.positionX >= 0 && this.positionX <= this.containerWidth - this.sliderButtonWidth) {
            return this.positionX / (this.containerWidth - this.sliderButtonWidth) * (this.maxValue - this.minValue) + Number(this.minValue);
        }
        else if (this.positionX <= 0) {
            return this.minValue;
        }
        else if (this.positionX >= this.containerWidth - this.sliderButtonWidth) {
            return this.maxValue;
        }
    };
    __decorate([
        core_1.ViewChild('sliderButton'),
        __metadata("design:type", core_1.ElementRef)
    ], SliderComponent.prototype, "sliderButton", void 0);
    __decorate([
        core_1.ViewChild('sliderContainer'),
        __metadata("design:type", core_1.ElementRef)
    ], SliderComponent.prototype, "sliderContainer", void 0);
    __decorate([
        core_1.ViewChild('valueLabel'),
        __metadata("design:type", core_1.ElementRef)
    ], SliderComponent.prototype, "valueLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "minValue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "maxValue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "startValue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "unit", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SliderComponent.prototype, "valueUpdated", void 0);
    SliderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-slider, [ns-slider]',
            templateUrl: './slider.component.html',
            styleUrls: ['./slider.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUg7QUFDakgseURBQW1GO0FBQ25GLHNEQUFzRDtBQVF0RDtJQW1CRTtRQWJTLFVBQUssR0FBRyxRQUFRLENBQUM7UUFDakIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVULGlCQUFZLEdBQXlCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRWxFLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsY0FBUyxHQUFHLENBQUMsQ0FBQztJQUVFLENBQUM7SUFFakIsa0NBQVEsR0FBUjtRQUFBLGlCQThCQztRQTVCQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsQywwREFBMEQ7UUFDMUQsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGlCQUFpQixHQUFHLGNBQU0sQ0FBQyx5QkFBeUIsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7WUFDOUcsS0FBSSxDQUFDLGNBQWMsR0FBRyxjQUFNLENBQUMseUJBQXlCLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1lBQzlHLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsdUJBQVksQ0FBQyxHQUFHLEVBQUUsVUFBQyxJQUFJO1lBQ3hELEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNDLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyx1QkFBWSxDQUFDLEtBQUssRUFBRSxVQUFDLElBQTJCO1lBQ2pGLDJFQUEyRTtZQUMzRSxVQUFVLENBQUM7Z0JBQ1QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztnQkFDM0QsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUM1RCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztnQkFDM0QsQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO1lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0RBQXNCLEdBQXRCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDMUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDOUQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RixDQUFDO0lBQ0gsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxrREFBd0IsR0FBeEI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw2Q0FBbUIsR0FBbkIsVUFBb0IsS0FBYTtRQUMvQixJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9ILElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDekQsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxVQUFpQjtRQUFqQiwyQkFBQSxFQUFBLGlCQUFpQjtRQUMzQixJQUFNLEtBQUssR0FBRyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNqRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFNLENBQUM7SUFDMUUsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsdUJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsdUJBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzFGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkksQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUMxRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQTdGMEI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7eURBQUM7SUFDdEI7UUFBN0IsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQztrQ0FBa0IsaUJBQVU7NERBQUM7SUFDakM7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7dURBQUM7SUFFdkM7UUFBUixZQUFLLEVBQUU7O2tEQUFrQjtJQUNqQjtRQUFSLFlBQUssRUFBRTs7cURBQWM7SUFDYjtRQUFSLFlBQUssRUFBRTs7cURBQWdCO0lBQ2Y7UUFBUixZQUFLLEVBQUU7O3VEQUFnQjtJQUNmO1FBQVIsWUFBSyxFQUFFOztpREFBVztJQUVUO1FBQVQsYUFBTSxFQUFFO2tDQUFlLG1CQUFZO3lEQUE4QjtJQVp2RCxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7O09BQ1csZUFBZSxDQWlHM0I7SUFBRCxzQkFBQztDQUFBLEFBakdELElBaUdDO0FBakdZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcyc7XG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbnMtc2xpZGVyLCBbbnMtc2xpZGVyXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbGlkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBAVmlld0NoaWxkKCdzbGlkZXJCdXR0b24nKSBzbGlkZXJCdXR0b246IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlckNvbnRhaW5lcicpIHNsaWRlckNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndmFsdWVMYWJlbCcpIHZhbHVlTGFiZWw6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgdGl0bGUgPSAnU2xpZGVyJztcbiAgQElucHV0KCkgbWluVmFsdWUgPSAwO1xuICBASW5wdXQoKSBtYXhWYWx1ZSA9IDEwMDtcbiAgQElucHV0KCkgc3RhcnRWYWx1ZSA9IDA7XG4gIEBJbnB1dCgpIHVuaXQgPSAnJztcblxuICBAT3V0cHV0KCkgdmFsdWVVcGRhdGVkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb250YWluZXJXaWR0aCA9IDA7XG4gIHNsaWRlckJ1dHRvbldpZHRoID0gMDtcbiAgc3RhcnRYID0gMDtcbiAgcG9zaXRpb25YID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnN0YXJ0VmFsdWUpO1xuXG4gICAgLy8gTGF5b3V0cyBkb24ndCBoYXZlIGRpbWVuc2lvbnMgd2hlbiBuZ09uSW5pdCBpcyBleGVjdXRlZFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zbGlkZXJCdXR0b25XaWR0aCA9IGxheW91dC50b0RldmljZUluZGVwZW5kZW50UGl4ZWxzKHRoaXMuc2xpZGVyQnV0dG9uLm5hdGl2ZUVsZW1lbnQuZ2V0TWVhc3VyZWRXaWR0aCgpKTtcbiAgICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSBsYXlvdXQudG9EZXZpY2VJbmRlcGVuZGVudFBpeGVscyh0aGlzLnNsaWRlckNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldE1lYXN1cmVkV2lkdGgoKSk7XG4gICAgICB0aGlzLmluaXRTbGlkZXIoKTtcbiAgICB9LCAyMDApO1xuXG4gICAgdGhpcy5zbGlkZXJCdXR0b24ubmF0aXZlRWxlbWVudC5vbihHZXN0dXJlVHlwZXMucGFuLCAoYXJncykgPT4ge1xuICAgICAgdGhpcy5wb3NpdGlvblggPSBhcmdzLmRlbHRhWCArIHRoaXMuc3RhcnRYO1xuICAgICAgdGhpcy51cGRhdGVTY3J1YmJlclBvc2l0aW9uKCk7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlckJ1dHRvbi5uYXRpdmVFbGVtZW50Lm9uKEdlc3R1cmVUeXBlcy50b3VjaCwgKGFyZ3M6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkgPT4ge1xuICAgICAgLy8gdGltZW91dCB0byBwcmV2ZW50IHBhbiBnZXN0dXJlIGZyb20gdXBkYXRpbmcgYWZ0ZXIgdGhlIHN0YXJ0WCBpcyBjaGFuZ2VkXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGFyZ3MuYWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0WCA9IHRoaXMuc2xpZGVyQnV0dG9uLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWDtcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLmFjdGlvbiA9PT0gJ3VwJyB8fCBhcmdzLmFjdGlvbiA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0WCA9IHRoaXMuc2xpZGVyQnV0dG9uLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy5hY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlVXBkYXRlZC5lbWl0KHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlU2NydWJiZXJQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvblggPj0gMCAmJiB0aGlzLnBvc2l0aW9uWCA8PSB0aGlzLmNvbnRhaW5lcldpZHRoIC0gdGhpcy5zbGlkZXJCdXR0b25XaWR0aCkge1xuICAgICAgdGhpcy5zbGlkZXJCdXR0b24ubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gdGhpcy5wb3NpdGlvblg7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uWCA8PSAwKSB7XG4gICAgICB0aGlzLnNsaWRlckJ1dHRvbi5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvblggPj0gdGhpcy5jb250YWluZXJXaWR0aCAtIHRoaXMuc2xpZGVyQnV0dG9uV2lkdGgpIHtcbiAgICAgIHRoaXMuc2xpZGVyQnV0dG9uLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IHRoaXMuY29udGFpbmVyV2lkdGggLSB0aGlzLnNsaWRlckJ1dHRvbldpZHRoO1xuICAgIH1cbiAgfVxuXG4gIGluaXRTbGlkZXIoKSB7XG4gICAgdGhpcy5zZXRTY3J1YmJlclBvc2l0aW9uKHRoaXMuc3RhcnRWYWx1ZSk7XG4gIH1cblxuICByZXNldFNjcnViYmVyUG9zaXRpb25UYXAoKSB7XG4gICAgdGhpcy5zZXRTY3J1YmJlclBvc2l0aW9uKHRoaXMuc3RhcnRWYWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnN0YXJ0VmFsdWUpO1xuICB9XG5cbiAgc2V0U2NydWJiZXJQb3NpdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgcG9zaXRpb25YID0gKCh2YWx1ZSAtIHRoaXMubWluVmFsdWUpIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSkgKiAodGhpcy5jb250YWluZXJXaWR0aCAtIHRoaXMuc2xpZGVyQnV0dG9uV2lkdGgpO1xuICAgIHRoaXMuc2xpZGVyQnV0dG9uLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IHBvc2l0aW9uWDtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKGZvcmNlVmFsdWUgPSBudWxsKSB7XG4gICAgY29uc3QgdmFsdWUgPSBmb3JjZVZhbHVlID09PSBudWxsID8gdGhpcy5nZXRWYWx1ZSgpIDogZm9yY2VWYWx1ZTtcbiAgICB0aGlzLnZhbHVlTGFiZWwubmF0aXZlRWxlbWVudC50ZXh0ID0gYCR7TWF0aC5yb3VuZCh2YWx1ZSl9JHt0aGlzLnVuaXR9YDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc2xpZGVyQnV0dG9uLm5hdGl2ZUVsZW1lbnQub2ZmKEdlc3R1cmVUeXBlcy50b3VjaCk7XG4gICAgdGhpcy5zbGlkZXJCdXR0b24ubmF0aXZlRWxlbWVudC5vZmYoR2VzdHVyZVR5cGVzLnBhbik7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvblggPj0gMCAmJiB0aGlzLnBvc2l0aW9uWCA8PSB0aGlzLmNvbnRhaW5lcldpZHRoIC0gdGhpcy5zbGlkZXJCdXR0b25XaWR0aCkge1xuICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25YIC8gKHRoaXMuY29udGFpbmVyV2lkdGggLSB0aGlzLnNsaWRlckJ1dHRvbldpZHRoKSAqICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgKyBOdW1iZXIodGhpcy5taW5WYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uWCA8PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5taW5WYWx1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb25YID49IHRoaXMuY29udGFpbmVyV2lkdGggLSB0aGlzLnNsaWRlckJ1dHRvbldpZHRoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXhWYWx1ZTtcbiAgICB9XG4gIH1cblxufVxuIl19