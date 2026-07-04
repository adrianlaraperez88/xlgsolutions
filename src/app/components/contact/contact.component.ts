import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { LanguageService } from '../../services/language.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  public langService = inject(LanguageService);

  submissionState: 'idle' | 'submitting' | 'success' | 'error' = 'idle';

  contactForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', Validators.required],
  });

  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submissionState = 'submitting';

    this.contactService.sendContactForm(this.contactForm.value)
      .pipe(
        finalize(() => {
          // This logic could be used to hide a loading spinner, for example
        })
      )
      .subscribe({
        next: () => {
          this.submissionState = 'success';
          this.contactForm.reset();
        },
        error: (err) => {
          console.error('Error submitting form:', err);
          this.submissionState = 'error';
        },
      });
  }
}
