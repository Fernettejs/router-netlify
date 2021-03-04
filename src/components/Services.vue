<template>
     <section class="services" id="services">
        <div class="heading">
            <h2>Services</h2>
            <h3>This is what I do.</h3>
        </div>
        <div class="content">
            <div ref="card" class="servicesBox">
                <router-link to="/airbrush">
                    <img src="../assets/images/airbrush/iwo-jima-bike.png" alt="">
                </router-link>
                <h2>Custom Airbrush</h2>
            </div>
            <div ref="card" class="servicesBox">
                <router-link to="/tattoos">
                    <img src="../assets/images/bandana.png" alt="">
                </router-link>
                <h2>Tattoos</h2>
            </div>
            <div ref="card" class="servicesBox">
                <router-link to="/murals">
                    <img src="../assets/images/murals/afghan.png" alt="">
                </router-link>
                <h2>Wall Murals</h2>
            </div>
            <div ref="card" class="servicesBox">
                <router-link to="/canvas">
                    <img src="../assets/images/canvas/ied.png" alt="">
                </router-link>
                <h2>Canvas Paintings</h2>
            </div>
        </div>
    </section>
</template>

<style scoped>
.services {
    background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, 0.7)), url(../assets/images/American-flag-2a.png);
    background-size: cover;
    background-attachment: fixed;
}

img{
    max-width: 100%;
    border-radius: 30px;
}

.services .content{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
}
.servicesBox h2 {
    font-size: 32px !important;
}
.services .content .servicesBox{
    padding: 40px 20px;
    background: #222;
    color: var(--secondary-color);
    width: 300px;
    margin: 20px;
    text-align: center;
    transition: 0.5s;
    border-radius: 10px;
}
.services .content .servicesBox img{
    width: 500px;
    height: 500px;
    object-fit: cover;
    background: rgba(24, 39, 54, 0.65);
    opacity: 1;
    display: block;
    transition: .5s ease;
    backface-visibility: hidden;
    background-color: white;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    z-index: 99;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
}
.servicesBox a {
    text-decoration:none
}
.servicesBox a:visited {
    text-decoration:none;
    color: white;
}
.services .content .servicesBox:hover{
    background-color:var( --secondary-color);
    color: white;
    transform: scale(1.05);
    transition: .2s ease-in-out;
    box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.25);
    border: 3px solid white;
    border-radius: 5px;

}
.services .content .servicesBox:hover img{
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
}
.services .content .servicesBox h2{
    font-size: 20px;
    font-weight: 60px;
}

.services h3 {
    background:var(--secondary-color);
    border: 3px solid white;
    color: white;
}
@media (max-width: 991px){
.services .content .servicesBox img{
    width: 300px;
    height: 300px;
}
.servicesBox h2 {
    font-size: 24px !important;
}
}
/* Responsive navigation menu - display links on top of each other instead of next to each other (for mobile devices) */
@media screen and (max-width: 600px) {
.services .content .servicesBox img{
    width: 180px;
    height: 80px;
    object-fit: cover;

}
.services .content .servicesBox{
    width: 220px;
    height: 180px;
}
.servicesBox h2 {
    font-size: 18px !important;
}
  }
</style>

<script>
import { TimelineLite } from 'gsap'
export default { 
  mounted() { 
    const timeline = new TimelineLite() 
    
    timeline
        .from('.servicesBox', {duration: 1, opacity: 0, delay: 2, stagger: .5})
  }
} 
</script>