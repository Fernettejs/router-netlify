<template>
    <div>
        <HeaderAway />
        <section class="tattoos" id="tattoos">
            <!-- Header -->
            <div class="header" id="myHeader">
                <h1>Custom Airbrush</h1>
            </div>

            <!-- Photo Grid -->
            <div class="row">  
                <div class="column">
                <a class="column col-xs-6" id="grayscale"><img src="../assets/images/airbrush/berger-front.png" style="width:100%"></a>
                <a class="column col-xs-6" id="grayscale"><img src="../assets/images/airbrush/berger.png" style="width:100%"></a>
                <a class="column col-xs-6" id="grayscale"><img src="../assets/images/airbrush/canoe.png" style="width:100%"></a>
                <a class="column col-xs-6" id="grayscale"><img src="../assets/images/airbrush/usmc-tank.png" style="width:100%"></a>

                </div>
                <div class="column">
                <a class="column col-xs-6" id="grayscale"><img src="../assets/images/airbrush/eagle-bike.png" style="width:100%"></a>
                <a class="column col-xs-6" id="grayscale"><img src="../assets/images/airbrush/helo-bike.png" style="width:100%"></a>
                <a class="column col-xs-6" id="grayscale"><img src="../assets/images/airbrush/iwo-jima-bike.png" style="width:100%"></a>
                <a class="column col-xs-6" id="grayscale"><img src="../assets/images/airbrush/nvg-bike.png" style="width:100%"></a>
                </div>
                <div class="column">
                <a class="column col-xs-6" id="grayscale"><img src="../assets/images/airbrush/mattis-full.png" style="width:100%"></a>
                <a class="column col-xs-6" id="grayscale"><img src="../assets/images/airbrush/mattis-side.png" style="width:100%"></a>
                <a class="column col-xs-6" id="grayscale"><img src="../assets/images/airbrush/memorial-rear.png" style="width:100%"></a>
                <a class="column col-xs-6" id="grayscale"><img src="../assets/images/airbrush/swords.png" style="width:100%"></a>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.tattoos h1 {
    font-size: 4em;
    text-transform: uppercase;
    text-shadow: 0px 0px 6px rgb(212, 212, 212);
    -webkit-text-stroke: .2px rgb(51, 51, 51);
}
.header {
    text-align: center;
    padding: 32px;
}
.header h1 {
  background: var(--primary-color);
  border-radius: 5px;
}
.row {
    display: -ms-flexbox; /* IE 10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE 10 */
    flex-wrap: wrap;
    padding: 0 4px;
  }
  
  /* Create two equal columns that sits next to each other */
  .column {
    -ms-flex: 30%; /* IE 10 */
    flex: 30%;
    padding: 0 4px;
  }
  
  .column img {
    margin-top: 8px;
    vertical-align: middle;
  }
/* Style the buttons */
.btn {
    border: none;
    padding: 10px 16px;
    font-size: 18px;
  }
  
  .btn:hover {
    background-color: #ddd;
  }
  
  .btn.active {
    background-color: #666;
    color: white;
  }

/*GrayScale*/
.column#grayscale img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
}
  .column#grayscale:hover img {
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
    
}
.tattoos{
  background: var(--blue-color);
}
@media (max-width: 991px){
  .tattoos h1 {
    font-size: 42px;
  }
}
</style>

<script>
import HeaderAway from "../components/HeaderAway.vue";

export default {
    name: "App",
  components: {
    HeaderAway
  },

}
</script>