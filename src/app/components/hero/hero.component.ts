import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .hero {
      min-height: 100vh;
      background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
                  url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&auto=format&fit=crop&q=80');
      background-size: cover;
      background-position: center;
      color: white;
      display: flex;
      align-items: center;
      padding: 80px 20px;
    }

    .hero-content {
      max-width: 600px;
    }

    .btn {
      background: #ff4b4b;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.3s ease;
    }

    .btn:hover {
      background: #e63e3e;
      transform: translateY(-2px);
    }

    h1 { 
      font-size: 3.5rem; 
      margin-bottom: 20px;
      line-height: 1.2;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }
    }
  `],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Zoliiweb<br>Soluzioni Digitali per Ristoranti</h1>
          <p style="font-size: 1.2rem; margin-bottom: 30px;">
            Trasforma il tuo ristorante con soluzioni digitali innovative e personalizzate
          </p>
          <button class="btn">Scopri di Più</button>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}