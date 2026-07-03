import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  sendContactForm(formData: any): Observable<any> {
    // Simulating a backend HTTP POST network request for this frontend-only workspace.
    // In production, this would make an actual call to the backend API endpoint.
    console.log('Mock API: Submitting contact request:', formData);
    return of({ success: true }).pipe(delay(1200));
  }
}
