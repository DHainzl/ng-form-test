import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-address',
    template: `
        <div [formGroup]="form">
            <ng-container formGroupName="address">
                <div>
                    <label>Street</label>
                    <input formControlName="street" />
                </div>
                <div>
                    <label>Zip</label>
                    <input formControlName="zip" />
                </div>
                <div>
                    <label>City</label>
                    <input formControlName="city" />
                </div>
                <div>
                    <label>Country</label>
                    <input formControlName="country" />
                </div>
            </ng-container>
        </div>
    `
})
export class AppAddressComponent {
    @Input()
    form: FormGroup;
}
