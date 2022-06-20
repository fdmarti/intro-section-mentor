<template>
    <div class="hamburguer">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>

</template>
<style  scoped>

    .hamburguer{
        display: none;
        margin-top: -10px;
    }

    .bar{
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: black;
        position: relative;
        z-index: 999;
    }

    @media (max-width:768px) {
        .hamburguer{
            display: block;
        }


    }

</style>