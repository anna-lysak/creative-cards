<template>
  <div class="row">
    <div class="col-sm-6 card edit-area">
      <cc-image-upload @displayImageChanged="imageName = $event"></cc-image-upload><hr/>
      <cc-section-completed></cc-section-completed>
    </div>
    <div class="col-sm-6 card card-display">
      <cc-image-output :displayImage="imageName" :containerHeight="400" :clearImageProp="clearImage"></cc-image-output>
    </div>

  </div>
</template>

<script>
  import ImageUpload from './elements/ImageUpload.vue';
  import ImageOutput from './elements/ImageOutput.vue';
  import SectionCompleted from "./elements/SectionCompleted.vue";
  import {clearImageMixin} from "../../mixins/clearImageMixin.js";

  export default {
    name: "CardFront.vue",
    data: function () {
      return {
        imageName: '',
      }
    },
    mixins: [clearImageMixin],
    components: {
      ccImageUpload: ImageUpload,
      ccImageOutput: ImageOutput,
      ccSectionCompleted: SectionCompleted,
    }
  }
</script>

<style>
</style>
