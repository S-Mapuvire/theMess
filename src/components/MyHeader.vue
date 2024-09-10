!<template>
    <div>
        <h1>{{ mainHeader }}</h1>
        <h2>{{ subHeader }}</h2>
    </div>
</template>

<script setup>

const props = defineProps({
  mainHeader: {
    type: String,
    required: true,
  },
  subHeader: {
    type: String, 
    required: false
  },
})

</script>

<style lang="scss" scoped>
$shadow-colour: rgba(176, 231, 253, 0.3);
$shadow-size: 12px;
$negative-shadow-size: -12px;
$shadow-glow-radius: 20px;

$dark-mode-header-colour: #e0dab8;
$dark-mode-header-background: #1a1600;
$dark-mode-border-darker:#998200;
$dark-mode-border-lighter: #ffd900;

$light-mode-header-colour: rgb(224, 218, 184);
$light-mode-header-background: hsl(51, 100%, 5%);
$light-mode-border-darker:#d01b60;
$light-mode-border-lighter: hsl(51, 100%, 50%);

div{
  width: 100%;
  text-align: end;
  padding: 0.5rem 0;
}
.darkTheme div {
  border-bottom: 2px solid $dark-mode-header-colour;
  background-color: $dark-mode-header-background;
  color: $dark-mode-header-colour;
}
.lightTheme h1{
  background-color: #f7e9f1;
}
.lightTheme h2{
  background-color:#f193b7;
}

@media (width < 800px){
    div{
    padding: 0 1rem;
  }
  h1, h2{
    padding: 0;
    text-align: center;
  }
  h2{
    padding-left: 10px; 
  }
}

</style>