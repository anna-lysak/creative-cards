<template>
  <div class="row">
    <div class="col-sm-12">
      <p>Completed: <span id="counter">0</span>/4</p>
      <progress value="0" max="100" id="cardProgress"></progress>
    </div>
  </div>
</template>

<script>
  import {EventBus} from "../../../main";
  export default {
    name: "CardProgress.vue",
    created: function () {
      EventBus.$on('markAsCompleted', function(data) {
        if (data) {
          document.getElementById('counter').innerText++;
          document.getElementById('cardProgress').value += 25;
        } else {
          document.getElementById('counter').innerText--;
          document.getElementById('cardProgress').value -= 25;
        }
      })

    }
  }
</script>

<style scoped>
progress {
  width: 100%;
}
</style>
