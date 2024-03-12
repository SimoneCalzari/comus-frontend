<script>
import store from "../store";
export default {
  name: "AppPayment",
  data() {
    return {
      store,
    };
  },

  mounted() {
    let button = document.querySelector("#submit-button");

    braintree.dropin.create(
      {
        authorization: "sandbox_g42y39zw_348pk9cgf3bgyw2b",
        selector: "#dropin-container",
        locale: "it_IT",
      },
      function (err, instance) {
        if (err) {
          console.error("Errore durante la creazione del drop-in:", err);
          return;
        }

        button.addEventListener("click", function () {
          instance.requestPaymentMethod(function (err, payload) {
            if (err) {
              console.error(
                "Errore durante la richiesta del metodo di pagamento:",
                err
              );
              return;
            }
            store.paymentIsValid = true;
          });
        });
      }
    );
  },
};
</script>

<template>
  <div id="dropin-container"></div>
  <button id="submit-button" class="button button--small button--green">
    Acquista
  </button>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";

.button {
  cursor: pointer;
  font-weight: 500;
  left: 3px;
  line-height: inherit;
  position: relative;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
}

.button--small {
  padding: 10px 20px;
  font-size: 0.875rem;
}

.button--green {
  outline: none;
  background-color: #64d18a;
  border-color: #64d18a;
  color: white;
  transition: all 200ms ease;
}

.button--green:hover {
  background-color: #8bdda8;
  color: white;
}
</style>
