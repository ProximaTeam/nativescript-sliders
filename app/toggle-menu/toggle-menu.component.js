"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ToggleMenuComponent = /** @class */ (function () {
    function ToggleMenuComponent() {
        this.buttons = [];
        this.buttonSelect = new core_1.EventEmitter();
    }
    ToggleMenuComponent.prototype.onButtonTap = function (type) {
        this.selectedButtonType = type;
        this.buttonSelect.emit(type);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ToggleMenuComponent.prototype, "selectedButtonType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ToggleMenuComponent.prototype, "buttons", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ToggleMenuComponent.prototype, "buttonSelect", void 0);
    ToggleMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-toggle-menu',
            templateUrl: './toggle-menu.component.html',
            styleUrls: ['./toggle-menu.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ToggleMenuComponent);
    return ToggleMenuComponent;
}());
exports.ToggleMenuComponent = ToggleMenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9nZ2xlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBUXZFO0lBTUU7UUFIUyxZQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUNyQyxpQkFBWSxHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUUxRCxDQUFDO0lBRWpCLHlDQUFXLEdBQVgsVUFBWSxJQUFZO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQVRRO1FBQVIsWUFBSyxFQUFFOzttRUFBb0I7SUFDbkI7UUFBUixZQUFLLEVBQUU7a0NBQVUsS0FBSzt3REFBd0I7SUFDckM7UUFBVCxhQUFNLEVBQUU7a0NBQWUsbUJBQVk7NkRBQXNDO0lBSi9ELG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMzQyxDQUFDOztPQUNXLG1CQUFtQixDQWEvQjtJQUFELDBCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbnMtdG9nZ2xlLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2dnbGUtbWVudS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlTWVudUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgc2VsZWN0ZWRCdXR0b25UeXBlO1xuICBASW5wdXQoKSBidXR0b25zOiBBcnJheTxUb2dnbGVCdXR0b25JdGVtPiA9IFtdO1xuICBAT3V0cHV0KCkgYnV0dG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgb25CdXR0b25UYXAodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZEJ1dHRvblR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYnV0dG9uU2VsZWN0LmVtaXQodHlwZSk7XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvZ2dsZUJ1dHRvbkl0ZW0ge1xuICBsYWJlbD86IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbn1cbiJdfQ==