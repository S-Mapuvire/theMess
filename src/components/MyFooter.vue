<script setup>
  const props = defineProps({
    specificPageTechnologies: {
      type: String, 
      required: false,
    },
  });

  const pageTechnologies = "Vue.js and SASS";
  
</script>

<template>
  <div id="footer">
    <div id="footer-link-area">
      <p id="footer-header">My Other Accounts</p>
      <ul id="footer-links">    
        <li><a href="https://flickr.com/photos/200206300@N03/" class="footer-link">Flickr</a></li>
        <li><a href="mailto:smapuvire@proton.me" class="footer-link">Email Address</a></li>
        <li><a href="https://github.com/S-Mapuvire" class="footer-link">Github</a></li>
        <li><a href="https://nothingheretosee79.wordpress.com/" class="footer-link">WordPress - Currently Blank</a></li>
        <li><a href="https://yumnothingsoup.neocities.org/" class="footer-link">Neocities Scrapbook - Just a home page at the moment!</a></li>
      </ul>
    </div>
    <hr>
    
    <p class="footer-label"> &copy; S.Mapuvire 2024 </p>
    <p class="footer-label"> This page was made with {{pageTechnologies}} {{ specificPageTechnologies }} </p>
  </div>

</template>

<style lang="scss" scoped>

@import '../assets/colours';
.darkTheme .footer-link{
  &:hover{ text-shadow: 1px 1px 30px rgba(255, 255, 255, 1); }
  &::after{ background-color: white; }
}
.lightTheme .footer-link{
  &:hover{ text-shadow: 1px 1px 30px rgba(255, 255, 255, 1); }
}
.darkTheme hr{ border-top: 1px solid $dark-mode-border-darker; }
.lightTheme hr{ border-top: 1px solid $light-mode-border-darker; }
.darkTheme #footer{
  border-top: 3px double $dark-mode-border-darker;
  border-bottom: 3px double $dark-mode-border-darker;
  background-color: $dark-mode-header-background;
  color: $dark-mode-header-colour;
}
.lightTheme #footer{
  border-top: 3px double $light-mode-border-darker;
  border-bottom: 3px double $light-mode-border-darker;
  background-color: #f7e9f1;
}
/* ----------------------------------------------------------- */
#footer{
  padding-top: 5px;
  text-align: right;
}
#footer-header{ font-weight: bold; }
.footer-link{
  &:hover{ font-weight: 800; }
  &::after{
    background-color: hsl(337, 77%, 76%);
    content: "";
    mask-image: url(@/assets/arrow.svg);
    display: inline-block;
    margin: 2px;
    width: 10px;
    height: 10px;
  }
}
hr{
    border: none;
    margin: 10px 0;
}
.footer-label{ padding: 5px 5px 5px 0; }
/* ----------------------------------------------------------- */
@media (width < 1000px){
  #footer{
    a, #footer-header{
      font-size: 1.1rem;
    }
  }
}
@media (width < 800px){
  #footer{
    text-align: center;
    a, #footer-header{
      font-size: 1.2rem;
    }
  }
}
</style>


