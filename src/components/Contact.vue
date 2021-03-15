<template>
    <section class="contact" id="contact">
        <div class="heading">
            <h2>Contact </h2>
        </div>
        <div class="content">
            <div class="contactInfo">
                <div class="contactInfoBox">
                    <div class="box">
                        <div class="icon">
                            <i class="fa fa-phone"></i>
                        </div>
                        <div class="text">
                            <h3>Call or Text</h3>
                            <p>989-429-4753</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="icon">
                            <i class="fa fa-envelope-o"></i>

                        </div>
                        <div class="text">
                            <h3>Email</h3>
                            <a href="Joe@DevilDogInkandPaint.com">Joe@DevilDogInkandPaint.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="formBox">
                <form action="">
                    <h3>Message Me</h3>
                    <input type="text" name="" placeholder="Full Name">
                    <input type="email" name="" placeholder="Email">
                    <textarea placeholder="Your Message"></textarea>
                    <input class="btn" type="submit" value="Send">
                </form>
            </div> -->
        </div>
    </section>
</template>

<style scoped>
.content{
    display: flex;
    justify-content: space-between;
    padding-left: 200px;
}
.contact{
    background: var(--blue-color);
}
.formBox{
    min-width: 60%;
}
.formBox form{
    display: flex;
    flex-direction: column;
}
.formBox form h3,
.contactInfo h3{
    color: white;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
}
.formBox form input,
.formBox form textarea{
    margin-bottom: 20px;
    padding: 15px;
    font-size: 26px;
    background: transparent;
    border: none;
    outline: none;
    background: rgb(214,214,214);
    color: white;
    resize: none;
}
.formBox form textarea{
    min-height: 200px;
}
.formBox form input::placeholder,
.formBox form textarea::placeholder{
    color: #999;
}
.formBox form input[type="submit"]{
    max-width: 100px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)), url(../assets/images/American-flag-2a.png);
}
.contactInfo{
    min-width: 40%;
}
.contactInfoBox{
    position: relative;
}
.contactInfoBox .box{
    position: relative;
    padding: 20px 0;
    display: flex;
}
.contactInfoBox .box .icon{
    min-width: 40px;
    padding-top: 4px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
}
.contactInfoBox .box .text{
    display: flex;
    margin-left: 20px;
    font-size: 16px;
    color: white;
    flex-direction: column;
    font-weight: 300;
}
.contactInfoBox .box .text h3{
    font-weight: 500;
    color: #091e2f;
    margin-bottom: 0;
    text-align: left;
    color: white;
}
p {
    text-align: left !important;
    font-size: 32px;
    text-shadow: 2px 2px 2px #000;
}
.text a {
    color: white;
    font-size: 32px;
    text-shadow: 2px 2px 2px #000;
}

@media (max-width: 991px){
    .text a {
    font-size: 18px;
    overflow-wrap: break-word;
    word-break: break-all;
}
.content{
    padding: 40px;
}
}

</style>