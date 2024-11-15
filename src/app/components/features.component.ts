import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  styles: [`
    .features {
      background: var(--light);
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 50px;
    }
    .feature-card {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      text-align: center;
    }
    .feature-card i {
      font-size: 40px;
      color: var(--primary);
      margin-bottom: 20px;
    }
    h2 {
      color: var(--secondary);
      margin-bottom: 20px;
    }
    h3 {
      color: var(--secondary);
      margin-bottom: 15px;
    }
    .process-steps {
      margin-top: 60px;
    }
    .step {
      background: white;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    .testimonials {
      margin-top: 60px;
    }
    .testimonial {
      background: white;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 20px;
      font-style: italic;
    }
    .author {
      font-weight: bold;
      margin-top: 10px;
    }
  `],
  template: `
    <section id="features" class="section features">
      <div class="container">
        <h2 class="text-center">Perché Sceglierci?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <i>🎨</i>
            <h3>App su Misura</h3>
            <p>Personalizziamo ogni dettaglio per riflettere la tua identità e i tuoi valori</p>
          </div>
          <div class="feature-card">
            <i>📱</i>
            <h3>Funzionalità Potenti</h3>
            <p>Prenotazioni online, menu digitale, ordini takeaway e programmi fedeltà</p>
          </div>
          <div class="feature-card">
            <i>🚀</i>
            <h3>Tecnologia Avanzata</h3>
            <p>Le ultime tecnologie per un'esperienza utente fluida e intuitiva</p>
          </div>
        </div>

        <div class="process-steps">
          <h2 class="text-center">Come Funziona?</h2>
          <div class="step">
            <h3>1. Consultazione Iniziale</h3>
            <p>Un incontro per capire le tue esigenze e i tuoi obiettivi</p>
          </div>
          <div class="step">
            <h3>2. Progettazione e Sviluppo</h3>
            <p>Creiamo un design unico e sviluppiamo l'app con le tecnologie più avanzate</p>
          </div>
          <div class="step">
            <h3>3. Test e Lancio</h3>
            <p>Test rigorosi e pubblicazione sugli store principali</p>
          </div>
          <div class="step">
            <h3>4. Supporto Continuo</h3>
            <p>Monitoraggio costante e ottimizzazione delle performance</p>
          </div>
        </div>

        <div class="testimonials">
          <h2 class="text-center">Testimonianze</h2>
          <div class="testimonial">
            "La nostra app ha rivoluzionato il modo in cui interagiamo con i nostri clienti. Grazie a Zoliqua!"
            <div class="author">- Roberto Genovesi, Proprietario di Ristorante</div>
          </div>
          <div class="testimonial">
            "Le prenotazioni online hanno aumentato il nostro fatturato del 30%. Consiglio vivamente Asper pizza"
            <div class="author">- Maurizio Benedetti, Manager di Ristorante</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {}