<template>
    <div id="page">
        <header>
            <MyHeader :mainHeader="mainHeader" :subHeader="subHeader" />
        </header>
        <main>
            <section id="calc">
                <div id="calculator-container">
                    <div id="calculator">
                        <div id="screen">0</div>
        
                        <h2 style="font-size: 1em;color:black;font-weight: 700;">Red text = Not quite functional...</h2>
                        
                        <CalcKeyPad/>
                    </div>
                </div>
            </section>

            <section id="desc">
                <details>
                    <summary>What's so special about this?</summary>
                    <p>
                        Well, most calculator programs/codes seen on the web are presented as beginner projects and thus built using a series of if-statements. You know...
                        <pre>
                            <code>
                                if this number button is pressed:
                                    append the value to the screen number;
                                if this operator button is pressed:
                                    perform this operation;
                            </code>
                        </pre>
                    </p>
                    <p>
                        This calculator, though, instead uses a state machine to choose what button does what!
                    </p>
                </details>
                <details>
                    <summary>...And state machines are what?</summary>
                    <p>
                        If you don't know, a super simple summary is: a state machine is a data structure that processes inputs, the kind that change depending on what 'state' they are in. 
                        
                        An example would be a security door. 
                        In practice, such doors are either open or closed, right? But to open a security door, you need the code, and to close it takes a second or so for the automated bolts to shut.

                        <img src="@/assets/code-examples/door-diagram.svg" alt="Two diagrams representing how a security door can be displayed in terms of it's current state. The first diagram is of a door labelled 'closed' with an arrow labelled 'type in the door code' leading to a door labelled 'open'. And the second diagram is of a door labelled 'open' with an arrow labelled 'close the door' leading to a door labelled 'closed'  ">

                        So, you could represent these two states with a diagram like so:

                        <img src="@/assets/code-examples/door-states.svg" alt="A diagram showing the prior diagram as a state machine made up of two circles - the first labelled 'closed' and the second labelled 'open. The labels joining them are 'Enter code' which leads from 'closed' to 'open', and 'Close door' which leads in the opposire direction.">

                        And this is a state machine diagram. 
                        
                        <details>
                            <summary>Aside</summary>
                            <p>
                                (Erm, well, calling it a data structure implies that it's just a programming tool, but it's more of a way of thinking about computations. And when I say 'state machine', I'm really more referring to a finite-state machine, but that's neither here nor there really. This short explanation is gonna live in the realm of simple coding usage and less so in the mathematical realm of what state machines are what with determinism and normalisation and formal languages and grammar and whatnot.)
                            </p>
                        </details>
                    </p>
                </details>
                <details>
                    <summary>Why do it using states?</summary>
                    <details>
                        <summary>Short answer?</summary>
                        <p>Because it seems neat!</p>
                    </details>
                    <details>
                        <summary>Longer answer?</summary>
                        <p>
                            Because I watched a video called: <a href="https://www.youtube.com/watch?v=I1Mzx_tSpew">'When Booleans are not Enough...State Machines?'</a> that talked about using state machines as an alternative to long lists of if-else-statements or equivalents. 
                            So, to summarise a 20 min video shortly: it was essentially stating...pun not intended...that using a long list of boolean comparisons, in a program that changes states, to check what buttons or what settings had been selected is kinda unwieldy for large enough constructs. 
                            So instead, they suggest to use a state machine to validate what's supposed to happen when. Because then the buttons are placed into categories with shared logic rather than idiosyncractic buttons wach with their own logic. Because adding new buttons just means assigning it to an already esetablished state (hopefully) rather than making new logic for it. And also becuase if the wrong input is given, nothing happens, so it sorta runs itself, kinda!
                            This especially appealed to me as someone who's written a video player for previewing files.
                            I took this idea to the first thing I could stumble upon of to test it - a Windows styled scientific calculator! It's got plenty of options, but with such caveats along certain groups that recreating it uwing booleans seems...ill-advised. So, it looked like a clear candidate for a state machine!

                            Here is the detailed but not super prime-time ready, super zoomed out state diagram: <img src="../../assets/code-examples/states.png" alt="A large diagram of a state machine for the calculator involving 6 states and 6 transitions for the 6 categories of buttons i.e. integers, constants, binary operators, mono operators, clear operator, and the form change operators.">

                            Basically there's 6 types of buttons (the diagram needs an update since decimal operator is getting grouped with exp operator now) and all of them can lead to the clear operator that resets the screen and answer buffer. This is kinda preferable to keeping track of like...30 buttons.
                        </p>
                    </details>
                </details>
                <details>
                    <summary>So is it any good?</summary>
                    <p>
                        The process has been a bit tricky - state machines aren't a fix all, rather it's a shift in perspective, I think. A shift that can benefit from a growing structure but that still requires looking at the problem carefully.
                        Like, building the actual state machine requires assessing every possible state and knowing what leads into and out of them - more time consuming than just adding a boolean check to each button. Especially the case when I need to make an entire state machine class that runs the logic of the calculator. But, hey, this kind of coding aligns with the MVC paradigm, if that's your thing.
                        Which on the plus side means having a more thorough understanding of one's structure, but on the downside means spending ages building that understanding - which might not be worth it on smaller projects.
                        I plan to adapt this basic structure to make a graphing and topological calculator, which would be neat and possibly easier to do with a robust state machine running it.  
                    </p>
                </details>

            </section>

        </main>
        <footer>
            <MyFooter />
        </footer>
    </div>
</template>

<script setup>
import CalcKeyPad from '@/components/code-examples/CalcKeyPad.vue';
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';

import { onMounted } from 'vue';

const mainHeader = 'Scientific calculator';
const subHeader = 'But using a state machine instead of if-statements';
 
onMounted(()=>{
    let keypad = document.querySelector('#keypad');
    let calcscreen = document.querySelector('#screen');

    class Calculator {
        // two forms - shifting and reset with shifting
        // model = states, view = display, controller = operators
        constructor() {

            this.zeroForm = 'ZERO'; 
            this.constantForm = 'CONSTANT'; 
            this.integerForm = 'INTEGER'; 
            this.exponentForm = 'EXPONENT';
            this.equationForm = 'EQUATION'; 
            this.answerForm = 'ANSWER'; 
            this.decimalForm = 'DECIMAL';

            this.currentState = this.zeroForm;
            
            this.buffer = 0;

            this.transitions = [

                {'trigger':'integerOperator', 'source':this.integerForm, 'dest':this.integerForm},
                {'trigger':'integerOperator', 'source':this.constantForm, 'dest':this.integerForm},
                {'trigger':'integerOperator', 'source':this.zeroForm, 'dest':this.integerForm},
                {'trigger':'integerOperator', 'source':this.answerForm, 'dest':this.integerForm},
                {'trigger':'integerOperator', 'source':this.decimalForm, 'dest':this.integerForm},

                {'trigger':'clearOperator', 'source':this.zeroForm, 'dest':this.zeroForm},
                {'trigger':'clearOperator', 'source':this.constantForm, 'dest':this.zeroForm},
                {'trigger':'clearOperator', 'source':this.integerForm, 'dest':this.zeroForm},
                {'trigger':'clearOperator', 'source':this.exponentForm, 'dest':this.zeroForm},
                {'trigger':'clearOperator', 'source':this.answerForm, 'dest':this.zeroForm},
                {'trigger':'clearOperator', 'source':this.decimalForm, 'dest':this.zeroForm},

                {'trigger':'constantOperator', 'source':this.constantForm, 'dest':this.constantForm},
                {'trigger':'constantOperator', 'source':this.zeroForm, 'dest':this.constantForm},
                {'trigger':'constantOperator', 'source':this.integerForm, 'dest':this.constantForm},
                {'trigger':'constantOperator', 'source':this.exponentForm, 'dest':this.constantForm},
                {'trigger':'constantOperator', 'source':this.answerForm, 'dest':this.constantForm},
                {'trigger':'constantOperator', 'source':this.decimalForm, 'dest':this.constantForm},

                {'trigger':'binaryOperator', 'source':this.equationForm, 'dest':this.equationForm},
                {'trigger':'binaryOperator', 'source':this.zeroForm, 'dest':this.equationForm},
                {'trigger':'binaryOperator', 'source':this.constantForm, 'dest':this.equationForm},
                {'trigger':'binaryOperator', 'source':this.integerForm, 'dest':this.equationForm},
                {'trigger':'binaryOperator', 'source':this.exponentForm, 'dest':this.equationForm},
                {'trigger':'binaryOperator', 'source':this.answerForm, 'dest':this.equationForm},
                {'trigger':'binaryOperator', 'source':this.decimalForm, 'dest':this.equationForm},

                {'trigger':'monoOperator', 'source':this.answerForm, 'dest':this.answerForm},
                {'trigger':'monoOperator', 'source':this.zeroForm, 'dest':this.answerForm},
                {'trigger':'monoOperator', 'source':this.constantForm, 'dest':this.answerForm},
                {'trigger':'monoOperator', 'source':this.integerForm, 'dest':this.answerForm},
                {'trigger':'monoOperator', 'source':this.exponentForm, 'dest':this.answerForm},
                {'trigger':'monoOperator', 'source':this.decimalForm, 'dest':this.answerForm},

                {'trigger':'expOperator', 'source':this.zeroForm, 'dest':this.exponentForm},
                {'trigger':'expOperator', 'source':this.answerForm, 'dest':this.exponentForm},
                {'trigger':'expOperator', 'source':this.decimalForm, 'dest':this.exponentForm},

                {'trigger':'decimalOperator', 'source':this.zeroForm, 'dest':this.decimalForm},
                {'trigger':'decimalOperator', 'source':this.integerForm, 'dest':this.decimalForm},
                {'trigger':'decimalOperator', 'source':this.answerForm, 'dest':this.decimalForm},
            ]
        }

        integerOperator({value, operator}) {
            // either add to int or reset to one
            if (this.currentState == this.integerForm || this.currentState == this.decimalForm) {
                this.buffer += operator;
            }
            else {this.buffer = operator;}

            this.printToScreen();

            this.currentState = this.integerForm;
            console.log(`Buffer value is now: ${this.buffer} and State is now: ${this.currentState}`)
        }

        clearOperator({value, operator}) {
            if (operator == 'clear'){
                this.buffer = 0;
                this.printToScreen()
                this.currentState = this.zeroForm;
            }
            else if (operator == 'backspace'){
                ////////////////////// make this into it's own backspaceForm
                console.log('work in prog...')
                return

                let bufferString = this.buffer.toString();
                bufferString = bufferString.slice(0, -1);
                this.buffer = Number(bufferString);
                this.printToScreen();
                this.currentState = this.integerForm;
            }
            
            console.log(`Buffer value is now: ${this.buffer} and State is now: ${this.currentState}`)
        }
        constantOperator({value, operator}) {
            let values = {'PI': Math.PI, 'exponential': Math.E}
            this.buffer = [operator];
            this.printToScreen();
            this.currentState = this.constantForm;
            console.log(`Buffer value is now: ${this.buffer} and State is now: ${this.currentState}`)
        }

        binaryOperator({value, operator}) {
            // rewrite so loops until equals or operator

            const operations = {
                'divide': (value) => this.buffer /= value,
                'multiply': (value) => this.buffer *= value,
                'addition': (value) => this.buffer += value,
                'subtraction': (value) => this.buffer -= - value,
            }
            operations[operator](value);
            this.currentState = this.equationForm;
            console.log(`Buffer value is now: ${this.buffer} and State is now: ${this.currentState}`)
        }

        printToScreen(){
            let bufferString = this.buffer.toString();

            if (bufferString.startsWith('0')) { 
                bufferString = bufferString.slice(1);
            }
            if (bufferString.length < 1){
                bufferString = '0';
            }

            let display = '';
            calcscreen.innerText = '';
            if(bufferString.length == 1){
                display = bufferString;
            }
            else{
                const bufferOutput = Array.from(bufferString);
                
                for(let position = -1; Math.abs(position) <= bufferString.length; position--) {
                    if(Math.abs(position) > 1 && Math.abs(position) % 3 == 1){
                        display = `${bufferOutput.at(position)}` + ',' + display
                    }
                    else {
                        display = `${bufferOutput.at(position)}` + display 
                    }
                }
            }
            calcscreen.innerText = display
        }

        monoOperator({value, operator}) {
            const operations = {
                'equals': (value) => printToScreen(),
                'reciprocal': (value) => this.buffer = 1 / this.buffer,
                'permutation': (value) => console.log('work in progress'),
                'squared': (value) => this.buffer = Math.pow(this.buffer, 2),
                'sqrt': (value) => this.buffer = Math.sqrt(value),
                'power': (value) => this.buffer = Math.pow(this.buffer, value),
                'absolute': (value) => this.buffer = Math.abs(this.buffer),
                'log': (value) => this.buffer = Math.log(value),
                'ln': (value) => this.buffer = Math.LN10(value),
            }
            operations[operator](value);

            this.printToScreen();
            this.currentState = this.answerForm;
            console.log(`Buffer value is now: ${this.buffer} and State is now: ${this.currentState}`)
        }
        expOperator({value, operator}) {
            console.log(`In Function: Calling expOperator with a buffer value of: ${value} and ${operator}`)
            return;

            // enter into exponent form
            const mantissa = this.buffer;
            const n = value;

            // m X 10^n => m.0 e + n
            this.buffer = mantissa * (10^n);
            // this.currentState = this.states.exponentForm
        }
        decimalOperator({value, operator}) {
            console.log(`In Function: Calling decimalOperator with a buffer value of: ${value} and ${operator}`)
            return;


            // enter into decimal form
            const integer = this.buffer;
            let decimal = value;

            while(decimal > 1){
                decimal = decimal/10
            }

            this.buffer = integer + decimal/10;
            this.currentState = this.decimalForm;
            
            
            //             function DoubleToIEEE(f)
// {
//     var buf = new ArrayBuffer(8);
//     (new Float64Array(buf))[0] = f;
//     return [ (new Uint32Array(buf))[0] ,(new Uint32Array(buf))[1] ];
// }
        }
        
    }

    class Machine{
        constructor(model, transitions, initial, state) {
            this.model = model;
            this.transitions = transitions;
            this.initial = initial;
            this.state = state;

            this.functionMappings = 
            {
                'integerOperator': ({value, operator})=>this.model.integerOperator({value, operator}),
                'clearOperator': ({value, operator})=>this.model.clearOperator({value, operator}),
                'constantOperator': ({value, operator})=>this.model.constantOperator({value, operator}),
                'binaryOperator': ({value, operator})=>this.model.binaryOperator({value, operator}),
                'monoOperator': ({value, operator})=>this.model.monoOperator({value, operator}),
                'expOperator': ({value, operator})=>this.model.expOperator({value, operator}),
                'decimalOperator': ({value, operator})=>this.model.decimalOperator({value, operator})
            }
        }

        

        whatEvent = (e) => {
            if (e.srcElement.id){
                console.log(`operator classes:${e.srcElement.classList[0]}, \nspecific operator: ${e.srcElement.id}`);
            }
            else{
                console.log(`operator class: ${e.srcElement.classList[0]}, \nnumeral:${e.srcElement.innerText}`);
            }
            
            let specificOperator;
            e.srcElement.id? specificOperator = e.srcElement.id: specificOperator = e.srcElement.innerText;

            this.transitions.forEach(transition => {
                if(transition.trigger == e.srcElement.classList[0]){
                    if(transition.source == this.state){
                        console.log(`\ninput operator is: ${specificOperator}`)
                        console.log(`current buffer has: ${this.model.buffer}`)
                        console.log(`current state is ${transition.source}`)
                        console.log(`calling ${transition.trigger} transition`);
                        console.log(`moving to state ${transition.dest}`);
                        console.log(``);

                        this.functionMappings[transition.trigger]({value:this.model.buffer, operator:specificOperator}) 
                    }
                }
                
            });
        }
    }

    const calculator = new Calculator();

    const calculatorStateMachine = new Machine(calculator, calculator.transitions, calculator.currentState, calculator.currentState);

    for(let i = 0; i < keypad.children.length; i++){
        let key = keypad.children[i];
        key.addEventListener('click', (e) => {
            calculatorStateMachine.whatEvent(e);
        })
    }
})
</script>

<style lang="scss" scoped>

@import '../../assets/code-examples/calc-colours';
.darkTheme #page{
    color: white
}
.darkTheme #calc {
    border-bottom: 3px double #998200;
}
#calculator-container{
    // height: 50vh;
    width: 50vw;

    margin: 10% 25%;
}
#calculator{
    width: 80%;
    height: 100%;
    margin-top: 10px;
    padding: 7%;
    
    display: flex;
    flex-direction: column;
    justify-items: center;

    font-family: Lato;
    color: white;
    
    background: radial-gradient(farthest-corner at -10px -10px, $calculatorHighlight 5%, $calculatorBody);
    box-shadow: 
    5px 5px $calculatorBodyOutlineRight,
    -5px 5px $calculatorBodyOutlineLeft,
    -5px -5px $calculatorBodyOutlineTop;
    border-radius: 30px 30px 50px 50px;

    outline: 15px solid hsla(197, 61%, 46%, 0.466);
    outline-offset: -10px;
}
#screen{
    // width: calc(120px*5);
    width: 94%;
    height: 15%;
    
    display: flex;
    justify-content: end;
    align-content: center;
    flex-wrap: wrap;
    
    font-family: 'Cascadia Code';
    font-size: 2em;
    font-weight: 600;
    color: hsl(78, 38%, 17%);
    
    background: $screenColour linear-gradient(rgba(255, 0, 0, 0) 60%,hsla(191, 18%, 64%, 0.411) 75%);
    border: 10px inset hsl(197, 61%, 70%);
    border-radius: 5px;
}

details{
    padding: 1%;
    
    img{
        padding: 1%;
    }

}
.lightTheme details{ 
    background-color: #f193b7;
    
    summary{ 
        background-color: #f7e9f1;
    }
    img{
        background-color: #fff;
    }
}
.darkTheme details{ 
    border: 2px solid #e0dab8;
    background-color: #1a1600;

    summary{ 
        background-color: #4d4100; 
        padding: 0.5% 1%;
    }
    img{
        background-color: #aaa;
    }
}
#desc{
    details{
        margin: 1% 0; 
    }
    summary{
        font-size: 1.1rem;
        margin-left: 1%;
    }
    p{
        margin: 2%;
    }
}

</style>