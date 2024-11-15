import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  styles: [`
    .hero {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                  url('/assets/images/hero-bg.jpg');
      background-size: cover;
      background-position: center;
      min-height: 100vh;
      display: flex;
      align-items: center;
      color: white;
      padding-top: 80px;
    }
    .hero-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    .hero-content {
      max-width: 600px;
    }
    .hero-image {
      position: relative;
    }
    .app-preview {
      width: 100%;
      max-width: 500px;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      transform: perspective(1000px) rotateY(-15deg);
      transition: transform 0.3s ease;
    }
    .app-preview:hover {
      transform: perspective(1000px) rotateY(-5deg);
    }
    h1 {
      font-size: 3.5rem;
      margin-bottom: 20px;
      font-weight: 700;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 30px;
      opacity: 0.9;
      line-height: 1.6;
    }
    @media (max-width: 768px) {
      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .hero-content {
        margin: 0 auto;
      }
      h1 {
        font-size: 2.5rem;
      }
      .app-preview {
        transform: none;
        margin-top: 40px;
      }
    }
  `],
  template: `
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1>Benvenuto su Zoliqua</h1>
          <p>
            App Personalizzate per Ristoranti. Trasforma il tuo business con soluzioni digitali su misura 
            che riflettono l'unicità del tuo ristorante.
          </p>
          <button class="btn-primary">Inizia Ora</button>
        </div>
        <div class="hero-image">
          <img 
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-assets/master/restaurant-app-preview.png" 
            alt="App Preview" 
            class="app-preview"
          >
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}