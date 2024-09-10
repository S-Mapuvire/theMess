!<template>
    <button class="key">{{ value }}</button>
</template>

<script setup>

const props = defineProps({
    value: {
        type: String,
        required: true,
    },
});

</script>

<style lang="scss" scoped>

@import '../../assets/code-examples/calc-colours';

%key{
    font-family: Lato;
    font-size: 1em;
    font-weight: 700;
    color: hsl(50, 41%, 12%);
    
    border: 4px solid $keyOutlineLight;
    border-radius: 10px;
    box-shadow: 0 2px rgb(20, 80, 99);
    background: linear-gradient(-30deg, $keyBody 80%, $keyHighlight 90%);

    width: 12%;
    height: 8%;
    padding: 2px 6px;
    margin: 1%;
    
    &:hover {
        background: radial-gradient(farthest-corner at -40px -40px, $keyHighlight 40%, $keyBody 70%);
        color: $keyTextDark;
        border: 4px solid $keyOutlineMedium;
        cursor: pointer;
    }
    &:active{
        background: linear-gradient(-30deg, $keyHighlight, $keyBody);
        box-shadow: none;
        border: 4px solid $keyOutlineDark;
        padding: 3px 7px;
        margin: 4px 3px 3px 3px;
    }
}
.key {
    @extend %key;
}
#backspace, #leftBracket, #rightBracket, #power, #multiply, #subtraction, #addition, #decimal{
    @extend %key;
    background: linear-gradient(-30deg, red 80%, crimson 90%);
    &:hover {
        background: radial-gradient(farthest-corner at -40px -40px, red 40%, darkred 70%);
        color: $keyTextDark;
        border: 4px solid firebrick;
        cursor: pointer;
    }
    &:active{
        background: linear-gradient(-30deg, red, darkred);
        box-shadow: none;
        border: 4px solid crimson;
        
        padding: 3px 7px;
        margin: 4px 3px 3px 3px;
    }
}
.clearOperator{
    @extend %key;
    color: hsl(147, 49%, 18%);
}

</style>