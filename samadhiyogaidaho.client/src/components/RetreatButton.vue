<template>
  <div>
    <a
    target="_blank"
      class="wtrvl-checkout_button btn font-2 fs-3 bg-dark fw-bold"
      @click="test"
      id="wetravel_button_widget"
      data-env="https://www.wetravel.com"
      data-version="v0.3"
      data-uid="564570"
      data-uuid="61962464"
      href="https://www.wetravel.com/checkout_embed?uuid=61962464"
      style="
        color: #ffffff;

        text-transform: capitalize;

        cursor: pointer;
      "
    >
      Book Now
    </a>
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      (function (d, s, id) {
        var js;
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.type='module'
        js.src = "https://cdn.wetravel.com/widgets/embed_checkout.js";
        d.getElementsByTagName("head")[0].appendChild(js);
      })(document, "script", "WetTravelScript");
    });
  },
};
</script>

<style lang="scss" scoped></style>
