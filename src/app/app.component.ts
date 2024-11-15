import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    PricingComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <main>
      <app-hero></app-hero>
      <app-pricing></app-pricing>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </main>
  `
})
export class AppComponent {}