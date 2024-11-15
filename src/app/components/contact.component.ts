import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  styles: [`
    .contact {
      background: var(--light);
    }
    .contact-form {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      color: var(--secondary);
    }
    input, textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin-top: 5px;
    }
    textarea {
      height: 120px;
    }
  `],
  template: `
    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="text-center">Contattaci</h2>
        <form class="contact-form" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" id="name" [(ngModel)]="formData.name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" [(ngModel)]="formData.email" name="email" required>
          </div>
          <div class="form-group">
            <label for="message">Messaggio</label>
            <textarea id="message" [(ngModel)]="formData.message" name="message" required></textarea>
          </div>
          <button type="submit" class="btn-primary">Invia Messaggio</button>
        </form>
      </div>
    </section>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Here you would typically handle the form submission
  }
}