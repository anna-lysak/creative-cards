<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-group">
        <h4>Edit text:</h4>
        <textarea class="form-control" cols="50" rows="4"
                  placeholder="Add text here" v-model="textBoxInput"
                  @keyup="textChanged"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "TextInput.vue",
      data: function() {
        return {
          textBoxInput: ''
        }
      },
      methods: {
        textChanged: function() {
          this.$emit('displayTextChanged', this.textBoxInput)
        }
      }
    }
</script>

<style scoped>

</style>
