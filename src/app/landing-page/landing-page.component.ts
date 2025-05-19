import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };

  emailSent = false;
  emailError = false;

  sendEmail() {
    emailjs.send('your_service_id', 'your_template_id', this.form, 'your_public_key')
      .then(() => {
        this.emailSent = true;
        this.emailError = false;
        this.form = { name: '', email: '', message: '' };
      })
      .catch(() => {
        this.emailError = true;
        this.emailSent = false;
      });
  }
}
