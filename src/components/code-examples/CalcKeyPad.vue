!<template>
    <div id="keypad">

        <CalcButton value="" style="min-height: 25px;"/>
        <CalcButton class="constantOperator" id="PI" value="PI" /> 
        <CalcButton class="constantOperator" id="exponential" value="e" />
        <CalcButton class="clearOperator" id="clear" value="C" />
        <CalcButton class="clearOperator" id="backspace" value="Backspace" />

        <CalcButton class="monoOperator" id="squared" value="x^2" />
        <CalcButton class="monoOperator" id="reciprocal" value="1/x" />
        <CalcButton class="monoOperator" id="absolute" value="Abs X" />
        <CalcButton class="expOperator" id="scientificForm" value="exp" />
        <CalcButton class="binaryOperator" id="modulo" value="%" />

        <CalcButton class="monoOperator" id="sqrt" value="sqrt x" />
        <CalcButton class="clearOperator" id="leftBracket" value="(" />
        <CalcButton class="clearOperator" id="rightBracket" value=")" />
        <CalcButton class="monoOperator" id="permutation" value="n!" />
        <CalcButton class="binaryOperator" id="divide" value="/" />

        <CalcButton class="binaryOperator" id="power" value="x^y" />
        <CalcButton class="integerOperator numeral" value="7" />
        <CalcButton class="integerOperator numeral" value="8" />
        <CalcButton class="integerOperator numeral" value="9" />
        <CalcButton class="binaryOperator" id="multiply" value="X" />

        <CalcButton class="monoOperator" id="tenExponent" value="10^x" />
        <CalcButton class="integerOperator numeral" value="4" />
        <CalcButton class="integerOperator numeral" value="5" />
        <CalcButton class="integerOperator numeral" value="6" />
        <CalcButton class="binaryOperator" id="subtraction" value="-" />

        <CalcButton class="monoOperator" id="log" value="log" />
        <CalcButton class="integerOperator numeral" value="1" />
        <CalcButton class="integerOperator numeral" value="2" />
        <CalcButton class="integerOperator numeral" value="3" />
        <CalcButton class="binaryOperator" id="addition" value="+" />

        <CalcButton class="monoOperator" id="ln" value="ln" />
        <CalcButton class="monoOperator" id="negate" value="+/-" />
        <CalcButton class="integerOperator numeral" value="0" />
        <CalcButton class="decimalOperator" id="decimal" value="." />
        <CalcButton class="monoOperator" id="equals" value="=" />
    </div>
</template>

<script setup>

import CalcButton from '@/components/code-examples/CalcButton.vue'

</script>

<style lang="scss" scoped>

#keypad{
    display: flex;
    flex-wrap: wrap;
    // grid-template-columns: repeat(5, 120px);
    width: 100%;
}


</style>