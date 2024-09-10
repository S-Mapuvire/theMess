<!-- to do
 
make more resposive - for smaller screens - vert and hori
make animations variable or turn off able
make refresh only active on bigger screens 
-->

<script setup>
import MyFooter from '@/components/MyFooter.vue'
import CanvasItem from '@/components/CanvasItem.vue'
import MyHeader from '@/components/MyHeader.vue'

const mainHeader = "Welcome to the Portfolio Site of S.Mapuvire!"; 
const subHeader = "Some code, some drawings, and some photos, with a decent description of my half-decent skills, all wrapped in stylish and functional web design!";

window.addEventListener('resize', (e)=>{
    refresh();
})

const refresh = () => window.location.reload();

</script>

<template>
  <div id="container">
      <article id="loading">
      Loading
    </article>
    <header>
      <MyHeader :mainHeader=mainHeader :subHeader=subHeader />
    </header>
      
    <main>
      <div id="canvas-layer">
        <CanvasItem/>
        <nav id="links-container">
          <ul>
            <li class="link-box" id="photos">
              <RouterLink class="link" to="/photos">Photos</RouterLink>
            </li>
            <li class="link-box" id="code">
              <RouterLink class="link" to="/code">Code</RouterLink>
            </li>
            <!-- <li class="link-box" id="cooking">
              <a class="link" href="Cooking.html">Cooking</a>
            </li> -->
            <li class="link-box" id="drawing">
              <RouterLink class="link" to="/drawings">Drawings</RouterLink>
            </li>
            <li class="link-box" id="resume">
              <RouterLink class="link" to="/resume">Resume</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </main> 
    <footer>
      <MyFooter specificPageTechnologies="and p5.js"/>
    </footer> 
  </div>

</template>

<style scoped lang="scss">
// make homepage responsive, remove padding
// make measurements relative
// make mixin, functions and variables for all the colours


@import '../assets/colours';
.darkTheme .link{
  background-image: url('@/assets/HomeView/starButton-default-dark.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  border-radius: 3rem;
  
  &:hover{
    background-image: url('@/assets/HomeView/starButton-hover-dark.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    box-shadow: 
    $shadow-size $shadow-size $shadow-glow-radius $shadow-colour, 
    $shadow-size 0 $shadow-glow-radius $shadow-colour, 
    0 $shadow-size $shadow-glow-radius $shadow-colour, 
    $negative-shadow-size $negative-shadow-size $shadow-glow-radius $shadow-colour, 
    0 $negative-shadow-size $shadow-glow-radius $shadow-colour, 
    $negative-shadow-size 0 $shadow-glow-radius $shadow-colour, 
    $shadow-size $negative-shadow-size $shadow-glow-radius $shadow-colour, 
    $negative-shadow-size $shadow-size $shadow-glow-radius $shadow-colour;
  }
  &:active{
    background-image: url('@/assets/HomeView/starButton-active-dark.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}
.lightTheme .link{
  background-image: url('@/assets/HomeView/starButton-default-light.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  
  color: hsl(337, 77%, 36%);

  &:visited{ color: hsl(337, 77%, 36%); }

  &:hover{
    background-image: url('@/assets/HomeView/starButton-hover-light.svg');
    color: hsl(337, 47%, 96%);
  }
  &:active{ background-image: url('@/assets/HomeView/starButton-active-light.svg'); }
}

/* ----------------------------------------------------------- */
html{cursor: none;}
#container{
  height: 90%;
  width: 100%;
}
#loading {
    background-color: red;
    display: none;
}
/* ----------------------------------------------------------- */
header, footer {
    cursor: default;
}
h1, h2{
  padding: 0.7rem;
  position: relative;
  left: -1.8rem;
  width: 102%;
}
/* ----------------------------------------------------------- */
main {
    height: 70vh;
    width: 100%;
}
/* ----------------------------------------------------------- */
#links-container{
  width: 100%;
  height: 100%;
}
.link-box{
    width: 6rem;
    aspect-ratio: 1;
}
.link{
    cursor: none;
    
    display: block;
    align-content: center;
    text-align: center;

    width: 100%;
    height: 100%;

    &:hover{
      font-weight: 800;
        transform: scale(1.05);
        transition: 0.4s;
    }
    &:active{ transform: scale(1); }
}
/* ----------------------------------------------------------- */
#photos {
    position: relative;
    left: 10vw;
    top: 50vh;
}
#code{
    position: relative;
    left: 5vw;
}
#cooking{
    position: relative;
    left: 50vw;
    top: 100vw; 
}
#drawing {
    position: relative;
    left: 35vw;
    top: 30vh; 
}
#resume {
    position: relative;
    left: 85vw;
    top: 25vh;
}
/* ----------------------------------------------------------- */
// make mobile friendly
// add opiton to turn off animations 
@media (width < 1000px){}

@media (width < 800px) and (height < 700px){
  // add flex support
  .darkTheme .link{border-radius: 5rem;}
  .link-box{width:7rem;
  }
  #photos {
    left: 10vw;
    top: 40vh;
  }
  #code{
      left: 25vw;
      bottom: 20vh;
  }
  #drawing {
      left: 50vw;
      top: -20vh; 
  }
  #resume {
      left: 5vw;
      top: -47vh;
  }
}

@media (width < 800px){
  header{ padding: 0 1rem; }
  h1, h2{
    padding: 0;
    text-align: center;
  }
  h2{ padding-left: 10px; }
  #resume{ left:80vw; }
}

</style>