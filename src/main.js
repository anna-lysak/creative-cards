import Vue from 'vue'
import App from './App.vue'

// alternative way to implement component
Vue.component('another-text-input', {
  template: '<textarea :placeholder="textValue" @click="changeText"></textarea>',
  data: function () {
    return {
      textValue: 'Type here'
    }
  },
  methods: {
    changeText: function() {
      this.textValue = 'Text changed'
    }
  }
})

export const EventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
