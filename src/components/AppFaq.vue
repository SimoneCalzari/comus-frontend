<script>
export default {
  name: 'AppFaq',
  data() {
    return {};
  },
};
</script>

<template>
  <section id="custom-faq">
    <div class="container">
      <h2>FAQ</h2>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed custom-font-secondary ps-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne">
              Spese e tariffe, come funzionano?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <h5>Spese di consegna</h5>
              <p>Più stretta è la tua prossimità al partner, minori saranno le spese di consegna. Alcuni partner gestiscono in modo autonomo sia le consegne che i relativi costi, e queste informazioni sono chiaramente indicate nell'app. Avrai la possibilità di visualizzare l'importo esatto delle spese di consegna prima di completare il pagamento.</p>
              <h5>Spese di servizio</h5>
              <p>Assicuriamo un'esperienza ottimale con Deliveroo grazie a un servizio clienti di alta qualità e nuove funzionalità. Le spese di servizio, calcolate come percentuale del totale dell'ordine, variano da un importo minimo a uno massimo. Puoi sempre visualizzare l'importo esatto prima di effettuare il pagamento, e le spese saranno calcolate prima di applicare eventuali sconti o promozioni.</p>
              <h5>Supplemento</h5>
              <p>Questa è una tariffa supplementare applicata agli ordini che non soddisfano il valore minimo stabilito per il ristorante o il supermercato specifico. Puoi comunque effettuare l'ordine al di sotto della soglia di spesa minima, ma verrà applicata questa tariffa al totale. Aggiungi ulteriori articoli al carrello per superare la soglia di spesa minima e evitare l'addebito di supplementi.</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed custom-font-secondary ps-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo">
              Per che ora posso ordinare?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>Effettuiamo consegne quotidianamente, coprendo un ampio arco temporale che va dal mattino fino a tarda sera. Tuttavia, è importante notare che i ristoranti e i supermercati aderiscono a orari diversi. Per ottenere informazioni dettagliate sugli orari di consegna nella tua zona, ti suggeriamo di visitare la nostra homepage o utilizzare l'applicazione. Troverai tutte le informazioni necessarie per pianificare il tuo ordine in base agli orari specifici dei partner nella tua città.</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed custom-font-secondary ps-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree">
              Chi è responsabile del mio ordine?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              Quando un partner, come un ristorante o un supermercato, accetta il tuo ordine, si instaura un contratto di vendita diretto tra te e il partner. Comus non è coinvolto in tale contratto e declina ogni responsabilità ad esso associata. La responsabilità per i prodotti offerti è interamente a carico del partner Comus, che garantisce la conformità alle normative vigenti. Inoltre, nel caso di acquisti da un partner Comus, è compito di quest'ultimo fornire informazioni chiare sul diritto di recesso, la restituzione degli articoli e altri obblighi del venditore. Nel caso di prodotti coperti dal diritto di recesso, hai il diritto di restituirli entro 14 giorni dalla consegna senza dover fornire una motivazione. Contatta direttamente il partner Comus per esercitare il diritto di recesso.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/typography.scss';

#custom-faq {
  padding: $size-48 0;

  h2 {
    font-family: "Bevan", serif;
  }
  .custom-font-secondary {
    font-family: "Syne", sans-serif;
    font-weight: 400;
    font-style: normal;
  } 
}
</style>
