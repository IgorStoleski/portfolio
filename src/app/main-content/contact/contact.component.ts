import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf, NgxSpinnerModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService) {
    //spinner.show();
  }
  
  showSpinner() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  isChecked = false;

  getDynamicClass() {
    return this.isChecked ? 'checked' : 'unchecked';
  }

  getEnabledClass() {
    return (!this.isChecked || !this.form.valid) ? 'disabled' : 'enabled';
  }

  

  message!: string;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });
    
  get f(){
    return this.form.controls;
  }

  sendMail() {
    console.log(this.form.value);
    this.showSpinner();
  }


  /* @ViewChild('myForm') myForm!: ElementRef;	
  @ViewChild('nameField') nameField!: ElementRef;	
  @ViewChild('messageField') messageField!: ElementRef;	
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;	

  async sendMail() {
    // https://...  hier den pfade zu der php datei einfügen
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
 */
    /* nameField.disabled = true;
    messageField.disabled = true; 
    sendButton.disabled = true; *//* 
    //TODO - Animation einfügen (Ladebalken)
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    fd.append('email', emailField.value);

    //Senden der Daten
    await fetch('https://w01e3dbe.kasserver.com/send_mail.php',
    {
      method: 'POST',
      body: fd
    }); 

  } */

}
