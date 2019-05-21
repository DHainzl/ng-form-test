import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { PersonFormService } from './person-form.service';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    template: `
        <ng-container *ngIf="!loading; else loadingTemplate">
            <button (click)="save()">Save</button>

            <app-name [form]="form"></app-name>
            <app-address [form]="form"></app-address>
        </ng-container>
        <ng-template #loadingTemplate>Loading</ng-template>
    `
})
export class AppComponent implements OnInit {
    loading = true;
    form: FormGroup;

    constructor(
        private personService: PersonService,
        private personFormService: PersonFormService,
    ) { }

    ngOnInit() {
        this.personService.getPerson(1).subscribe(person => {
            this.form = this.personFormService.toForm(person);
            this.loading = false;
        });
    }

    save() {
        if (!this.form.valid) {
            console.log('invalid inputs');
            return;
        }

        this.loading = true;

        const person = this.personFormService.toPerson(this.form);

        this.personService.savePerson(person).subscribe(success => {
            console.log('Person saved', person, success);
            this.loading = false;
        });
    }
}
