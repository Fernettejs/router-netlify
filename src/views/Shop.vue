<template>
<div>
  <HeaderAway />
     <body>
    <section>
      <div class="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div class="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <button type="button" id="checkout-button">Checkout</button>
    </section>
  </body>
  <Footer />
</div>
</template>

<script type="text/javascript">
import HeaderAway from "../components/HeaderAway.vue";
import Footer from "../components/Footer.vue";

export default { 
  name: 'app',
  components: {
    HeaderAway,
    Footer
  },
    mounted() { 

    // Create an instance of the Stripe object with your publishable API key
    var stripe = window.Stripe("pk_test_51IOzS6ECIHFAOm6SOvXgrVq23A6wYyMNTyK9UAg8K1k3EdtwUeY4OgFpeFcfwdaRfa1i9cSzEK0TI34qkcVgnu3Z00dDqCqWW6");
    var checkoutButton = document.getElementById("checkout-button");
    if(checkoutButton){
    checkoutButton.addEventListener("click", function () {
      fetch("/create-checkout-session", {
        method: "POST",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (session) {
          return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function (result) {
          // If redirectToCheckout fails due to a browser or network
          // error, you should display the localized error message to your
          // customer using error.message.
          if (result.error) {
            alert(result.error.message);
          }
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    });
    }
    }}
  </script>