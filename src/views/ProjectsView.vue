<!-- make it run off mongodb -->
<template>

    <div id="page">
        <header>
            <MyHeader :mainHeader="mainHeader" :subHeader="subHeader"/>
        </header>
        <main>
            <section>
                <h3>Game Dev</h3>
                <h4>I think about video games a bit - one day it'll reflect in this space...</h4>
                <ul>
                    <p>I try to regularly participate in group game jams - having completed 3</p>
                    <li>
                        <a href="https://maxbluepanda.itch.io/proto-signal">Proto Signal</a>
                    </li>
                    <li>
                        <a href="https://maguscurt.itch.io/idgb-jame-project">Distortion Dash!</a>
                    </li>
                    <li>
                        <a href="https://maxedev.itch.io/oh-no-i-fell-into-hell-and-now-im-bowling-against-demon-pins">Oh No!!! I Fell Into Hell and Now I'm Bowling Against Demon Pins!!!</a>
                    </li>
                </ul>
            </section>

            <section>
                <h3>Things I Programmed</h3>
                <h4>Subtitle</h4>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            <section>
                <h3>Photography</h3>
                <h4>To link to a photo gallery</h4>
                <a href="https://www.glasgowgalleryofphotography.com/exhibition2023/abandoned?pgid=m1i0rk4w1-dbe4ed_135446df99a84bd48a5d78da81d33b93mv2.jpg" target="_blank">
                    So far I can at least link to a photo I did that was on display in a Glasgow museu
                </a>
            </section>
        </main>
        <footer>
            <MyFooter />
        </footer>
    </div>
    
        

</template>

<script setup>
import MyFooter from '@/components/MyFooter.vue';
import MyHeader from '@/components/MyHeader.vue';

const mainHeader = "Here's a collection of stuff I've made";
const subHeader = "Like the rest of the site, this is a work in progress";

</script>

<style lang="scss" scoped>

.darkTheme #page{
    color: white;
}

.darkTheme section{
    border: 4px double rgb(143, 131, 27);
}
.lightTheme section{
    background-color: white;
}
a{
    text-decoration: underline;
}
.darkTheme a:hover{
    text-shadow: 1px 1px 5px white;
}
.lightTheme a:hover{
    color: #f193b7;
}
section{
    border-radius: 0 10px 0 10px;
    padding: 5px;
    margin: 10px 0;
}
section p{
    margin: 5px 15px;
}
h4{
    margin: 1% 2%;
}
li::before{
    content: "-> ";
}
</style>
