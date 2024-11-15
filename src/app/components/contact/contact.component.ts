import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  styles: [`
    .contact-section {
      padding: 80px 20px;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .contact-form {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
    }

    .form-group textarea {
      height: 150px;
      resize: vertical;
    }

    .btn {
      background: #ff4b4b;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      font-size: 16px;
      transition: background 0.3s ease;
    }

    .btn:hover {
      background: #e63e3e;
    }

    h2 { 
      font-size: 2.5rem; 
      margin-bottom: 20px; 
      text-align: center; 
    }
  `],
  template: `
    <section class="contact-section" id="contatti">
      <div class="container">
        <h2>Contattaci</h2>
        <form class="contact-form" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="name">Nome e Cognome</label>
            <input type="text" id="name" [(ngModel)]="formData.name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" [(ngModel)]="formData.email" name="email" required>
          </div>
          <div class="form-group">
            <label for="phone">Telefono</label>
            <input type="tel" id="phone" [(ngModel)]="formData.phone" name="phone" required>
          </div>
          <div class="form-group">
            <label for="message">Il tuo messaggio</label>
            <textarea id="message" [(ngModel)]="formData.message" name="message" required></textarea>
          </div>
          <button type="submit" class="btn">Invia Messaggio</button>
        </form>
      </div>
    </section>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Qui andrebbe implementata la logica di invio del form
  }
}