import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;

  submitForm() {
    this.submitted = true;

    // Simulate sending message (you can integrate actual backend later)
    console.log('Message sent:', {
      name: this.name,
      email: this.email,
      message: this.message
    });

    // Clear form after submission
    this.name = '';
    this.email = '';
    this.message = '';
  }
}