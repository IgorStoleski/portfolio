import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf, NgxSpinnerModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  data: HTMLFormElement | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    public translate: TranslateService
    ) {
  }

  showSpinner() {
    this.spinner.show();

    setTimeout(() => {
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

  get f() {
    return this.form.controls;
  }

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;

  async sendMail() {
    console.log(this.form.value);
    this.showSpinner();
    let fd = new FormData();
    fd.append('name', this.nameField.nativeElement.value);
    fd.append('email', this.emailField.nativeElement.value);
    fd.append('message', this.messageField.nativeElement.value);


    await fetch("https://formspree.io/f/xyyrypdv", {
      method: "POST",
      body: fd,
      headers: {
        'Accept': 'application/json'
      }
    }).then(() => {
      setTimeout(() => {
        window.location.href = "send-mail";},4500);
    }).catch((error) => {
      console.log(error);
    });
    this.form.reset();
  }
}
