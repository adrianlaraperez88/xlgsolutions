import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  // Expose a read-only signal of the currently copied text value to trigger tooltips
  private activeCopiedText = signal<string | null>(null);
  copiedText = this.activeCopiedText.asReadonly();

  /**
   * Copy the target text to clipboard, then trigger a 2-second active copied state.
   */
  copy(text: string): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => {
          this.triggerTooltip(text);
        })
        .catch(err => {
          console.error('Modern clipboard copy failed: ', err);
          this.fallbackCopy(text);
        });
    } else {
      this.fallbackCopy(text);
    }
  }

  /**
   * Fallback using standard input selections for older or restricted environments.
   */
  private fallbackCopy(text: string): void {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed'; // Avoid scrolling view on insertion
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        this.triggerTooltip(text);
      }
    } catch (err) {
      console.error('Fallback copy failed: ', err);
    }
  }

  private triggerTooltip(text: string): void {
    this.activeCopiedText.set(text);
    setTimeout(() => {
      // Clear tooltip only if another text hasn't been copied since
      if (this.activeCopiedText() === text) {
        this.activeCopiedText.set(null);
      }
    }, 2000);
  }
}
