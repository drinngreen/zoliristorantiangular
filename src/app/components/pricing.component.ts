import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  styles: [`
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 50px;
    }
    .pricing-card {
      background: white;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.3s ease;
    }
    .pricing-card:hover {
      transform: translateY(-10px);
    }
    .price {
      font-size: 40px;
      color: var(--primary);
      margin: 20px 0;
    }
    .one-time {
      font-size: 16px;
      color: var(--secondary);
      margin-top: -15px;
      margin-bottom: 20px;
    }
    .features-list {
      list-style: none;
      margin: 20px 0;
    }
    .features-list li {
      margin: 10px 0;
      color: var(--secondary);
    }
  `],
  template: `
    <section id="pricing" class="section">
      <div class="container">
        <h2 class="text-center">Piani e Prezzi</h2>
        <div class="pricing-grid">
          <div class="pricing-card">
            <h3>Base</h3>
            <div class="price">€499</div>
            <div class="one-time">Una tantum</div>
            <ul class="features-list">
              <li>Menu Digitale</li>
              <li>Gestione Ordini Base</li>
              <li>Supporto Email</li>
              <li>Aggiornamenti per 1 anno</li>
            </ul>
            <button class="btn-primary">Scegli Piano</button>
          </div>
          <div class="pricing-card">
            <h3>Premium</h3>
            <div class="price">€999</div>
            <div class="one-time">Una tantum</div>
            <ul class="features-list">
              <li>Tutto del piano Base</li>
              <li>Sistema di Delivery</li>
              <li>Analytics Avanzate</li>
              <li>Supporto Prioritario</li>
              <li>Aggiornamenti per 2 anni</li>
            </ul>
            <button class="btn-primary">Scegli Piano</button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PricingComponent {}