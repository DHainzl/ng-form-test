import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { PersonFormService } from './person-form.service';
import { AppNameComponent } from './app-name.component';
import { AppAddressComponent } from './app-address.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        AppNameComponent,
        AppAddressComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    ],
    providers: [
        PersonService,
        PersonFormService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
