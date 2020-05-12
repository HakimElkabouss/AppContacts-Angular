import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  statusContact: boolean = false;
  contact: Contact = {
    name: "",
    email: ""
  }
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    
  }

  newContact(){
    this.contactService.addContact(this.contact);
    this.contact = {
      name: "",
      email: ""
    }
    this.statusContact = false;
  }

}
