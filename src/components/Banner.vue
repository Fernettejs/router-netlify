<template>
    <section class="banner center" id="home">
        <div banner-text>
            <h1>DEVILDOG INK & PAINT llc.</h1>
                <h4>Custom Art Studio</h4>
                <a ref="btn" href="#contact" class="btn">Get some shit done</a>
        </div>
    </section>
</template>

<style scoped>
.banner {
    position: relative;
    min-height: 100vh;
    background: 
    /* top, transparent red, faked with gradient */ 
    linear-gradient(
      rgba(0, 0, 0, 0.40), 
      rgba(0, 0, 0, 0.40)
    ), url(../assets/images/banner.png);
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-bottom: 3px solid white;
}

.banner:hover {
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
    -webkit-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
}

.text-box{
    align-items: center;
    text-align: center;
}

.banner h1{
    font-size: 4em;
    color: #fff;
    font-weight: 500;
    line-height: 1.2em;
    text-shadow: 2px 2px 2px #000;
    margin-top: 240px;
}

.banner h4 {
    font-size: 1.2em;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
}

.btn{
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
@media (max-width: 991px){

section{
}

.banner-text {
    position: relative;;
    top: 20px;
}
.banner h1 {
    margin-top: -80px;
    font-size: 42px;
}
.banner h2{
    font-size: 1.5em;
}
.banner h3{
    font-size: 1em;
}
.btn{
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
}
.heading h2{
    font-weight: 600;
    font-size: 24px;
}
.contentBox h3{
    font-size: 20px;
}
.content{
    flex-direction: column;
}
.w50{
    margin-bottom: 20px;
}
}

</style>

<script>
import { TimelineLite } from 'gsap'
export default {
  mounted() { 
    const { btn } = this.$refs
    const timeline = new TimelineLite() 
    
    timeline.from(btn, {duration: 2, x: '-500%', ease: 'bounce', delay: 2})
  }
} 
</script>