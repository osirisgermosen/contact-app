import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../interfaces/contact.interface';

@Component({
  selector: 'contact-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private contactService: ContactService) { }

  get contacts() {
    return [...this.contactService.contacts];
  }

  onAddContact(contact: Contact): void {
    this.contactService.addContact(contact);
  }

  onDeleteContact(id: string): void {
    this.contactService.deleteContactById(id);
  }
}
