import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Person {
    firstName: string;
    lastName: string;
    address: PersonAddress;
}

export interface PersonAddress {
    street: string;
    zip: string;
    city: string;
    country: string;
}

@Injectable()
export class PersonService {
    // These are the calls to the endpoints
    getPerson(id: number): Observable<Person> {
        return of({
            firstName: '',
            lastName: 'Baruch',
            address: {
                street: 'Neubaugasse 10 / 15',
                zip: '1070',
                city: 'Vienna',
                country: 'Austria',
            }
        });
    }

    savePerson(person: Person): Observable<boolean> {
        return of(true);
    }
}
