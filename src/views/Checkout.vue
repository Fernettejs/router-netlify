<template>
<div>
  <HeaderAway />

  <body class="products">
    <section>
      <div class="product">
        <img
          src="../assets/images/white-t-shirt.png"
          alt="The cover of Stubborn Attachments"
        />
        <div class="description">
          <h3>Shirt</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <button type="button" id="checkout-button">Checkout</button>
    </section>
  </body>
  <Footer />

</div>
</template>

<script>

import HeaderAway from "../components/HeaderAway.vue";
import Footer from "../components/Footer.vue";

export default { 
  name: 'app',
  components: {
    HeaderAway,
    Footer
  },
  mounted() { 
    var stripe = window.Stripe("pk_test_51IOzS6ECIHFAOm6SOvXgrVq23A6wYyMNTyK9UAg8K1k3EdtwUeY4OgFpeFcfwdaRfa1i9cSzEK0TI34qkcVgnu3Z00dDqCqWW6");
    var checkoutButton = document.getElementById("checkout-button");
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
  }}
</script>

<style scoped>
.products{
  color: var(--primary-color);
  background: var(--gray-color);
}
img {
  width: 200px;
}
button{
    background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)), url(../assets/images/American-flag-2a.png);
    position: relative;
    display: inline-block;
    color: #fff;
    margin-top: 40px;
    padding: 20px 50px;
    font-size: 18px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 10px;
    border: 5px solid white;
    box-shadow: -6px 6px 25px #888888;
}
</style>