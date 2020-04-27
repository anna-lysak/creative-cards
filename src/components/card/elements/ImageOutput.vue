<template>
  <div class="image-container" :style="styleObject" @mouseover="showOptions=true" @mouseleave="showOptions=false">
    <transition enter-active-class="custom-enter-active" leave-active-class="custom-leave-active">
      <button type="button" class="btn btn-outline-danger btn-sm" v-show="showOptions" @click="clearImageProp">Remove Image</button>
    </transition>
    <img :alt="displayImage" id="outputImage" :style="styleObject" />

  </div>
</template>

<script>
  import Firebase from 'firebase';
  export default {
    name: "ImageOutput.vue",
    props: {
      displayImage: {
        type: String
      },
      containerHeight: {
        type: Number,
        default: 200
      },
      clearImageProp: Function
    },
    data: function() {
      return {
        showOptions: false
      }
    },
    watch: {
      displayImage: function() {
        console.log("Image changed")
        var storageRef = Firebase.storage().ref('user_uploads/' + this.displayImage)
        storageRef.getDownloadURL().then(function(url){
          var img = document.getElementById('outputImage')
          img.src = url
          setDraggable()
        })

      }
    },
    computed: {
      styleObject: function () {
        return {
          height: this.containerHeight + 'px'
        }
      }
    }
  }

function setDraggable() {
    $('#outputImage').draggable();
}
</script>

<style scoped>
  .image-container {
    border: 1px dotted grey;
    overflow: hidden;
    margin: 5px 0;
  }
  img {
    width: 110%;
  }
  button {
    position: absolute;
    z-index: 1;
  }

</style>
