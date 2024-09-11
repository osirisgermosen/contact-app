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
  ];

  public addContact(contact: Contact): void {
    const newContact: Contact = { id: uuid(), ...contact };
    this.contacts.push(newContact);
  }

  public deleteContactById(id: string): void {
    this.contacts = this.contacts.filter(x => x.id !== id);
  }

}
