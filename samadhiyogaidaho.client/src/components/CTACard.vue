<template>

 <div class="col-md-4">
    <div class="card bg-pink elevation-6">
      <img src="../assets/img/Screenshot_11.png" class="card__image" alt="" />
      <div class="card__overlay rounded-bottom">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>

          <div class="card__header-text">
            <h3 class="card__title">Vinyasa</h3>

          </div>
        </div>
        <p class="card__description">Vinyasa (Flow) is a flowing of postures executed in succession, often timed with the breath to attain balance in the mind and body. Classes build heat, endurance, flexibility, strength and conscious breathing.</p>
      </div>
    </div>
 </div>

 <div class="col-md-4">
     <div class="card bg-pink elevation-6">
      <img src="../assets/img/Screenshot_10.png" class="card__image" alt="" />
      <div class="card__overlay rounded-bottom">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>

          <div class="card__header-text">
            <h3 class="card__title">Pranayama & Meditation</h3>

          </div>
        </div>
        <p class="card__description">Pranayama (Breath control) an ancient tradition, is the conscious awareness of breath using specific rhythms & techniques to bring us to the present moment increasing our self-awareness.</p>
      </div>
    </div>
 </div>
 <div class="col-md-4">
  <div  class="card bg-pink elevation-6">
      <img src="../assets/img/Screenshot_12.png" class="card__image" alt="" />
     <div class="card__overlay rounded-bottom">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>

          <div class="card__header-text">
            <h3 class="card__title">Journaling</h3>

          </div>
        </div>
        <p class="card__description">Keeping a yoga journal leads to more mindful yoga practice. You notice the sensations of each of your movements, drawing your mind into the present moment, so you can really appreciate the process of your yoga practice.</p>

      </div>
    </div>
 </div>



</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";

export default {
props:{

       },
  setup(props) {
    const editable = ref({});

    onMounted(() => {

    });
    watchEffect(() => {});

    return {
      editable,
      }
    }
  }
</script>

<style lang="scss" scoped>
:root {
  --surface-color: #fff;

}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  padding: 0;
  list-style-type: none;
}

.card {
  position: relative;
  display: block;
  height: 100%;
  border-radius: calc(var(40) * 1px);
  overflow: hidden;
  text-decoration: none;
  border: 0;

}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__overlay {
  position: absolute;
  padding-bottom: 10rem;
  bottom: 40px;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: calc(var(40) * 1px);
  background-color: #fff;
  transform: translateY(100%);
  transition: .5s ease-in-out;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px){
    bottom: -20px;
  }
}

.card:hover .card__overlay {
  transform: translateY(20%);
    transition: .5s ease-in-out;
    //when screen is 768px OR LESS

;
    @media only screen and (max-width: 768px){
      transform: translateY(-0%);
        padding-bottom: 4rem;
    }
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(var(40) * 1px) 0 0 0;
  background-color: #fff;
  transform: translateY(-100%);
  transition: .2s ease-in-out;
}

.card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1;

}

.card__arc path {
   transition: .5s ease-in-out;
  fill: #fff;
  d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}
.card .card__header{
     transition: .5s ease-in-out;
}
.card:hover .card__header {
  transform: translateY(0);
    transition: .5s ease-in-out;


}
.card:hover .card__arc path{
     transition: .5s ease-in-out;


}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.card__title {
  font-size: 1.5em;
  margin: 0 0 .3em;
  color: #342E37;
    font-family: "Courgette", cursive;
}




.card__description {
  font-size: 1.25em;
  padding: 0 2em 2em;
  margin: 0;
  color: #342E37;
   font-family: "Patrick Hand", cursive;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

}




</style>
