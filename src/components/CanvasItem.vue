<!-- initial understanding: https://github.com/tothepoweroftom/vue-p5js/tree/master -->
<!-- https://dev.to/christiankastner/integrating-p5-js-with-react-i0d -->
 <!-- https://github.com/processing/p5.js/wiki/Global-and-instance-mode -->

<template>
    <div id="sketch">
    </div>
</template>

<script setup>
import p5 from 'p5'
import { onMounted } from 'vue';

const canvas = (sketch)=>{

    const darkBackground = 'rgb(26, 14, 25)';
    const lightBackground =  'rgb(206, 120, 169)';

    class Star {
        constructor (){
            this.x = sketch.random(-sketch.width, sketch.width);
            this.y = sketch.random(-sketch.height, sketch.height);
            this.z = sketch.random(sketch.width);
            this.pz;
            this.hue = sketch.int(sketch.random(355));
        }
        update() {
            this.z = this.z - speed
            if (this.z < 1) {
                this.z = sketch.width; 
                this.x = sketch.random(-sketch.width, sketch.width);
                this.y = sketch.random(-sketch.height, sketch.height);
                this.pz = this.z;
            }
        }
        show(){
            let sx = sketch.map(this.x/this.z, 0, 1, 0, sketch.width)
            let sy = sketch.map(this.y/this.z, 0, 1, 0, sketch.height)
            
            sketch.fill(`hsl(${this.hue}, 70%, 91%)`);
            sketch.noStroke();

            let r = sketch.map(this.z, 0, sketch.width, 16, 0)
            sketch.ellipse(sx, sy, r, r)

            let px = sketch.map(this.x/this.pz, 0, 1, 0, sketch.width)
            let py = sketch.map(this.y/this.pz, 0, 1, 0, sketch.height)

            this.pz = this.z;

            sketch.stroke(this.hue);
            sketch.line(px, py, sx, sy)
        }
    }
    let points;
    let stars = [];
    let speed;

    sketch.setup = ()=>{
        sketch.createCanvas(sketch.windowWidth - 20, sketch.windowHeight);

        points = makePoints();
        
        for (let i = 0; i < 1000; i++) {
            stars[i] = new Star();
        }
    };

    sketch.draw = ()=>{
        if (document.documentElement.className == 'darkTheme'){
            sketch.background(darkBackground);
        }
        else{
            sketch.background(lightBackground);
        }
        
        sketch.stroke(100);
        sketch.circle(sketch.mouseX, sketch.mouseY, 30);

        drawLines(points);

        speed = sketch.map(sketch.mouseX, 0, sketch.width, 1, 5);
        
        sketch.translate(sketch.width / 2, sketch.height / 2);
        for (let i = 0; i < stars.length; i++) {
            stars[i].update();
            stars[i].show();
        }
    };

    function makePoints(){
        const photos = document.querySelector('#photos');
        const code = document.querySelector('#code');
        const drawing = document.querySelector('#drawing');
        const resume = document.querySelector('#resume');

        const points = [
            [
                photos.getBoundingClientRect().left + photos.getBoundingClientRect().width/2, 
                photos.getBoundingClientRect().top + photos.getBoundingClientRect().height/2
            ], 
            [
                code.getBoundingClientRect().left + code.getBoundingClientRect().width/2, 
                code.getBoundingClientRect().top + code.getBoundingClientRect().height/2
            ],
            [
                drawing.getBoundingClientRect().left + drawing.getBoundingClientRect().width/2, 
                drawing.getBoundingClientRect().top + drawing.getBoundingClientRect().height/2
            ],
            [
                resume.getBoundingClientRect().left + resume.getBoundingClientRect().width/2, 
                resume.getBoundingClientRect().top + resume.getBoundingClientRect().height/2
            ]
        ];

        return points;
    }

    function drawLines(points){
        sketch.stroke('rgba(255, 255, 255, 0.25)');
        sketch.strokeWeight(5);
        
        for(let point = 0; point < 3; point++){
            sketch.line(
                points[point][0], 
                points[point][1], 
                points[point+1][0], 
                points[point+1][1]
            );
        }
    }

};

onMounted(()=>{
    let myp5 = new p5(canvas, document.getElementById('sketch'))
})
</script>

<style lang="scss" scoped>
    #sketch{
        position: absolute;
        top: -1px;
        z-index: -1;
        cursor: none;
    }
    @media (width < 800px) and (height < 700px){
        #sketch{
            display: none;
        }
    }

</style>