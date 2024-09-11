import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../interfaces/contact.interface';

@Component({
  selector: 'contact-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Output()
  public onAddContact: EventEmitter<Contact> = new EventEmitter();

  public contact: Contact = { name: '', phone: '' }

  emitContact(): void {

    if (this.contact.name.length === 0) return;

    this.onAddContact.emit(this.contact);
    this.contact = { name: '', phone: '' };
  }
}
