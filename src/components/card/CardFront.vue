<template>
    <div class="row">
      <div class="col-sm-6 card edit-area">
        <cc-text-input @displayTextChanged="textBoxValue1 = $event"></cc-text-input>
        <cc-image-upload @displayImageChanged="imageName = $event"></cc-image-upload><hr/>
        <cc-text-input @displayTextChanged="textBoxValue2 = $event"></cc-text-input>
        <cc-text-input @displayTextChanged="textBoxValue3 = $event"></cc-text-input>
        <cc-section-completed></cc-section-completed>
      </div>
      <div class="col-sm-6 card card-display">
        <cc-text-output :display-text="textBoxValue1"></cc-text-output>
        <cc-image-output :displayImage="imageName" :containerHeight="350" :clearImageProp="clearImage"></cc-image-output>
        <cc-text-output :display-text="textBoxValue2"></cc-text-output>
        <cc-text-output :display-text="textBoxValue3"></cc-text-output>
      </div>
    </div>
</template>

<script>
  import TextInput from './elements/TextInput';
  import TextOutput from './elements/TextOutput';
  import ImageUpload from './elements/ImageUpload';
  import ImageOutput from './elements/ImageOutput';
  import SectionCompleted from "./elements/SectionCompleted";
  import {clearImageMixin} from "../../mixins/clearImageMixin.js";

  export default {
    name: "CardFront.vue",
    data: function () {
      return {
        textBoxValue1: '',
        textBoxValue2: '',
        textBoxValue3: '',
        imageName: '',
      }
    },
    mixins: [clearImageMixin],
    components: {
      ccTextInput: TextInput,
      ccTextOutput: TextOutput,
      ccImageUpload: ImageUpload,
      ccImageOutput: ImageOutput,
      ccSectionCompleted: SectionCompleted,
    }
  }
</script>

<style>
  .edit-area {
    background: #d2f9f9;
    padding: 20px;
    height: 800px;
  }
  .card-display {
    height: 800px;
    padding: 20px;
  }
</style>
