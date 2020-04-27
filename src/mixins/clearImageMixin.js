export const clearImageMixin = {
  methods: {
    clearImage: function() {
      if (this.imageName != '') {
        // set default image
        this.imageName = 'IMG_0676.JPG'
      }
    }
  }
}
