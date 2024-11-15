import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  styles: [`
    footer {
      background: #333;
      color: white;
      padding: 40px 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
    }

    h3, h4 {
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 10px;
    }
  `],
  template: `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div>
            <h3>Zoliiweb</h3>
            <p>Soluzioni digitali innovative per la ristorazione</p>
          </div>
          <div>
            <h4>Contatti</h4>
            <p>Email: info[at]zoliiweb.com</p>
            <p>Tel: +39 011 074 1112</p>
            <p>Corso Unione Sovietica 612/15/B</p>
            <p>10135 Torino (TO)</p>
          </div>
          <div>
            <h4>Orari</h4>
            <p>Lun-Ven: 9:00 - 18:00</p>
            <p>Sab: 9:00 - 13:00</p>
            <p>Dom: Chiuso</p>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}