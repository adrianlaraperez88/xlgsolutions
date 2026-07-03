import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  sendContactForm(formData: any): Observable<any> {
    const subject = encodeURIComponent('New Client Inquiry - XLG Solutions');
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'N/A'}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open default mail client pre-filled with form details
    window.location.href = `mailto:info@xlgsolutions.com?subject=${subject}&body=${body}`;

    // Return success state immediately after a brief delay to allow loading feedback
    return of({ success: true }).pipe(delay(1000));
  }
}
