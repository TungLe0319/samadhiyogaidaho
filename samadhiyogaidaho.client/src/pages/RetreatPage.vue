<template>
  <div v-if="retreat">
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 p-0">
            <div class="tsparticles">
              <ParticleComponent />
            </div>
            <div
              class="hero-image text-center d-flex flex-column justify-content-center align-content-center"
            >
              <h1
                v-motion-slide-top
                :delay="200"
                class="font-1 text-shadow text-light page-title"
              >
                RETREATS
              </h1>
              <p
                v-motion-slide-top
                :delay="400"
                class="display-6 font-2 text-shadow text-center"
              >
                Escape the hustle and bustle of everyday life and enrich it with
                a new experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row my-5">
          <div class="col-md-12 text-center">
            <h1
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="font-1 text-dark display-4"
            >
              {{ retreat.title }}
            </h1>
          </div>
        </div>

        <div class="row gy-3">
          <div class="col-md-6 text-center">
            <div
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="card elevation-6 border-0 h-100 rounded-4"
            >
              <div class="image-box h-100 rounded-4">
                <img
                  v-if="retreat"
                  :src="featuredImg1"
                  alt=""
                  class="elevation-6 feature-image-1 h-100 rounded-4"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row gy-3">
              <div class="col-md-12 mb-md-3">
                <div
                  v-motion-slide-visible-once-bottom
                  :delay="300"
                  class="card elevation-6 border-0 rounded-4"
                >
                  <div class="image-box rounded-4">
                    <img
                      v-if="retreat"
                      :src="retreat.coverImg"
                      alt=""
                      class="elevation-6 feature-image rounded-4"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  v-motion-slide-visible-once-bottom
                  :delay="300"
                  class="card elevation-6 border-0 rounded-4"
                >
                  <div class="image-box rounded-4">
                    <img
                      v-if="retreat"
                      :src="featuredImg2"
                      alt=""
                      class="elevation-6 feature-image rounded-4"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  v-motion-slide-visible-once-bottom
                  :delay="300"
                  class="card elevation-6 border-0 rounded-4"
                >
                  <div class="image-box rounded-4">
                    <img
                      :src="featuredImg3"
                      alt=""
                      class="elevation-6 feature-image rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- SECTION Collapse Featured Images -->
        <div class="mt-3 sticky-top d-flex justify-content-end">
          <button
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="btn btn-dark font-2 fs-3 sticky-top"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#retreatImages"
            aria-expanded="false"
            aria-controls="retreatImages"
          >
            More Images <i class="mdi mdi-arrow-collapse-down"></i>
          </button>
        </div>
        <div class="collapse" id="retreatImages">
          <div class="container my-4">
            <div class="masonry">
              <div
                @click="setActiveImage(f)"
                data-bs-toggle="modal"
                data-bs-target="#activeImage"
                class="card border-0 elevation-6 bg-transparent my-3 rounded-4"
                v-for="f in retreat.featuredImgs"
              >
                <img
                  :src="f"
                  alt=""
                  class="img-fluid hover-image rounded-4 selectable"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- !Collapse Featured Images -->
      </div>
    </section>
    <section>
      <div class="container my-5">
        <div class="row gy-5">
          <div class="col-md-12">
            <div class="text-center">
              <h1
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="underline font-1 fs-1"
              >
                About this trip
              </h1>
            </div>
            <div class="text-wrap">
              <p
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="fs-5 text-start7 text-wrap"
              >
                {{ retreat?.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--SECTION Location-->
    <section>
      <div class="container my-5">
        <div class="row justify-content-center gy-3">
          <div class="col-md-6">
            <div class="text-center">
              <h1
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="fs-1 font-1 underline"
              >
                {{ retreat?.location?.address }}
              </h1>
            </div>
            <div class="">
              <p
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="fs-5 text-start"
              >
                {{ retreat?.location?.description }}
              </p>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-center">
            <div
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="card h-100 border-0 elevation-6"
            >
              <div class="image-box h-100">
                <img
                  :src="retreat?.location?.img"
                  alt=""
                  class="img-fluid rounded-4 elevation-5 location-img h-100"
                />
              </div>
            </div>
          </div>
          <div class="row gy-3">
            <div
              class="col-md-6 d-flex align-items-center justify-content-center"
            >
              <img
                v-motion-slide-visible-once-bottom
                :delay="300"
                :src="retreat?.schedule?.img"
                alt=""
                class="img-fluid elevation-5 rounded-4 schedule-img"
              />
            </div>
            <div class="col-md-6">
              <div class="text-center">
                <p
                  v-motion-slide-visible-once-bottom
                  :delay="300"
                  class="fs-1 font-1 underline"
                >
                  Daily Schedule
                </p>
              </div>
              <div>
                <p
                  v-motion-slide-visible-once-bottom
                  :delay="300"
                  class="fs-5 text-start"
                >
                  {{ retreat?.schedule?.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--SECTION  Accommodations-->
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center">
            <h1
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="fs-1 font-1 underline"
            >
              Accommodations
            </h1>
            <p
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="fs-5 text-center"
            >
              {{ retreat?.accommodations?.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!--!Accommodations-->

    <!--SECTION FAQ/Highlights-->
    <section>
      <div class="container my-5">
        <div class="row gy-3">
          <div class="col-md-6">
            <div class="text-center">
              <p
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="font-1 fs-3"
              >
                HighLights
              </p>
            </div>
            <ul class="">
              <li
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="font-2 fs-5"
                v-for="h in retreat?.highlights"
              >
                {{ h }}
              </li>
            </ul>
          </div>
          <div class="col-md-6 text-center">
            <h1
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="fs-1 font-1 underline"
            >
              FAQS
            </h1>
            <div
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="accordion border-0"
              id="accordionExample"
            >
              <div
                class="accordion-item border-0"
                v-for="(f, index) in retreat?.FAQS"
              >
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button text-dark font-2 fs-3 bg-transparent border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse${index.toString()}`"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <i class="mdi mdi-help-circle me-3"></i> {{ f.question }}
                  </button>
                </h2>
                <div
                  :id="`collapse${index.toString()}`"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p class="fs-3">{{ f.answer }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- !FAQ/Highlights -->

    <section>
      <div class="container my-md-5 my-3">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="card elevation-7 border-0 rounded-4 p-3"
            >
          

              <div>
                <p
                  v-motion-slide-visible-once-bottom
                  :delay="300"
                  class="fs-5 text-start"
                >
                  {{ retreat?.cost?.text }}
                </p>
              </div>
              <div class="">
                <p
                  v-motion-slide-visible-once-bottom
                  :delay="300"
                  class="fs-5 text-start"
                >
                  Payment Options :
                </p>
              </div>
              <div
                class="d-flex text-dark p-2 bg-primary rounded my-2"
                v-for="p in retreat?.cost?.paymentOptions"
              >
                <p
                  v-motion-slide-visible-once-bottom
                  :delay="300"
                  class="mb-0 font-2 fs-5"
                >
                  {{ p }}
                </p>
              </div>

              <div
                v-motion-slide-visible-once-bottom
                :delay="300"
                class="text-center"
              >
                <router-link :to="{ name: 'Contact' }">
                  <button class="btn btn-dark font-2 lighten-10 fs-3 fw-bold">
                    CONTACT HOST
                  </button>
                </router-link>
                <p class="mt-3">OR</p>
                <RetreatButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--SECTION Archived Retreats-->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12" v-for="a in archived" :key="a.id">
            <ArchivedRetreat :retreat="a" />
          </div>
        </div>
      </div>
    </section>
    <!--!Archived Retreats-->
  </div>
  <LoadingComponent v-else />
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect, onBeforeMount } from "vue";
import { AppState } from "../AppState.js";
import AccommodationSwiper from "../components/RetreatPage/AccommodationSwiper.vue";
import FoodImageSwiper from "../components/RetreatPage/FoodImageSwiper.vue";
import RetreatForm from "../components/AdminComponents/RetreatForm.vue";
import ParticleComponent from "../components/MiscComponents/ParticleComponent.vue";
import ArchivedRetreat from "../components/RetreatPage/ArchivedRetreat.vue";
import RetreatButton from "../components/RetreatButton.vue";

export default {
  setup() {
    const editable = ref({});

    // onMounted(() => {
    //   // getAllRetreats();
    //   getRetreats();
    // });
    // async function getRetreats() {
    //   try {
    //     const hi = "retreatPage"
    //     await retreatsService.getAllRetreats(hi);
    //   } catch (error) {
    //     Pop.error(error, "[getRetreats]");
    //   }
    // }
    return {
      editable,

      featuredImg1: computed(
        () =>
          "https://process.filestackapi.com/resize=fit:clip,width:1440,height:1000/quality=v:79/compress/cache=expiry:604800/ulZS0Im4SWlJe6tuvHXc"
      ),
      featuredImg2: computed(() =>
        AppState.currentRetreat?.featuredImgs?.slice(1)
      ),
      featuredImg3: computed(() =>
        AppState.currentRetreat?.featuredImgs?.slice(2)
      ),
      retreat: computed(() => AppState.currentRetreat),
      archived: computed(() => AppState.archivedRetreats),
      setActiveImage(image) {
        AppState.activeImage = image;
      },
    };
  },
  components: {
    RetreatForm,
    FoodImageSwiper,
    AccommodationSwiper,
    ParticleComponent,
    ArchivedRetreat,
    RetreatButton,
  },
};
</script>

<style lang="scss" scoped>
.page-title {
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    font-size: 5rem;
  }
}

.location-img {
  object-fit: cover;
}
.schedule-img {
  width: 75%;
  height: 100%;

  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    width: 75%;
    height: 75%;
  }

  //when screen is 768px OR LESS
  @media only screen and (max-height: 768px) {
    width: 60%;
    height: 90%;
  }
  //when screen is 768px OR LESS
}
.feature-image {
  object-fit: cover;
  object-position: center;
  height: 300px;
}
.feature-image-1 {
  object-fit: cover;
  object-position: center;
}

.hero-image {
  height: 100vh;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1589790272257-8c0f79c221da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80);
  background-position: center;
  background-attachment: fixed;
  @media only screen and (max-width: 768px) {
    background-attachment: scroll;
  }
}

.masonry {
  columns: 4;

  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    columns: 1;
    img {
      width: 100vw;
      object-fit: cover;
    }
  }
}
.masonry .item.tall {
  height: calc(20vh + 20%);
}

.masonry2 {
  columns: 4;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    columns: 1;
  }
}
.scrollable-y {
  height: 650px;
}

/* List */
ul {
  counter-reset: index;
  padding: 0;
}

/* List element */
li {
  counter-increment: index;
  display: flex;
  align-items: center;
  padding: 12px 0;
  box-sizing: border-box;
}

/* Element counter */
li::before {
  content: counters(index, ".", decimal-leading-zero);
  font-size: 1.5rem;
  text-align: right;
  font-weight: bold;
  min-width: 50px;
  padding-right: 12px;
  font-variant-numeric: tabular-nums;
  align-self: flex-start;
  background-image: linear-gradient(to bottom, aquamarine, orangered);
  background-attachment: fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Element separation */
li + li {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
