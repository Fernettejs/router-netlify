<template>
  <div>
    <HeaderAway />
    <section class="tattoos" id="tattoos">
        <!-- Header -->
        <div class="header" id="myHeader">
            <h1>Tattoos</h1>
        </div>

        <!-- Photo Grid -->
        <div class="row"> 
            <div class="column">
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/rifle-memorial.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/born-to-kill.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/iwo-jima.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/flag-in-arm.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/gunners-mate.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/knight.png" style="width:100%"></a>
            </div>  
            <div class="column">
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/birds.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/deer.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/mask.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/samurai.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/star.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/tree.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/inside-arm.png" style="width:100%"></a>
            </div>
            <div class="column">
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/lipstick.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/gears-in-arm.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/m4.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/mom-tattoo.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/jiu-jitsu.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/temple.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/grapes.png" style="width:100%"></a>
            </div>
            <div class="column">
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/dead.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/map.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/eagle.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/graves.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/dont-tread-on-me.png" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/scroll.png" style="width:100%"></a>
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
    -ms-flex: 25%; /* IE 10 */
    flex: 25%;
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
</style>

<script>
import HeaderAway from "../components/HeaderAway.vue";

export default {
    name: "App",
  components: {
    HeaderAway,
  },
}
</script>