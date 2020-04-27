<template>
  <div class="row">
    <div class="form-check form-check-inline">
      <div class="form-check-label">
        <input type="checkbox" class="form-check-input" v-model="checked" @change="sectionCompleted">Mark section completed
      </div>
    </div>

  </div>
</template>

<script>
  import {EventBus} from "../../../main.js";

  export default {
    name: "SectionCompleted.vue",
    data: function () {
      return {
        checked: false
      }
    },
    methods: {
      sectionCompleted: function () {
        EventBus.$emit("markAsCompleted", this.checked)
      }
    }
  }
</script>

<style scoped>
  .form-check-inline {
    margin-left: 15px;
  }

</style>
