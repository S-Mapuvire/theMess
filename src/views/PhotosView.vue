<!-- make it run off mongodb; make dynamic component -->
<style lang="scss" scoped>
*{
    color: white;
}
main{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
#photo-view{}
#photo-links{}
h3{
    color: white;
    text-align: center;
}
</style>

<template>
    <p style="background-color: crimson; z-index: 10; width: 700px;">This page is a work in progress - still need to make the photo holder components create themselves dynamically, then integrate a database system then move the images to an image serving api backend</p>
    <div id="container">
        <header>
            <myHeader :mainHeader=mainHeader :subHeader=subHeader />
        </header>
        <main>
            <div id="photo-view">
                <PhotosItem :imagePath="imagePath" :altText="altText" :photoHeader="photoHeader" :photoCommentary="photoCommentary" :previewCommentary="previewCommentary"/>
            </div>
            <div class="photo-links">
                <p style="text-align: center;">links here</p>
            </div>  
        </main>
        <footer>
            <MyFooter specificPageTechnologies="and MongoDB (eventually)" />
        </footer>
    </div>
</template>

<script setup>
import PhotosItem from '@/components/PhotoView/PhotosItem.vue';
import myHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue';

import { onMounted } from 'vue';

const mainHeader = "This is the photo album";
const subHeader = "Lots of photos here";

const photoHeader = "Abandoned Swing";
const photoCommentary = "This photo was featured in a Glasgow Exhibition with the theme 'Abandoned'";
const imagePath = "\\src\\assets\\PhotoView\\photos\\swing.jpg";
const altText = "A vertical, mostly desaturated but slightly blue-tinged photo of an empty swing - small and on the ground against the large sky.";

const previewCommentary = "Took loads of photos of this view";

// const imageList = [
//     "isle_in_mist.jpg", "20230612_164537.jpg", "=maybe_crop.jpg", "Arrow_of_Light.jpg", "Blue_Candidate.jpg", "Coldplay_Day.jpg","Diurnal_Fall.jpg", "early_morning_fence.jpg", "Gate_to_the_World.jpg", "In_the_Shadow.jpg", "Into_the_painting.jpg", "macro_shot.jpg", "misty_morning.jpg", "Puddle.jpg", "red_eye_over_yonder.jpg", "silver_light_morning.jpg", "smoky_grass_fire.jpg", "spectral_path.jpg", "This_Exit's_Taken.jpg", "towers-2.jpg", "watch_the_limit.jpg"
// ];

// onMounted(()=>{
//     const container = document.querySelector('#photo-view');
//     const path = "\\src\\assets\\PhotoView\\photos\\";
//     container.innerHTML = new PhotosItem;
//     // imageList.forEach((element)=>{
//     //     // container.innerHTML = container.innerHTML + `<img src=${path+element} height="100" width="100">`;
//     //     container.innerHTML = container.innerHTML + `<PhotosItem :imagePath="${path+element}" :altText="{altText}" :photoHeader="${photoHeader}" :photoCommentary="${photoCommentary}" :previewCommentary="${previewCommentary}"/>`
//     // })
    
    
    


// })



// const imageFolder = "images/photos/";

// let container = document.querySelector('#viewer-section');
// let previewContainer = document.querySelector('#holder');

// // const sprockets = '<svg height="30" width="30"><circle cx="20" cy="20" r="10" fill="white" /></svg>';
// const sprockets = '<img src="images/sprocket-hole-2.svg" height="30" width="30">';
// const sprocketSection = `<div class="sprocket-section">${sprockets.repeat(19)}</div>`; 
// const empty = `<div id="empty"></div>`;
// //make else for empty or image

// let photoSection = ``;
// let previews = ``;

// for(let count = 0; count < imageList.length; count++)
// {
//     image = imageFolder + imageList[count];
    
//     let picture = `<div class="picture-holder" id="${imageList[count]}"><img class="picture" src="${image}" alt="image of ${image}"></div>`;
//     let photo = sprocketSection + picture + sprocketSection;
//     photoSection = photoSection + `<div class="photo-section">${photo}</div>`

//     previews = previews + `<a href="#${imageList[count]}"><img class="photoframe" src="${image}"></a>`;
// }

// container.innerHTML = photoSection;

// previewContainer.innerHTML = `<div id="toplink"><a href="">Back to Top</a></div><div id="rule"></div>` + previews;

// console.log(document.querySelector('#holder').firstChild);

</script>

