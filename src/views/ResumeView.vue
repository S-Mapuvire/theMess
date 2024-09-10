<!-- make it run off mongodb -->
<template>

    <div id="page">
        <header>
            <MyHeader :mainHeader="mainHeader" :subHeader="subHeader"/>
        </header>
        <main>
            <section>
                <h3>Contact Details</h3>
                <ul>
                    <li>Email: <a href="mailto:smapuvire@proton.me">smapuvire@proton.me</a></li>
                    <li>LinkedIn: </li>
                    <li>Github: <a href="https://github.com/S-Mapuvire">Github.com/S-Mapuvire</a></li>
                </ul>
            </section>

            <section>
                <h3>Education History</h3>
                <h4>Midwestern State University - 2020 - B.S. Computer Science, Associates Degree</h4>
                <!-- <p>Didn't quite finish, couldn't afford the last couple of years even with less classes to try manage the costs. 
                However, ever since, I've put much effort and time into web development specifically - something of which there were no classes on offer at MSU.</p> -->
            </section>

            <section>
                <h3>Employment History</h3>
                <h4>Maotsa Farm - 2020-2022 - Various Roles</h4>
                <ul>
                    <li>Acted as a general computer systems manager doing whatever duties were needed. </li>
                    <li>I created and maintained an SQL database for the farm to track inventory grain stock, the employee register, and various other items that needed tracking.</li>
                    <li>
                    Also, I aided workers with any tech issues with their devices.
                    </li>
                </ul>
            </section>

            <section>
                <h3>Skills</h3>
                <h4>Web Development Skills</h4>
                <ul>
                    <li>Main stack - MEVN stack - this site is primarily made with Vue.js. The first version of this site did use Express, however the backend now runs on Django. So I guess the stack is now MDVN? </li>
                    <li>Database languages known: mySQL, SQLlite</li>
                    <li>CSS Frameworks known: SASS, Bulma</li>
                    <li>JavaScript Frameworks known: p5.js</li>
                </ul>
                <h4>General Programming Skills</h4>
                <ul>
                    <li>Godot/GScript</li>
                    <li>Win32/PyWin</li>
                    <li>QT/PyQT</li>
                    <li>Python - Scraping via Beautiful Soup or Selenium, Data Processing through Pandas or NumPy, General Coding and Scripting</li>
                    <li>R Programming Language</li>
                </ul>
                <h4>Creative Skills</h4>
                <ul>
                    <li>Photography - <a href="images/photos/swing.jpg">This piece</a> was featured in an exhibition in a Glasgow gallery - more examples on the photos page or my Flickr</li>
                    <li>Writing</li>
                    <li>Digital drawing and modelling using vector programs such as InkScape, image editing programs such as Gimp and 3d modelling programs such as Blender - more examples on the drawings page</li>
                </ul>

            </section>
            <section>
                <h3>Long-term hopes</h3>
                <p>TO BE FILLED</p>
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

const mainHeader = "A resume...of sorts.";
const subHeader = "Filled with plenty of links!";

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