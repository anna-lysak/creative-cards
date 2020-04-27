<template>
  <div class="row">
    <div class="col-sm-6 card edit-area">
      <cc-text-input @displayTextChanged="textBoxValue1 = $event"></cc-text-input>
      <cc-text-input @displayTextChanged="textBoxValue2 = $event"></cc-text-input>
      <cc-text-input @displayTextChanged="textBoxValue3 = $event"></cc-text-input>
      <cc-section-completed></cc-section-completed>
    </div>
    <div class="col-sm-6 card card-display">
      <cc-text-output :display-text="textBoxValue1" :containerHeight="245"></cc-text-output>
      <cc-text-output :display-text="textBoxValue2" :containerHeight="245"></cc-text-output>
      <cc-text-output :display-text="textBoxValue3" :containerHeight="245"></cc-text-output>
    </div>
  </div>

</template>

<script>
  import TextInput from "./elements/TextInput.vue";
  import TextOutput from "./elements/TextOutput.vue";
  import SectionCompleted from "./elements/SectionCompleted";
  export default {
    name: "cardInsideLeft.vue",
    data: function() {
      return {
        textBoxValue1: '',
        textBoxValue2: '',
        textBoxValue3: '',
      }
    },
    components: {
      ccTextInput: TextInput,
      ccTextOutput: TextOutput,
      ccSectionCompleted: SectionCompleted,
    }
  }
</script>

<style scoped>

</style>
