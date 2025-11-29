import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = '/api/contact'; // SSR-safe relative URL

  constructor(private http: HttpClient) {}

  /**
   * Sends the contact form message to the server
   * @param payload contact form details
   */
  sendMessage(payload: ContactFormPayload): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }

  // You can add more global APIs here
  // Example:
  // getAllMessages(): Observable<any> {
  //   return this.http.get('/api/messages');
  // }
}
