<template>
    <div class="intro">
        <div class="main-content">
            <section class="main-section">
                <div class="main-info">
                    <h2>Make <br> remote work</h2>
                    <p>Get your team in sync, no matter your location. <br> Streamline processes, create team rituals, and <br> watch productivity soar.</p>
                    <BlackButton />
                </div>
                <div class="footer">
                    <FakeFooter />
                </div>

            </section>
            <section class="main-image">
                <img class="img-intro-desktop" src="../assets/image-hero-desktop.png" alt="image hero desktop">
                <img class="img-intro-mobile" src="../assets/image-hero-mobile.png" alt="image hero mobile">
            </section>
        </div> 
    </div>
</template>
<script>
import BlackButton from '../components/UI/BlackButton.vue'
import FakeFooter from '../components/FakeFooter.vue'
export default{
    components: { BlackButton, FakeFooter }
}

</script>
<style scoped>

.intro{
    margin:0 auto;
    position:relative;
    max-width: 1400px;
    z-index: 1;
}

.main-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    position: relative;
}


h2{
    font-size: 80px;
    margin: 0 0 50px 0;
    font-weight: 700;
}

p{
    color: hsl(0, 0%, 41%);
    font-size: 18px;
    line-height: 25px;
}

img{
    max-height: 750px;
}

.img-intro-mobile{
    display: none;
}

.footer{
    position:absolute;
    bottom: 0;
}

@media (max-width:768px) {

    br{
        display: none;
    }
    .img-intro-mobile{
        display: block;
    }
    .img-intro-desktop{
        display: none;
    }
    .main-content{
        flex-direction: column;
    }
    .main-section{
        order:2;
    }
    .main-image{
        order: 1;
    }

    img{
        width: 100%;
    }

    .main-info{
        text-align: center;
    }
    
    h2{
        font-size: 32px;
        margin: 30px 0;
    }

    .footer{
        position: relative;
    }

}

</style>