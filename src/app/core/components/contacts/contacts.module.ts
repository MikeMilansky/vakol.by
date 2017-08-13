import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ContactsComponent } from './contacts.component';

@NgModule({
	declarations: [ContactsComponent],
	imports: [CommonModule, RouterModule],
	exports: [ContactsComponent]
})
export class ContactsModule {
	constructor() {
	}
}
