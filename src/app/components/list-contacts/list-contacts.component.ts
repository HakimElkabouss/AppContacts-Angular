import { Contact } from './../../models/contact';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  statusEdit: boolean = false;
  MyContact: Contact;
  contacts;
  constructor(private contactService: ContactService) {
    
   }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts =>{
      this.contacts = contacts;
      console.log(this.contacts);
    })
  }
  
  updateContact(contact){
    this.contactService.updateContact(contact);
    this.statusEdit = false;
  }

  editContact(contact){
    this.statusEdit = true;
    this.MyContact = contact;
  }

  deleteContact(contact){
    if(confirm('Are you sure to delete this contact !')){
      this.contactService.destroyContact(contact)
    }else{
      this.statusEdit = false
    }
  }

}
