import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  styles: [`
    .pricing {
      padding: 80px 20px;
      background: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }

    .pricing-card {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      text-align: center;
    }

    .price {
      font-size: 40px;
      color: #ff4b4b;
      margin: 20px 0;
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
    <section class="pricing">
      <div class="container">
        <h2>I Nostri Piani</h2>
        <div class="pricing-grid">
          <div class="pricing-card">
            <h3>Piano Base</h3>
            <div class="price">€499</div>
            <p>Una tantum</p>
            <ul style="list-style: none; padding: 20px 0;">
              <li>Menu Digitale Personalizzato</li>
              <li>Gestione Ordini Base</li>
              <li>QR Code per Menu</li>
              <li>Supporto Email</li>
              <li>Aggiornamenti per 1 anno</li>
            </ul>
            <button class="btn">Scegli Piano</button>
          </div>

          <div class="pricing-card">
            <h3>Piano Premium</h3>
            <div class="price">€999</div>
            <p>Una tantum</p>
            <ul style="list-style: none; padding: 20px 0;">
              <li>Tutto del piano Base</li>
              <li>Sistema di Delivery Integrato</li>
              <li>Analytics Avanzate</li>
              <li>Sistema di Prenotazioni Online</li>
              <li>Supporto Prioritario 24/7</li>
              <li>Aggiornamenti per 2 anni</li>
            </ul>
            <button class="btn">Scegli Piano</button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PricingComponent {}