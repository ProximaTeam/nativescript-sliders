"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        this.gelList = [
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
        this.selectedColorType = ColorMenuStatus.HUE;
        this.colorButtons = [
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
        this.selectedFanType = FanMenuStatus.OFF;
        this.fanButtons = [
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
    }
    ItemsComponent.prototype.onFanButtonSelect = function (type) {
        this.selectedFanType = type;
    };
    ItemsComponent.prototype.onColorButtonSelect = function (type) {
        this.selectedColorType = type;
    };
    ItemsComponent.prototype.onColorTempSliderValueUpdated = function (value) {
        console.log('Color temp value: ', value);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            styleUrls: ['./items.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
var FanMenuStatus;
(function (FanMenuStatus) {
    FanMenuStatus["OFF"] = "OFF";
    FanMenuStatus["AUTO"] = "AUTO";
    FanMenuStatus["FULL"] = "FULL";
})(FanMenuStatus = exports.FanMenuStatus || (exports.FanMenuStatus = {}));
var ColorMenuStatus;
(function (ColorMenuStatus) {
    ColorMenuStatus["COLOR"] = "COLOR";
    ColorMenuStatus["HUE"] = "HUE";
    ColorMenuStatus["GEL"] = "GEL";
})(ColorMenuStatus = exports.ColorMenuStatus || (exports.ColorMenuStatus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBUzFDO0lBbUVFO1FBakVBLFlBQU8sR0FBZ0I7WUFDckI7Z0JBQ0UsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxVQUFVO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxVQUFVO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxVQUFVO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxVQUFVO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxVQUFVO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxVQUFVO2FBQ2pCO1NBQ0YsQ0FBQztRQUVGLHNCQUFpQixHQUFvQixlQUFlLENBQUMsR0FBRyxDQUFDO1FBQ3pELGlCQUFZLEdBQTRCO1lBQ3RDO2dCQUNFLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxlQUFlLENBQUMsS0FBSzthQUM1QjtZQUNEO2dCQUNFLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxlQUFlLENBQUMsR0FBRzthQUMxQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxlQUFlLENBQUMsR0FBRzthQUMxQjtTQUNGLENBQUM7UUFFRixvQkFBZSxHQUFrQixhQUFhLENBQUMsR0FBRyxDQUFDO1FBQ25ELGVBQVUsR0FBNEI7WUFDcEM7Z0JBQ0UsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLGFBQWEsQ0FBQyxHQUFHO2FBQ3hCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLGFBQWEsQ0FBQyxJQUFJO2FBQ3pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLGFBQWEsQ0FBQyxJQUFJO2FBQ3pCO1NBQ0YsQ0FBQztJQUVjLENBQUM7SUFFakIsMENBQWlCLEdBQWpCLFVBQWtCLElBQW1CO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCw0Q0FBbUIsR0FBbkIsVUFBb0IsSUFBcUI7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0RBQTZCLEdBQTdCLFVBQThCLEtBQWE7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBL0VVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7O09BQ1csY0FBYyxDQWdGMUI7SUFBRCxxQkFBQztDQUFBLEFBaEZELElBZ0ZDO0FBaEZZLHdDQUFjO0FBa0YzQixJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIsNEJBQVcsQ0FBQTtJQUNYLDhCQUFhLENBQUE7SUFDYiw4QkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUpXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBSXhCO0FBRUQsSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3pCLGtDQUFlLENBQUE7SUFDZiw4QkFBVyxDQUFBO0lBQ1gsOEJBQVcsQ0FBQTtBQUNiLENBQUMsRUFKVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUkxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUb2dnbGVCdXR0b25JdGVtIH0gZnJvbSAnfi90b2dnbGUtbWVudS90b2dnbGUtbWVudS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFsnLi9pdGVtcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQge1xuXG4gIGdlbExpc3Q6IEFycmF5PElHZWw+ID0gW1xuICAgIHtcbiAgICAgIGNvbG9yOiAnI0ZGN0M4RScsXG4gICAgICBsYWJlbDogJ0wwMDInLFxuICAgICAgbmFtZTogJ0dlbCBOYW1lJ1xuICAgIH0sXG4gICAge1xuICAgICAgY29sb3I6ICcjRkVCNTgzJyxcbiAgICAgIGxhYmVsOiAnTDAzNScsXG4gICAgICBuYW1lOiAnR2VsIE5hbWUnXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2xvcjogJyNGQkQ2OTUnLFxuICAgICAgbGFiZWw6ICdMMDAzJyxcbiAgICAgIG5hbWU6ICdHZWwgTmFtZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbG9yOiAnI0UxNjVGRCcsXG4gICAgICBsYWJlbDogJ0wwNTgnLFxuICAgICAgbmFtZTogJ0dlbCBOYW1lJ1xuICAgIH0sXG4gICAge1xuICAgICAgY29sb3I6ICcjRkRCNjY1JyxcbiAgICAgIGxhYmVsOiAnTDAwNCcsXG4gICAgICBuYW1lOiAnR2VsIE5hbWUnXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2xvcjogJyNGRjNGM0QnLFxuICAgICAgbGFiZWw6ICdMMDI3JyxcbiAgICAgIG5hbWU6ICdHZWwgTmFtZSdcbiAgICB9XG4gIF07XG5cbiAgc2VsZWN0ZWRDb2xvclR5cGU6IENvbG9yTWVudVN0YXR1cyA9IENvbG9yTWVudVN0YXR1cy5IVUU7XG4gIGNvbG9yQnV0dG9uczogQXJyYXk8VG9nZ2xlQnV0dG9uSXRlbT4gPSBbXG4gICAge1xuICAgICAgbGFiZWw6ICdDb2xvcicsXG4gICAgICB0eXBlOiBDb2xvck1lbnVTdGF0dXMuQ09MT1JcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnSHVlJyxcbiAgICAgIHR5cGU6IENvbG9yTWVudVN0YXR1cy5IVUVcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnR2VsJyxcbiAgICAgIHR5cGU6IENvbG9yTWVudVN0YXR1cy5HRUxcbiAgICB9XG4gIF07XG5cbiAgc2VsZWN0ZWRGYW5UeXBlOiBGYW5NZW51U3RhdHVzID0gRmFuTWVudVN0YXR1cy5PRkY7XG4gIGZhbkJ1dHRvbnM6IEFycmF5PFRvZ2dsZUJ1dHRvbkl0ZW0+ID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnT2ZmJyxcbiAgICAgIHR5cGU6IEZhbk1lbnVTdGF0dXMuT0ZGXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ0F1dG8nLFxuICAgICAgdHlwZTogRmFuTWVudVN0YXR1cy5BVVRPXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ0Z1bGwnLFxuICAgICAgdHlwZTogRmFuTWVudVN0YXR1cy5GVUxMXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgb25GYW5CdXR0b25TZWxlY3QodHlwZTogRmFuTWVudVN0YXR1cykge1xuICAgIHRoaXMuc2VsZWN0ZWRGYW5UeXBlID0gdHlwZTtcbiAgfVxuXG4gIG9uQ29sb3JCdXR0b25TZWxlY3QodHlwZTogQ29sb3JNZW51U3RhdHVzKSB7XG4gICAgdGhpcy5zZWxlY3RlZENvbG9yVHlwZSA9IHR5cGU7XG4gIH1cblxuICBvbkNvbG9yVGVtcFNsaWRlclZhbHVlVXBkYXRlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc29sZS5sb2coJ0NvbG9yIHRlbXAgdmFsdWU6ICcsIHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBGYW5NZW51U3RhdHVzIHtcbiAgT0ZGID0gJ09GRicsXG4gIEFVVE8gPSAnQVVUTycsXG4gIEZVTEwgPSAnRlVMTCdcbn1cblxuZXhwb3J0IGVudW0gQ29sb3JNZW51U3RhdHVzIHtcbiAgQ09MT1IgPSAnQ09MT1InLFxuICBIVUUgPSAnSFVFJyxcbiAgR0VMID0gJ0dFTCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJR2VsIHtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xufSJdfQ==