<template>
    <section class="about" id="about">
        <div class="content">
            <div class="w50">
                <img src="../assets/images/the-artist.png" class="img" alt="">
            </div>
            <div class="contentBox">
                <div class="heading">
                    <h2>The Artist</h2>
                </div>
                <p id="the-artist">Meet Joe, a Marine Corps Purple Heart veteran. Joe served in Fallujah, Iraq in 2006. On Dec. 28th he was shot twice by sniper fire and severely wounded. After a very long recovery, Joe started to draw and paint as therapy for his arm, hand, and mind. He uses art as a way to help himself and others. Through art like tattooing, Devildog Ink & Paint llc. provides Pain Therapy (as Joe's veteran brothers and sisters call it). Its a way to get your mind off things and to be in a comfortable place where you can enjoy the process of getting a great piece of art. Joe also does airbrush projects as a way to keep his mind busy. That is the Paint Therapy Art. For the ones that cant afford the mainstream graphics artist for custom work. Joe uses his time to create the best one of a kind custom art piece that he can produce. Devildog Ink & Paint llc. specializes in veteran and patriotic themes. Combat scenes, memorials, American Flags, and much more. Custom paint by hand or air brush on most surfaces or items such as motorcycle fenders, gas tanks, fairings, saddle bags, guitars, mailboxes, snowmobiles, helmets, hard hats, hockey masks, rifles, canvas, walls, and many other items. Check out Devildog Ink & Paint llc. Portfolio page to see some of Joe's work.
                </p>
            </div>
        </div>
        <section class="social" id="social">
            <div class="content">
                <div class="social-box" id="youtube-box">
                    <a href="https://www.youtube.com/channel/UCsp7n4jSu-uMAbMqL-QHJ9A" target="_blank">
                        <img src="../assets/images/youtube-icon.png" alt="">
                    </a>
                </div>
                <div class="social-box" id="ig-box">
                    <a href="https://www.instagram.com/devildog_inkandpaintllc/" target="_blank">
                        <img src="../assets/images/ig-icon.png" alt="">
                    </a>
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
.about{
    background: var(--secondary-color);
}
.about .img{
    border: 3px solid white;
    border-radius: 5px;
}
.heading{
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
    color: #fff;
    text-decoration: none;
    border: 3px solid white;
    border-radius: 5px;
}
.heading h2{
    font-weight: 600;
    font-size: 30px;    
}
.content{
    display: flex;
    justify-content: space-between;
}
.contentBox{
    padding: 30px;
    display: inline;
    background: var(--blue-color);
    border: 3px solid white;
    border-radius: 5px;

}
.contentBox h3{
    font-size: 24px;
    margin-bottom: 10px;
}
.w50{
    min-width: 40%;
    display: inline;
}
img{
    max-width: 100%;
}
#the-artist {
    font-size: 1.2em;
}

/*  */
/* SOCIAL MEDIA */
/*  */

.social .content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: var(--secondary-color);
    margin-top: -50px;
    border: 3px solid white;
    border-radius: 5px;
    padding: 20px;
}
.social-box{
    height: 100px;
    width: 100px;
    border-radius: 100px;
    background-color: var(--secondary-color);
    display: block;
}
.social-box:hover{
    transition: .2s ease-in-out;
    height: 120px;
    width: 120px;
    border-radius: 100px;
    background-color: var(--primary-color);
    display: block;
}

.social img {
    filter: invert(100%);
}

@media (max-width: 991px){
    
section{
    padding: 100px 50px;
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
.social-box{
    height: 70px;
    width: 70px;
}
}

@media (max-width:600px){
    header,
    header.sticky{
        padding: 20px 20px;
        z-index: 1000;
    }
    .banner{
        padding: 150px 20px 100px;
    }
    section{
        padding: 100px 20px;
    }
}
</style>