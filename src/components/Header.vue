<template>
  <!-- Top navigation -->
  <div class="topnav">

    <!-- Centered link -->
    <div class="topnav-centered">
      <a href="#home">
        <img ref="logo" class="logo" src="../assets/images/logo-white.png" alt="logo">
      </a>
    </div>
<Sidebar>
     <ul class="sidebar-panel-nav">
        <li><a class="navlink" href="#home">Home</a></li>
        <li><a class="navlink" href="#about">About</a></li>
        <li><a class="navlink" href="#contact">Contact</a></li>
        <router-link to="/shop" class="navlink">Shop</router-link>
        <button class="snipcart-checkout topnav-right mobile-cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
          <span class="snipcart-items-count"></span>
        </button>
        <li><a class="subnav">
          <button href="#services" class="subnavbtn navlink">Portfolio<i class="fa fa-caret-down"></i></button>
          <div class="subnav-content">
            <router-link to="/airbrush">Airbrush</router-link>
            <router-link to="/tattoos">Tattoos</router-link>
            <router-link to="/murals">Murals</router-link>
            <router-link to="/canvas">Canvas</router-link>
          </div>
        </a>
        </li>
     </ul>
</Sidebar>

    <div class="menu">

      <!-- Left-aligned links (default) -->
      <div class="nav topnav-left">
        <a class="navlink" href="#home">Home</a>
        <a class="navlink" href="#about">About</a>
        <a class="subnav">
          <button href="#services" class="subnavbtn navlink">Portfolio<i class="fa fa-caret-down"></i></button>
          <div class="subnav-content">
            <router-link class="sublink" to="/airbrush">Airbrush</router-link>
            <router-link class="sublink" to="/tattoos">Tattoos</router-link>
            <router-link class="sublink" to="/murals">Murals</router-link>
            <router-link class="sublink" to="/canvas">Canvas</router-link>
          </div>
        </a>
      </div>

      <!-- Right-aligned links -->
      <div class="nav topnav-right">
        <a href="/#contact" v-on:click="toggleMenu();" class="btn navlink">Contact</a>
        <router-link class="navlink topnav-right cart" to="/shop">Shop</router-link>
        <button class="snipcart-checkout topnav-right cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
          <span class="snipcart-items-count"></span>
        </button>
      </div>
    </div>
    <Burger />


    <!-- <header>
        <div class="toggle" @click="toggleMenu();"></div>
          <ul class="menu-left">
              <li><a href="index.html" @click="toggleMenu();">Home</a></li>
              <li><a href="#about" @click="toggleMenu();">About</a></li>
          </ul>
              <img ref="logo" class="logo" src="../assets/images/logo-white.png" alt="logo">
              <a  href="#home" ></a>
          <ul class="menu-right">
              <div class="subnav">
                  <button class="subnavbtn">Portfolio<i class="fa fa-caret-down"></i></button>
                  <div class="subnav-content">
                    <a href="airbrush.html">Airbrush</a>
                    <a href="#tattoo">Tattoo</a>
                  </div>
              </div>
              <li><a href="#testimonials" @click="toggleMenu();">Testimonials</a></li>
              <a href="#contact" @click="toggleMenu();" class="btn">Contact</a>
              <li><a href="#contact" @click="toggleMenu();">Contact</a></li>
          </ul>
    </header> -->
  </div>
  
</template>

<style scoped>

/* Add a black background color to the top navigation */
.topnav {
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, 0.7)), url(../assets/images/American-flag-2a.png);
  background-size: cover;
  height: 100px;
  font-size: 22px;
  border: 3px solid white;
  z-index: 999;
}

.topnav-left {
  margin-left: 80px;
}
.topnav-right {
  margin-right: 10px;
}
/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 8px 16px 4px 16px;
  text-decoration: none;
  margin-top: 18px;
  font-weight: 700px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background: var(--primary-color);
  color: black;
  border-radius: 10px;
}
.topnav-centered a:hover {
  background: none;
}

/* Add a color to the active/current link */
/* .topnav a.active {
  background: var(--primary-color);
  color: white;
  border-radius: 4px;
} */

/* Centered section inside the top navigation */
.topnav-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  top: 36px;
}

.logo {
  width: 120px;
}

/* Right-aligned section inside the top navigation */
.topnav-right {
  float: right;
}

/* The navigation menu */
  /* Navigation links */
  
/* The subnavigation menu */
.subnav {
  float: left;
  position: relative;
  display: block;
  text-align: center !important;

}

/* Subnav button */
.subnav .subnavbtn {
  border: none;
  outline: none;
  color: white;
  margin: 0 20px;
  background-color: inherit;
  font-family: inherit;
  display: block;
}

/* Add a red background color to navigation links on hover */
.header a:hover, .subnav:hover .subnavbtn {
  background: var(--primary-color);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 5px;
  display: block;
}

/* Style the subnav content - positioned absolute */
.subnav-content {
  display: none;
  position: absolute;
  background: var(--primary-color);
  border-radius: 5px;
  }

/* Style the subnav links */
.subnav-content a {
  float: left;
  color: white;
  text-decoration: none;
  margin: 4px;
}

/* Add a grey background color on hover */
.subnav-content a:hover {
  background-color: #eee;
  color: black;
}

/* When you move the mouse over the subnav container, open the subnav content */
.subnav:hover .subnav-content {
  display: block;
  z-index: 999;
}
.subnavbtn {
  font-size: 22px;
}
.subnav:hover a {
  font-size: 18px;
  z-index: 999;
}
 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }
.navlink {
  font-weight: 700;
}
.cart {
  margin-top: 30px;
  margin-left: 10px;
  padding: 0 10px;

}
.mobile-cart {
  padding: 0 20px;
  margin-top: 30px;
  margin-left: 60px;
}
/* Responsive navigation menu - display links on top of each other instead of next to each other (for mobile devices) */

@media (max-width: 991px){
.topnav-centered {
  float: none;
  position: absolute;
  margin-top: -16px;
  display: block;
}
.topnav-centered a {
  position: relative;
  top: 0;
  left: 0;
  transform: none;
}
.topnav a {
  font-size: 1.5rem;
}

.subnav:hover a {
  font-size: 20px;
  width: 160px;
}
.subnavbtn {
  font-size: 1.5rem
}
.menu{
  position: fixed;
  top: 75px;
  left: -100%;
  display: block;
  padding: 100;
  text-align: center;
  width: 100%;
  height: 100vh;
  background: white;
  transition: 0.5s;
  z-index: 999;
  border-top: 1px solid rgba(0,0,0,0.2);
}
.menu.active{
  left: 0;
}
header ul li a{
  color: #111;
  font-size: 24px;
  margin: 10px;
}
.toggle{
  width: 40px;
  height: 40px;
  background: url(../assets/images/menu.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50px;
  cursor: pointer;
  filter: invert(1);
  margin-left: 90%;
  margin-top: 60px;
}
.toggle.active{
  width: 80px;
  height: 80px;
  background: url(../assets/images/close.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 25px;
  cursor: pointer;
  filter: invert(1);
}
header .toggle{
  filter: invert(1)
}
header.sticky .toggle{
  filter: invert(0)
}
.topnav a {
  padding: 0 20px;
}
}
/* Responsive navigation menu - display links on top of each other instead of next to each other (for mobile devices) */
@media screen and (max-width: 600px) {
.topnav a, .topnav-right {
  float: none;
  display: block;
}
.topnav-centered a {
  position: relative;
  top: 0;
  left: 0;
  transform: none;
}

}

/* header {
    border-bottom: 2px solid var(--primary-color);
    display: flex;
    align-items: center;
    height: 160px;
    background: var(--secondary-color);
}
.logo {
    height: 150px;
}
header ul{
    position: relative;
    display: flex;
}
.menu-left {
  flex: 2;
}
header ul li{
    position: relative;
    list-style: none;
}
header a{
    position: relative;
    display: inline-block;
    margin: 0 20px;
    color: #fff;
    text-decoration: none;
    font-size: 30px;
}
header.sticky ul li a{
color: #fff;
} */

/*  */
/*  */
/*  */


</style>

<script>
import Burger from './Burger.vue';
import Sidebar from './Sidebar.vue';
import { TimelineLite } from 'gsap'
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin);

export default { 
  name: 'app',
  components: {
      Burger,
      Sidebar
  },
  mounted() { 
    const { logo } = this.$refs
    const timeline = new TimelineLite() 
    
    timeline.from(logo, {duration: 2, y: '-100%', ease: 'bounce'})
  },
  toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
  }
} 

// import gsap from 'gsap'

// export default {
//   name: "Header",
//   methods: {
//     function(){
//       gsap.from('.logo', {duration: 2, y: '-100%', ease: 'bounce'})
//     },
//   funtion() {
//     console.log("I hope this works.")
//   }
//   }
// }
</script>

