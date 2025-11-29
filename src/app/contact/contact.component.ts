import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  submitForm() {
    if (!this.name || !this.email || !this.message) {
      return; // don’t send if invalid
    }

    this.loading = true;

    const formData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    // Example API call (replace with your backend endpoint)
    this.http.post('https://your-api.com/contact', formData).subscribe({
      next: () => {
        this.submitted = true;
        this.loading = false;

        // Reset form fields
        this.name = '';
        this.email = '';
        this.message = '';
      },
      error: (err) => {
        console.error('Error sending message:', err);
        this.loading = false;
      }
    });
  }
}
