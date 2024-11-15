import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  styles: [`
    header {
      padding: 20px;
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    .logo {
      font-size: 24px;
      font-weight: 700;
      color: var(--primary);
    }
    .nav-links a {
      margin-left: 30px;
      text-decoration: none;
      color: var(--secondary);
      font-weight: 500;
    }
  `],
  template: `
    <header>
      <nav>
        <div class="logo">RistoApp</div>
        <div class="nav-links">
          <a href="#features">Caratteristiche</a>
          <a href="#pricing">Prezzi</a>
          <a href="#contact">Contatti</a>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {}