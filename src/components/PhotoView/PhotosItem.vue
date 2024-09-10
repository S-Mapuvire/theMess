<style lang="scss" scoped>
.photo-holder{
  outline: 1px solid green;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  
}
.image { 
  min-width: 150px; 
  padding: 5px 0px;
  // filter: blur(10px);
}
.holes{
}
.preview-link-container{
  display: flex;
}
.preview-link{
  width: 49%;
  height: 660px;
  background-color: rgba(0, 0, 0, 0.055);
  position: absolute;
  top: 285px;
}

.preview-box{
  width: 95%;
  height: 97%;
  margin: 1%;
  position: absolute;
  top: 0%;
  outline: 5px solid #00800059;
  // outline-offset: -50px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  padding: 5px;
  // margin-top: 4px;
  display: grid;
  grid-template-columns: 1fr;
  .close-button{
    box-shadow: 10px 10px #00800059, -10px -10px #00800059;
    width: 40px;
    font-weight: 700;
    padding: 10px;
    // z-index: 2;

    &:hover {
      background-color: black;
      color: white;
    }
  }
  .preview-header {
    text-align: right;
    background-color: rgba(255, 255, 255, 0.082);
    // z-index: 2;
  }
  .image{
    box-shadow: 10px 10px #00800059, -10px -10px #00800059;
    max-width: 40%;
    height: 100%;
    justify-self: center;
  }
  .preview-commentary{
    text-align: right;
    margin-top: 25px;
    background-color: rgba(255, 255, 255, 0.082);
  }
}
</style>

<template>
  <div class="page-container">
    <div class="photo-container">
      <h3 class="photo-header">{{ photoHeader }}</h3>
      <div class="photo-holder">
          <PhotoSprocketHoles class="holes"/>
          <img class="image" :src=imagePath :alt=altText>
          <PhotoSprocketHoles class="holes"/>
      </div>
      <p class="photo-commentary">{{ photoCommentary }}</p>
      <div class="preview-link-container">
        <div class="preview-link"></div>
      </div>
    </div>

    <div class="preview-box" style="display: none;">
      <button class="close-button">X</button>
      <h2 class="preview-header">{{ photoHeader }}</h2>
      <img class="image" :src=imagePath :alt=altText>
      <h3 class="preview-commentary">{{ previewCommentary }}</h3>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import PhotoSprocketHoles from '@/components/PhotoView/PhotoSprocketHoles.vue'

onMounted(()=>{
  const previewLink = document.querySelector('.preview-link');
  const previewBox = document.querySelector('.preview-box');

  const blurElements = [
    document.querySelector('.photo-container'),
    document.querySelector('.theme-button'),
    document.querySelector('header'),
    document.querySelector('footer'),
    document.querySelector('#photo-links')
  ]
  previewLink.addEventListener('click',()=>{
    previewBox.style.display = 'grid';

    blurElements.forEach(element => {
      element.style.filter = 'blur(10px)';
    });
  }) 

  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', ()=>{
    previewBox.style.display = 'none'

    blurElements.forEach(element => {
      element.style.filter = 'blur(0px)';
    });
  })

})

const props = defineProps({
  photoHeader: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  photoCommentary: {
    type: String,
    required: true,
  },
  previewCommentary: {
    type: String,
    required: true,
  },
})

</script>




