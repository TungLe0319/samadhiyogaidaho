<template>
  <swiper

  :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
  :grabCursor="true"
    :pagination="true" :modules="modules" class="mySwiper fluid bg-transparent"
    v-motion-pop-visible-once

  >
    <swiper-slide v-for="t in testimonials" class="fluid">
      <div class="testimonial-card card bg-transparent border-0 position-relative  ">
        <div class="">
          <div
            class="justify-content-center d-flex flex-column align-items-center mt-5"
          >
            <img
              src="../../assets/img/logo.png"
              alt=""
              class="elevation-6 img-fluid forcedImg d-none d-md-block rounded-pill"
            />

          </div>


          <div
            class="  text-center px-5 pb-3 d-flex flex-column align-items-center justify-content-center "
          >
                <h1 class="mb-0 fs-4 fw-bold mt-3 font-1"> {{t.name  }} </h1>
                   <div class="d-flex justify-content-center mt-2">
            <i
              class="mdi mdi-star stars text-warning text-shadow"
              v-for="i in t.rating"
            ></i>

          </div>
            <p class="text-center testimonial-text ">
              <i class="mdi mdi-format-quote-open text-dark fs-3"></i>
              {{ t.text }}
              <i class="mdi mdi-format-quote-close text-dark fs-3"></i>
            </p>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { computed } from "@vue/reactivity";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  EffectCoverflow,
  EffectCreative,
  Pagination,
  Navigation,
  Autoplay
} from "swiper";
import { AppState } from "../../AppState.js";
import { testimonialsService } from "../../services/TestimonialsService.js";
import { onMounted } from "vue";
import Pop from "../../utils/Pop.js";

export default {

  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    onMounted(()=>{

    })

    return {
      testimonials:computed(() => AppState.testimonials),
      modules: [EffectCoverflow, Pagination, EffectCreative, Navigation,Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
.testimonial-text{
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px){
  font-size: 16px;
  }
}
.fluid{
  max-width: 100%;
  height: fit-content;
}
.mdi-star{
  font-size: 4rem;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px){
  font-size: 1.5rem;
  }
}
.forcedImg {
  height: 200px;
  width: 130px;

  object-fit: cover;
}
</style>
