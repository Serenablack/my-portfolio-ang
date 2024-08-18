import { Component, ElementRef, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../alert.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="contact-main">
      <div class="contact-left">
        <h1 class="contact-title">Contact</h1>
        <div class="contact-info">
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span class="contact-detail">+1-641-233-9313</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span class="contact-detail">sandhyayadav.sy079&#64;gmail.com</span>
          </div>
        </div>
      </div>

      <div class="contact-right">
        <form
          [formGroup]="contactForm"
          (submit)="onSubmit()"
          class="contact-form"
        >
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              formControlName="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea
              id="message"
              name="message"
              formControlName="message"
              required
            ></textarea>
          </div>
          <div class="button-wrap">
            <button type="submit" class="main-button">Send</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm = inject(FormBuilder).nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  readonly #http = inject(HttpClient);
  get email() {
    return this.contactForm.get('email') as FormControl;
  }
  get password() {
    return this.contactForm.get('message') as FormControl;
  }
  showSuccessAlert() {
    this.alertService.showAlert(
      'success',
      'Message sent',
      'Your message was sent successfully.'
    );
  }

  constructor(
    public elementRef: ElementRef,
    private alertService: AlertService,
    private toastr: ToastrService
  ) {}
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  onSubmit() {
    const payload = {
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
      timestamp: new Date().toISOString(),
    };
    this.showSuccess();
    // this.#http
    //   .post(
    //     'https://4g9yb1wvf7.execute-api.us-east-1.amazonaws.com/testStage/message',
    //     payload
    //   )
    //   .subscribe(
    //     (response) => {
    //       this.contactForm.reset();
    //       this.alertService.showAlert(
    //         'success',
    //         'Operation Successful',
    //         'Your operation was completed successfully.'
    //       );
    //     },
    //     (error) => {
    //       this.contactForm.reset();

    //       console.error('Error sending message:', error);
    //     }
    //   );
  }
}
