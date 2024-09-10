<!-- make it run off mongodb -->
<template>
    <p style="background-color: crimson; z-index: 10; width: 700px;">This page is a work in progress - still need to make the photo holder components create themselves dynamically, then integrate a database system then move the images to an image serving api backend</p>
    <!-- <button>tets</button>
    <div id="page"> -->
        <!-- <PhotoItem :imagePath="imagePath" :altText="altText" :photoHeader="photoHeader" :photoCommentary="photoCommentary" :previewCommentary="previewCommentary"/> -->
        <!-- <PhotoItem :imagePath=photo1 alt=""/> -->
        <!-- <PhotoItem :imagePath="`@/assets/DrawingView/31-05-23, Pixiv Drawing of the Day - Candy (Turkish Delight) - Final (less busy).png`" alt=""/> -->
        <!-- <img :imagePath="`@/assets/DrawingView/Copy of a.png`" alt="">
        <img :imagePath="`@/assets/DrawingView/Copy of Beneath the Waves - d resized.png`" alt="">
        <img :imagePath="`@/assets/DrawingView/Copy of Circles and Squares.png`" alt="">
        <img :imagePath="`@/assets/DrawingView/Copy of cirlces and squares2.png`" alt="">
        <img :imagePath="`@/assets/DrawingView/fish-2.png`" alt="">
        <img :imagePath="`@/assets/DrawingView/Result A (1) (1).png`" alt="">
        <img :imagePath="`@/assets/DrawingView/Result A (2).png`" alt="">
        <img :imagePath="`@/assets/DrawingView/result b-cropped.png`" alt="">
        <img :imagePath="`@/assets/DrawingView/result b.png`" alt="">
        <img :imagePath="`@/assets/DrawingView/result c (2)-lightened.png`" alt="">
        <img :imagePath="`@/assets/DrawingView/result d (1).png`" alt="">
        <img :imagePath="`@/assets/DrawingView/_nemotoda.png`" alt="">
    </div> -->


</template>

<script setup>
// import PhotosItem from '@/components/PhotoView/PhotoItem.vue'
import { onMounted, onBeforeMount } from 'vue'

const pth = '\\src\\assets\\DrawingView\\';

const images = [
    "Copy of a.png", 
    "Copy of Beneath the Waves - d resized.png",
    "Copy of Circles and Squares.png",
    "Copy of cirlces and squares2.png",
    "fish-2.png",
    "Result A (1) (1).png",
    "Result A (2).png",
    "result b-cropped.png",
    "result b.png",
    "result c (2)-lightened.png",
    "result d (1).png",
    "_nemotoda.png"
]
const imagepaths = [] 
onBeforeMount(()=>{
    let page = document.querySelector('#page'); 
    let imagepath = pth+images[1];
    // page.innerHTML = `<img src="${imagepath}" alt="faesf"/>`;
    page.innerHTML = `<PhotoItem :imagePath="${pth+images[0]}" :altText="altText" :photoHeader="photoHeader" :photoCommentary="photoCommentary" :previewCommentary="previewCommentary"/>`;
    // images.forEach((image)=>{
    //     // imagepaths.push(pth + image);
    //     page.innerHTML = `<PhotoItem :imagePath=${pth+image} :altText="altText" :photoHeader="photoHeader" :photoCommentary="photoCommentary" :previewCommentary="previewCommentary"/>`;
    // })

})

</script>

<style lang="scss" scoped>

#page{
    width: 50%;
    display: flex;
    flex-wrap: wrap;
}
img{
}

</style>