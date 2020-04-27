<template>
  <div @mouseover="showOptions=true" @mouseleave="showOptions=false">
    <transition name="fade">
      <form class="small" v-show="showOptions">
        <label for="selectBox">&nbsp;&nbsp;Font size:</label>
        <select class="custom-select" id="selectBox" v-model="setFontSize">
          <option value="42">42px</option>
          <option value="48">48px</option>
          <option value="56">56px</option>
          <option value="64">64px</option>
        </select>

        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" value="left" v-model="setTextAlign">Left
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" value="center" v-model="setTextAlign">Center
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" value="right" v-model="setTextAlign">Right
          </label>
        </div>

        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" v-model="setBold">Bold
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" v-model="setItalic">Italic
          </label>
        </div>
      </form>
    </transition>
    <p :style="styleObject" :class="{bold: setBold, italic: setItalic}">{{ displayText }}</p>
  </div>
</template>

<script>
  export default {
    name: "TextOutput.vue",
    props: {
      displayText: [String],
      containerHeight: {
        type: Number,
        //required: true,
        default: 120
      },
    },
    data: function () {
      return {
        showOptions: false,
        setFontSize: '',
        setTextAlign: '',
        setBold: false,
        setItalic: false,
      }
    },
    computed: {
      styleObject: function() {
        return {
          fontSize: this.setFontSize + 'px',
          height: this.containerHeight + 'px',
          textAlign: this.setTextAlign,
        }
      }
    }
  }
</script>

<style scoped>
  p {
    font-family: 'Tangerine', cursive;
    font-size: 48px;
    text-weight: 48px;
    text-shadow: 2px 2px 2px #aaaaaa;
    color: #4d4d4d;
    margin: 5px 0;
    padding-top: 30px;
    border: 1px dotted grey;
    white-space: pre-line;
    overflow: hidden;
  }
  select {
    width: 80px;
    height: 40%;
    margin-right: 10px;
  }
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  form {
    position: absolute;
    border-bottom: 1px dotted grey;
    margin-top: 10px;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }
</style>
