<template>
  <div>
    <HeaderAway />
    <section class="tattoos" id="tattoos">
        <!-- Header -->
        <div class="header" id="myHeader">
            <h1>Tattoos</h1>
            <p>Click on the buttons to change the grid view.</p>
            <button class="btn" onclick="two()">2</button>
            <button class="btn" onclick="four()">4</button>
        </div>

        <!-- Photo Grid -->
        <div class="row"> 
            <!-- <div class="column">
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/rifle-memorial.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/born-to-kill.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/iwo-jima.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/flag-in-arm.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/gunners-mate.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/knight.jpg" style="width:100%"></a>
            </div>  
            <div class="column">
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/birds.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/deer.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/mask.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/samurai.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/star.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/tree.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/inside-arm.jpg" style="width:100%"></a>
            </div>
            <div class="column">
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/lipstick.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/gears-in-arm.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/m4.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/mom-tattoo.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/jiu-jitsu.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/temple.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/grapes.jpg" style="width:100%"></a>
            </div>
            <div class="column">
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/dead.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/map.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/eagle.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/graves.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/dont-tread-on-me.jpg" style="width:100%"></a>
            <a class="column col-xs-6" id="grayscale"><img src="../assets/images/scroll.jpg" style="width:100%"></a>
            </div> -->
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
.row {
    display: -ms-flexbox; /* IE 10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE 10 */
    flex-wrap: wrap;
    padding: 0 4px;
  }
  
  /* Create two equal columns that sits next to each other */
  .column {
    -ms-flex: 50%; /* IE 10 */
    flex: 50%;
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