<template>
  <div class="container-fluid test" v-if="admin?.isAuthenticated">
    <div class="row">
      <div class="col-md-3 ms-0 p-0 order-1 order-md-0">
        <AdminSidePanel class=" " />
      </div>
      <div class="col-md-9 p-0 router-view order-0 order-md-1">
        <!-- <div>
     
        </div> -->
             <!-- <AdminNavbar /> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
<div class="" v-else>please log in...</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { RouterView } from "vue-router";
import { AppState } from "../AppState.js";
import AdminNavbar from "../components/AdminComponents/AdminNavbar.vue";
import AdminSidePanel from "../components/AdminComponents/AdminSidePanel.vue";

import EventForm from "../components/AdminComponents/EventForm.vue";
import RetreatForm from "../components/AdminComponents/RetreatForm.vue";
import { eventsService } from "../services/EventsService.js";

import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    // onMounted(() => {
    //   getEvents()
    // });
    // async function getEvents(){
    //   try {
    //       await eventsService.getEvents()
    //     } catch (error) {
    //       logger.error(error,'[getEvents]')
    //     }
    // }
    watchEffect(() => {});
    return {
      editable,
      admin: computed(() => AppState.user),
    };
  },
  components: {
    RetreatForm,
    AdminSidePanel,
    RetreatForm,
    EventForm,
    AdminSidePanel,
    AdminNavbar,
  },
};
</script>

<style lang="scss" scoped>


</style>
