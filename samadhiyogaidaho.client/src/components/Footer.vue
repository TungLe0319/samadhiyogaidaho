<template>
  <footer class="text-center text-dark footer-image bg-pink position-relative">
    <FooterWave />
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-12 text-center mb-md-3">
          <p class="fs-2">Stay Connected </p>
          <p class="fs-4"> Sign Up for Our Newsletter and Stay Up-to-Date on Classes and Events</p>
        </div>
        <div class="col-md-6 d-flex align-items-center justify-content-end ">
          <NewsLetter />
        </div>
        <div class="col-md-6 d-flex justify-content-start align-items-center">
          <img
            src="https://img.freepik.com/free-vector/staying-touch-modern-communication-means-phone-calls-letters-emails-person-contacting-friends-customers-via-email-encouraging-feedback-vector-isolated-concept-metaphor-illustration_335657-2779.jpg?w=740&t=st=1671237218~exp=1671237818~hmac=f0cc7d983a1fc1055faa6830d3cb9820f93a12e81969470acf01ae2f51555029"
            alt=""
            class="img-fluid newsletter-img rounded-circle elevation-6"
          />
        </div>
      </div>

      <!-- <section class="mt-5">

        <div class="row text-center d-flex justify-content-center pt-5">

          <div class="col-md-2">
            <router-link :to="{ name: 'About' }" title="about">
              <h6 class="text-uppercase font-weight-bold  text-dark">
                About
              </h6>
              </router-link>
          </div>

          <div class="col-md-2">
            <router-link :to="{ name: 'Services' }" title="services">
              <h6 class="text-uppercase font-weight-bold  text-dark">
                Services
              </h6>
            </router-link>
          </div>

          <div class="col-md-2">

              <h6 class="text-uppercase font-weight-bold  text-dark">
                <a href=" https://ghost.apps.ledano.tk/ " target="_blank"
                  class="text-dark" title="blog">
                  Blog
                </a>
              </h6>

          </div>

          <div class="col-md-2">
            <router-link :to="{ name: 'FAQ' }" title="FAQ">
              <h6 class="text-uppercase font-weight-bold  text-dark">
                FAQ
              </h6>
            </router-link>
          </div>

          <div class="col-md-2">
            <router-link :to="{ name: 'Contact' }" title="contact">
              <h6 class="text-uppercase font-weight-bold  text-dark">
                Connect
              </h6>
            </router-link>
          </div>

        </div>

      </section> -->
      <!-- Section: Links -->

      <div class="divider div-transparent div-dot my-5"></div>
      <!-- Section: Text -->
      <section class="mb-md-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
              "Yoga is not about touching your toes, it’s about what you learn
              on the way down." — Jigar Gor
            </p>
          </div>
        </div>
      </section>
      <!-- Section: Text -->
      <section class="text-center my-md-3">
        <a
          href="mailto:samadhiyogaidaho@gmail.com"
          class="text-dark font-2 email-phone"
          >samadhiyogaidaho@gmail.com</a
        >
        <br />
        <a href="tel:208-670-4139" class="text-dark font-2 email-phone"
          >208-996-0363</a
        >
      </section>
      <!-- Section: Social -->
      <section class="text-center mb-md-5">
        <a
          href="https://www.facebook.com/people/Samadhi-Yoga-Idaho/100083164429288/?fref=nf&paipv=0&eav=AfZsU1GyYC-3TCWawqpkhNjTENoxFcR48yXyJKsoQDuqyKNUkhTIyy2dAGa7wTrD6QQ&_rdr"
          class="text-dark me-4"
          target="_blank"
        >
          <i class="mdi mdi-facebook media-icon"></i>
        </a>
        <a
          href="https://www.instagram.com/samadhiyogaidaho/"
          class="text-dark me-4"
          target="_blank"
        >
          <i class="mdi mdi-instagram media-icon"></i>
        </a>
        <a
          href="https://www.youtube.com/@Samadhiyogaidaho"
          class="text-dark me-4"
          target="_blank"
        >
          <i class="mdi mdi-youtube media-icon"></i>
        </a>
      </section>
      <!-- Section: Social -->
    </div>
    <!-- Grid container -->

    <p>
      Vector Images by
      <a
        target="_blank"
        href="https://www.freepik.com/free-vector/organic-flat-people-meditating-illustration_13297280.htm#query=yoga&position=3&from_view=search&track=sph"
        >Freepik</a
      >
    </p>
    <!-- Copyright -->
    <div class="text-center p-3 bg-lightPink darken-10">
      © 2022 Copyright:

        Samadhi Yoga Idaho, created by <b> Dev Opportunities</b>
    </div>
    <div class="">
      <!-- <a href="https://www.freepik.com">designed by Freepik - Freepik.com</a> -->
    </div>
    <!-- Copyright -->
    <div class="py-4 py-md-0 bg-peach"></div>
  </footer>
</template>

<script>

import NewsLetter from "./NewsLetter.vue";
import FooterWave from "./MiscComponents/FooterWave.vue";

export default {

  setup() {

    return {

    };
  },
  components: { NewsLetter, FooterWave },
};
</script>

<style lang="scss" scoped>
.email-phone {
  font-size: 2rem;
  transition: all 0.25s ease;
}
.email-phone:hover {
  color: #f68b59 !important;
  transition: all 0.25s ease;
}
.media-icon {
  transition: all 0.25s ease;
  font-size: 2rem;
}
.media-icon:hover {
  color: #f68b59 !important;
  transition: all 0.25s ease;
}
.newsletter-img {
  width: 200px;
  height: 200px;
}
.wrapper {
  padding-bottom: 90px;
}

.divider {
  position: relative;
  margin-top: 90px;
  height: 1px;
}

.div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
}

.div-dot:after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -18px;
  left: calc(50% - 9px);
  width: 36px;
  height: 36px;
  background-color: rgb(255, 225, 205);
  border: 1px solid rgb(48, 49, 51);
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px white, 0 0 0 4px white;
}
footer {
  margin-top: 50px;
}
</style>
