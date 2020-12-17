<template>
    <div class="swiper-container filmswiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
    mounted(){
        new Swiper ('.filmswiper', {

            loop:true,
            
            pagination:{
                el: '.swiper-pagination'
            },
            autoplay:true,
            pagination: {
                el: 'swiper-pagination',
                type: 'bullets'
            }
        })
    }
}
</script>