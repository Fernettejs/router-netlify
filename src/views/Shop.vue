<template>
<div>
  <HeaderAway />
  <div class="grid-container">
    <img class="grid-item" src="../assets/images/white-t-shirt.png" alt="Cool Shirt">
    <div class="grid-item"></div>
    <img class="grid-item" src="../assets/images/hat.png" alt="Cool Hat">
    <h2>Cool Shirt</h2>
    <div class="grid-item"></div>
    <h2>Cool Hat</h2>

      
<button class="snipcart-add-item"
        data-item-id="shirt"
        data-item-price="24.99"
        data-item-url="src/views/Shop.vue"
        data-item-description="High-quality shirt."
        data-item-image="src/assets/images/white-t-shirt.png"
        data-item-name="Cool Shirt">
        Add to cart
    </button>      
    <div class="grid-item"></div>
<button class="snipcart-add-item"
    data-item-id="hat"
    data-item-price="14.99"
    data-item-url="src/views/Shop.vue"
    data-item-description="High-quality hat."
    data-item-image="src/assets/images/murals/afghan.png"
    data-item-name="Cool Hat">
    Add to cart
  </button>
</div>
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

  <style scoped>
  .grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: var(--blue-color);
  padding: 20px;
}
.grid-item {
  background-color: rgba(0, 0, 0, .0);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  margin-left: 30%;
}
  button {
    background: var(--primary-color);
    position: relative;
    display: inline-block;
    color: #fff;
    margin-top: 40px;
    padding: 10px 25px;
    font-size: 18px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 10px;
    border: 5px solid white;
    box-shadow: -6px 6px 25px #888888;
    left: 0;
  }
  img {
    width: 200px;
    display: block;
    }
  </style>