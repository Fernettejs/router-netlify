<template>
  <div>
    <Header />
    <Banner />
    <About />
    <Services />
    <Contact />
    <Footer />

    <router-view />
  </div>
</template> 

<script>
import Header from "../components/Header.vue";
import Banner from "../components/Banner.vue";
import About from "../components/About.vue";
import Services from "../components/Services.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
// import Tawk from 'vue-echo'
  
// Vue.use(Tawk, {
//     tawkSrc: 'https://embed.tawk.to/6038be47385de407571a4c78/1eveqehid'
// })

export default {
  name: "App",
  components: {
    Header,
    Banner,
    About,
    Services,
    Contact,
    Footer,
  }
};
</script>
