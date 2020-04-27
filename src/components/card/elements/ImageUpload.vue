<template>
  <div class="row">
    <div class="col-sm-12">
      <h4>Upload Image:</h4>
      <div class="form-group">
        <input type="file" class="form-control-file" id="fileUpload" @change="uploadFile"/>
      </div>
      <progress value="0" max="100" id="progressBar"></progress>
      <br/>
      <img id="image">
      <button type="button" id="setImageButton" style="display:none" @click="setImage">Set Image</button>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase';
  export default {
     name: "ImageUpload.vue",
    data: function() {
       return {
         file: ''
       }
    },
    methods: {
       uploadFile: function(event) {
         document.getElementById("setImageButton").style.display = 'none'
         //console.log(event)
         this.file = event.target.files[0]
         //console.log(Firebase.storage())
         var storageRef = Firebase.storage().ref('user_uploads/' + this.file.name)
         var upload = storageRef.put(this.file)
         // create thumbnail
         var reader = new FileReader()
         reader.readAsDataURL(this.file)
         reader.onload = function(e) {
           document.getElementById('image').src = e.target.result
         }

         upload.on('state_changed', function(snapshot) {
           var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           document.getElementById('progressBar').value = progress;
           if (progress == 100) {
             document.getElementById("setImageButton").style.display = 'inline-block'
           }
         })
       },
       setImage: function () {
         console.log(this.file.name)
         this.$emit('displayImageChanged', this.file.name)
      }
    }
  }
</script>

<style scoped>
  img {
    max-width: 200px;
  }

</style>
