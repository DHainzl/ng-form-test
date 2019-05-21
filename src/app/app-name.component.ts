import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-name',
    template: `
        <div [formGroup]="form">
            <div>
                <label>First Name</label>
                <input formControlName="firstName" />
            </div>
            <div>
                <label>Last Name</label>
                <input formControlName="lastName" />
            </div>
        </div>
    `
})
export class AppNameComponent {
    @Input()
    form: FormGroup;
}
