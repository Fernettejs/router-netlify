<template>
<div class="body">
    <HeaderAway />
  <div class="header">
    <h1>The Shop</h1>
  </div>
  <div class="content">
    <div class="product-box">
      <img src="../assets/images/white-t-shirt.png" alt="Cool Shirt">
      <h2>Cool Shirt</h2>
      <button class="snipcart-add-item"
        data-item-id="shirt"
        data-item-price="24.99"
        data-item-url="/"
        data-item-description="This is where you talk about how sweet and high-quality this shirt is."
        data-item-name="Cool Shirt">
        Add to cart
      </button>
    </div>
    <div class="product-box">
      <img src="../assets/images/hat.png" alt="Cool Hat">
      <h2>Cool Hat</h2>
      <button class="snipcart-add-item"
        data-item-id="hat"
        data-item-price="14.99"
        data-item-url="/"
        data-item-description="This is where you talk about how sweet and high-quality this hat is."
        data-item-name="Cool Hat">
        Add to cart
      </button>
    </div>  
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
  .body{
    width: 100vw;
    overflow: hidden;
  }
.header {
    text-align: center;
}
h1 {
  color: #fff;
  font-size: 3em;
  text-transform: uppercase;
  -webkit-text-stroke: .2px rgb(51, 51, 51);
  background: var(--primary-color);
}
.content {
  background-color: var(--blue-color);
  display: flex;
  padding-top: 100px;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}
.product-box {
  background-color: rgba(0, 0, 0, .0);
  text-align: center;
  height: 500px;
  overflow: hidden;
}
button {
  background: var(--primary-color);
  position: relative;
  display: inline-block;
  color: #fff;
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
}
img {
  height: 200px;
  margin: 10px;
}
h2 {
  margin: 20px;
}
@media screen and (max-width: 600px) {
  img {
    width: 200px;
}
}
  </style>