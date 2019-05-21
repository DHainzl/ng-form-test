import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Person } from './person.service';

@Injectable()
export class PersonFormService {
    toForm(person: Person): FormGroup {
        return new FormGroup({
            firstName: new FormControl(person.firstName, Validators.required),
            lastName: new FormControl(person.lastName, Validators.required),
            address: new FormGroup({
                street: new FormControl(person.address.street),
                zip: new FormControl(person.address.zip),
                city: new FormControl(person.address.city),
                country: new FormControl(person.address.country),
            }),
        });
    }

    toPerson(form: FormGroup): Person {
        return form.value;
    }
}
