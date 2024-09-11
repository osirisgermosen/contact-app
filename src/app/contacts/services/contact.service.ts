import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public contacts: Contact[] = [
    { id: uuid(), name: 'Osiris', phone: '809-222-8566' },
    { id: uuid(), name: 'Din Lan', phone: '809-333-2143' },
    { id: uuid(), name: 'Nercida', phone: '809-888-2753' },
    { id: uuid(), name: 'Analuisa', phone: '809-666-7469' },
    { id: uuid(), name: 'Rebeca', phone: '809-777-2791' },
    { id: uuid(), name: 'Yadilka', phone: '809-999-3795' },
  ];

  public addContact(contact: Contact): void {
    const newContact: Contact = { id: uuid(), ...contact };
    this.contacts.push(newContact);
  }

  public deleteContactById(id: string): void {
    this.contacts = this.contacts.filter(x => x.id !== id);
  }

}
