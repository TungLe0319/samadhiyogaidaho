<template>
<div class="modal-body bg-white rounded-4 text-center d-flex align-items-center justify-content-center border-0">
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSefWL8ovyx4220sQsy9yCh9wxktWx3GjzsVRWUXjDGekjbG5A/viewform?embedded=true" width="640" height="2053" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

</div>
</template>

<script>

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
.image{
transform: scale(1.2);
max-height: 70vh !important;
//when screen is 768px OR LESS
@media only screen and (max-width: 768px){
height: auto;
max-width: 100%;
}
}
</style>
