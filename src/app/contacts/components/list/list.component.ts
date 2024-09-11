import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../interfaces/contact.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'contact-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public contacts: Contact[] = [
    { id: uuid(), name: 'Adrian', phone: '809-859-8759' }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  public onDeleteContact(id?: string): void {
    if (!id) return;

    this.onDelete.emit(id);
  }

}
