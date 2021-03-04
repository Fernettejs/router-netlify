<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view />
  </div>
</template>
<style>

#app {
  font-family: 'Crimson Text', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-align: center;
    --primary-color:#8b0000;
    --secondary-color:#202020;
    --blue-color:#121b4b;
    --white-color:#FEFEFE;
    --gray-color:#CECECE;
}

h2 {
    font-size: 3em;
    color: white;
}

p {
    color: white;
}

.line {
    width: 100%;
    height: 6px;
    background: black;
}
.btn{
    background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)), url(./assets/images/American-flag-2a.png);
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

img {
  max-width: 50vw;
}

.column img {
  border: 3px solid white;
  border-radius: 10px;
}
</style>

<script>
// export default {
//   methods: {
//     toggleMenu(){
//     var menuToggle = document.querySelector('.toggle');
//     var menu = document.querySelector('.menu');
//     menuToggle.classList.toggle('active')
//     menu.classList.toggle('active')
//     }
//   }
// }
</script>