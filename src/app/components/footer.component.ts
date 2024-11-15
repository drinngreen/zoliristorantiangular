import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  styles: [`
    footer {
      background: var(--secondary);
      color: white;
      padding: 40px 0;
    }
    .footer-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 30px;
    }
    .footer-section {
      flex: 1;
      min-width: 250px;
    }
    h4 {
      margin-bottom: 20px;
    }
    ul {
      list-style: none;
    }
    li {
      margin-bottom: 10px;
    }
    a {
      color: white;
      text-decoration: none;
      opacity: 0.8;
    }
    a:hover {
      opacity: 1;
    }
    .legal {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.1);
      text-align: center;
    }
    .legal a {
      margin: 0 10px;
    }
  `],
  template: `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Zoliqua</h4>
            <p>Trasforma il tuo ristorante con la tecnologia del futuro.</p>
          </div>
          <div class="footer-section">
            <h4>Contatti</h4>
            <ul>
              <li>Email: info&#64;zoliqua.com</li>
              <li>Tel: 0110741112</li>
              <li>Corso Unione Sovietica 612/15/B, Torino</li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Link Utili</h4>
            <ul>
              <li><a href="#features">Caratteristiche</a></li>
              <li><a href="#pricing">Prezzi</a></li>
              <li><a href="#contact">Contatti</a></li>
            </ul>
          </div>
        </div>
        <div class="legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Termini di Servizio</a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}