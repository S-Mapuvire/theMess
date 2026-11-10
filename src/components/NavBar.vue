<template>
    <nav>
        <RouterLink to="/">To Home</RouterLink>
    </nav>
</template>

<script setup>
</script>

<style lang="scss" scoped>
$fadedGlory: hsl(51, 100%, 50%);
$pinkFactory: #f7daf8;
.lightTheme{
    color: black;
}

// .darkTheme div{
//     color: $fadedGlory;
//     text-shadow: 1px 1px 10px white;
// }
// .lightTheme div{
//     color: $pinkFactory;
//     text-shadow: 1px 1px 10px black;
// }
// .switch-checkbox{display: none;}
// .switch-label{
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     position: relative;
//     padding: 1rem;

//     border: 1px solid $fadedGlory;
//     border-radius: 4rem;
//     cursor: pointer;

//     font-size: 1.1rem;
//     height: 2rem;

//     z-index: 1;
//     transition: 0.5s ease;
// }
// .lightTheme .switch-label{
//     &:hover{
//         border: 2px solid rgb(26, 14, 25);
//         background-color: rgba(26, 14, 25, 0.301);
//     }
// }
// .darkTheme .switch-label{
//     &:hover{
//         border: 2px solid #ce78a9;
//         background-color: #ce78a957;
//     }
// }
// .switch-toggle{
//     position: absolute;
    
//     background-image: url('@/assets/theme-button/theme-arrow.svg');
//     background-repeat: no-repeat;
//     background-position: center;
//     background-size: contain;
//     width: 5rem;
//     aspect-ratio: 1;

//     border-radius: 50%;
    
//     top: calc(1rem);
//     left: calc(18rem);
//     height: calc(4rem * 0.4);
//     width: calc(4rem * 0.4);

//     transform: translate(0);
// }
// .switch-toggle-checked{
//     transform: translateX(75rem) rotate(180deg);
// }
// .darkTheme span:nth-of-type(1), .lightTheme span:nth-of-type(2){
//     color: rgba(102, 97, 97, 0.356);
//     text-shadow: none;
// }
// @media (width < 1000px){
//     .switch-toggle{
//         top: calc(0.7rem);
//     }
//     .switch-toggle-checked{
//         transform: translateX(15rem) rotate(180deg);
//     }
//     .switch-label{
//         padding: 0.7rem;
//     }
// }
// @media (width < 800px){
//     .switch-toggle{
//         top: calc(0.5rem);
//     }
//     .switch-toggle-checked{
//         transform: translateX(2rem) rotate(180deg);
//     }
//     .switch-label{
//         padding: 0.5rem;
//     }
// }
</style>