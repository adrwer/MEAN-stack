import { Component } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component ({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  form: FormGroup;

  onSubmitForm() {

  }
}
