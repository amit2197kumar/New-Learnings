
# HTML & CSS Basics

**[See Original Post On Notion For Better Readability](https://cream-forsythia-066.notion.site/HTML-CSS-fa623daf0c2a422fa2cc0976ff3068cf)**

# DAY-1: HTML Basics

## HTML page: index.html

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            Learning World!
        </title>
    </head>
    <body>
        <h1>DAY 1</h1>
        <h2>HTML too BASICs</h2>

        <div>
            <p>Hello World!!</p>
            <strong> Ninja!</strong>
            <p>My first web page!</p>
            <em>Italic</em>
            <small>small</small>
            <h2>Heading 2</h2>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <a href="https://www.amazon.in/dp/B08ZMVPYH6/"> Vivo Y73 </a>
        </div>

        <div>
            <ul>
                <li>first</li>
                <li>second</li>
                <li>third</li>
            </ul>
        </div>
        <div>
            <ol>
                <li>first</li>
                <li>second</li>
                <li>third</li>
            </ol>
        </div>

        <img src="RED.png" alt="a picture of Hero">
        <br>
        <span>I am span tag</span>

        <blockquote cite="http://www.facbook.com/amit2197kumar">
            We are all here alone!
        </blockquote>

        <p style="color: blueviolet;"> Style Me!</p>

    </body>
</html>
```

## Page on browser

![](/Images/DAY1-1.png)

# DAY-2: HTML Forms

## HTML page with forms: index.html

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            Learning World!
        </title>
    </head>
    <body>
        <h1>DAY 2</h1>
        <h2>HTML Forms</h2>

        <form action="">
            <label for="username">Enter Username: </label>
            <input type="text" id="username" name="username" placeholder="name ..." required>
            <br><br>
            <label for="email">Enter Email-id</label>
            <input type="email" id="email" name="email" placeholder="email ...">
            <br><br>
            <label for="password">Enter password</label>
            <input type="password" id="password" name="password" placeholder="password ..." required>
            

            <p>Note 1: "id" been used to be used in label tag</p>
            <p>Note 2: "type" been used to do some validatation, like in email & password</p>
            <p>Note 3: "name" been used to for backend, its optional, but good to have, see a good example below</p>

            <h3>Select Gender</h3>
        
            <input id="option-1" type="radio" name="gender" value="male">Male <br>
            <input id="option-2" type="radio" name="gender" value="female">Female <br>
            <input id="option-3" type="radio" name="gender" value="other">Other <br>
        

            <p>Note 4: Here we see as name is same for all 3 option, so one can select just one option</p>
            <p>Note 5: "value" is been used as this time user is not inputting anything in form, so form will return value in backend</p>

            <h3>Select Age</h3>
        
            <input type="radio" name="age" value="0-25" id="option-1">
            <label for="option-1">0-25</label>
            <input type="radio" name="age" value="25-60" id="option-2">
            <label for="option-2">25-60</label>
            <input type="radio" name="age" value="60+" id="option-3">
            <label for="option-3">60+</label>
        

            <h3>Security Q</h3>

        
            <label for="questions">Security Question:</label>
            <select name="questions" id="questions">
                <option value="q1">Which is your mom's middle name?</option>
                <option value="q2">What's name of your 1st School?</option>
                <option value="q3">Are you a veg or non-veg?</option>
            </select>
            <br><br>

            <label for="answer">Security Q ans:</label>
            <input type="answer" id="answer" name="answer" placeholder="Ans...">
        

            <br><br>
        
            <label for="bio">Your Bio:</label><br>
            <textarea name="bio" id="bio" cols="30" rows="10" placeholder="About you ...."></textarea>

            <br><br>
            <input type="submit" value="Submit your form">
        </form>

    </body>
</html>
```

## Page on browser

![](/Images/DAY2-1.png)

# DAY-3: CSS Basics

## HTML page: index.html

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
        <title>DAY 3</title>
    </head>
    <body>
        <h2>CSS BASIC</h2>
        <p>
            Processor: 5G enabled Qualcomm Snapdragon 778G with Kryo 670 Octa-core; 6nm process; Up to 2.4GHz clock speed; 
            Liquidcool technology, Support for 12 5G bands
            Camera: 64 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera
            Display: 90Hz high refresh rate, 10-bit FHD+ OLED Dot display; 16.6 centimeters (6.55 inch); Dolby Vision support
        </p>
        <div>
            <h3>
                Xiaomi 11 Lite NE 5G
            </h3>
            <p>
                Elegant design that is just 6.81mm slim and 158gms light, makes it a thing of art to flaunt.
                Memory, Storage & SIM: 6GB LPDDR4X RAM | 128GB UFS 2.2 storage
                Alexa Hands-Free capable: Download the Alexa app on to use Alexa hands-free. 
                Play music, make calls, hear news, open apps, navigate, and more, using just your voice, while on-the-go. 
                Just ask and Alexa will respond instantly.
            </p>
            <ul>
                <li>Buy it with exchange offer</li>
                <li>Buy it without exchange</li>
                <li>Don't buy bro</li>
            </ul>
        </div>
    </body>
</html>
```

## CSS Style code: style.css

```css
h2 {
    color: aquamarine;
    background-color: black;
    font-size: 40px;
    text-decoration: underline;
    text-align: center;
}
p {
    color: darkred;
    background-color: burlywood;
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    line-height: 40px;
    columns: 3;
}

h3 {
    color: chartreuse;
    font-size: 35px;
}

ul {
    border-width: 5px;
    border-style: double;
    border-color: rgb(255, 0, 0);
}
li {
    list-style-type: square;
    text-shadow: 2px 2px lightskyblue;
}
```

## Page on browser:

![](/Images/DAY3-1.png)

## Inline vs Block level elements

### HTML page: with Inline & Block level elements

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
        <title>Day 3</title>
    </head>
    <body>
        <h2>Inline Elements</h2>

        <span>span Tag</span>
        <em>em Tag</em>
        <a href="">anchor Tag</a>
        <span>span Tag</span>

        <h2>Block Level Elements</h2>

        <div>div Tag</div>
        <div>another div Tag</div>
        <h4>h4 Tag</h4>
        <p>paragraph Tag</p>
        <ul>
            <li>li Tag</li>
            <li>li Tag</li>
            <li>li Tag</li>
        </ul>
    </body>
</html>
```

Inline level elements looks like this:

![](/Images/DAY3-2.png)

Block level elements looks like this:

![](/Images/DAY3-3.png)

### CSS Styling to swap Inline & Block level elements

```css
span {
    display: block;
}
div {
    display: inline;
}
```

Inline level span converted to a block level element:

![](/Images/DAY3-4.png)

Block level div converted to a Inline level element:

![](/Images/DAY3-5.png)

## Marging & Padding

### CSS Styling for Inline & Block level elements

```css
span {
    border: 2px solid crimson;
    margin: 20px;
    padding: 20px;
}
div {
    border: 2px solid crimson;
    margin: 20px;
    padding: 20px;
}
```

### HTML page on browser

![](/Images/DAY3-6.png)

### Marging & Padding for Inline level element

![](/Images/DAY3-7.png)

### Marging & Padding for Block level element

![](/Images/DAY3-8.png)

## Mearge both: Inline & Block

### CSS Styling file that makes span as inline-block

```css
span {
    display: inline-block;
    border: 2px solid crimson;
    margin: 20px;
    padding: 20px;
}
div {
    border: 2px solid crimson;
    margin: 20px;
    padding: 20px;
}
```

### HTML page with span as inline-block

![](/Images/DAY3-9.png)

# DAY 4: Classes, Slectors & the Cascade

## Classes

### HTML page with classes

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
        <title>DAY-4</title>
    </head>
    <body>
        <div>
            <p>
                The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
                Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?" 
                There have been many proposed answers to these questions from many different cultural and ideological backgrounds. 
                The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. 
                Different people and cultures believe different things for the answer to this question.
            </p>
            <p class="demoClass1">
                The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
                Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?" 
                There have been many proposed answers to these questions from many different cultural and ideological backgrounds. 
                The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. 
                Different people and cultures believe different things for the answer to this question.            </p>
            <p class="demoClass2">
                The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
                Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?" 
                There have been many proposed answers to these questions from many different cultural and ideological backgrounds. 
                The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. 
                Different people and cultures believe different things for the answer to this question.            </p>
            <p class="demoClass2 demoClass3">
                The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
                Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?" 
                There have been many proposed answers to these questions from many different cultural and ideological backgrounds. 
                The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. 
                Different people and cultures believe different things for the answer to this question.            </p>
        </div>

        <div class="demoClass1">
            The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
            Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?"         
        </div>
    </body>
</html>
```

### CSS styling on the classes mentioned in HTML file

```css
.demoClass1 {
    color: brown;
}

p.demoClass1 {
    background-color: rgb(143, 160, 95);
}

p.demoClass2 {
    background-color: deepskyblue;
}

p.demoClass2.demoClass3 {
    border: 5px dashed purple;
}
```

### HTML page on browser

![](/Images/DAY4-1.png)

## Slectors (Descendant selectors)

### HTML page

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
        <title>DAY-4</title>
    </head>
    <body>
        <div>
            <p>
                The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
                Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?" 
                There have been many proposed answers to these questions from many different cultural and ideological backgrounds. 
                The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. 
                Different people and cultures believe different things for the answer to this question.
            </p>
            <p class="demoClass1">
                The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
                Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?" 
                There have been many proposed answers to these questions from many different cultural and ideological backgrounds. 
                The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. 
                Different people and cultures believe different things for the answer to this question.            
            </p>
            <p>
                The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
                Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?" 
                There have been many proposed answers to these questions from many different cultural and ideological backgrounds. 
                The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. 
                Different people and cultures believe different things for the answer to this question.
            </p>
        </div>

        <p>
            The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
            Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?" 
            There have been many proposed answers to these questions from many different cultural and ideological backgrounds. 
            The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. 
        </p>

        <div class="demoClass1">
            The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
            Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?"         
        </div>

        <br>
        <a href="https://www.facebook.com/amit2197kumar/">Facebook Profile</a>
        <br><br>
        <a href="https://www.instagram.com/_a.m.i.t.k.u.m.a.r_/">Instagram Profile</a>
        <br><br>
        <a href="https://www.linkedin.com/in/amit2197kumar/">Linkedin Profile</a>
        
    </body>
</html>
```

### CSS styling for Descendant selectors

```css
div p {  
    color: purple;
}

div p.demoClass1 {
    color: green;
}

a[href] {
    background-color: greenyellow;
}

a[href="https://www.facebook.com/amit2197kumar/"] {
    color: hotpink;
    font-weight: bold;
    text-transform: uppercase;
}

a[href*="linkedin"] {
    border: 3px solid blue;
}
```

### HTML page on browser

![](/Images/DAY4-2.png)

## The Cascade

Inheritance: HTML elements can inherit CSS properties that are applied to their parents.

### HTML page

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
        <title>DAY-4</title>
    </head>
    <body>
        <div>
            <p>
                The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
                Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?" 
                There have been many proposed answers to these questions from many different cultural and ideological backgrounds. 
                The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. 
                Different people and cultures believe different things for the answer to this question.
            </p>
            <p class="demoClass1">
                The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
                Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?" 
                There have been many proposed answers to these questions from many different cultural and ideological backgrounds. 
                The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. 
                Different people and cultures believe different things for the answer to this question.            
            </p>
            <p>
                The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
                Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?" 
                There have been many proposed answers to these questions from many different cultural and ideological backgrounds. 
                The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. 
                Different people and cultures believe different things for the answer to this question.
            </p>
        </div>

        <p>
            The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
            Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?" 
            There have been many proposed answers to these questions from many different cultural and ideological backgrounds. 
            The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. 
        </p>

        <div class="demoClass1">
            The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. 
            Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?"         
        </div>
    </body>
</html>
```

### CSS styling on Inheritance

```css
div {
    /* <p> Inherits these */
    color: lightpink;
    font-weight: bold;

    /* <p> Don't Inherits these */
    border: 5px solid darkred;
    margin: 40px;
}
```

### HTML page on browser

![](/Images/DAY4-3.png)

### CSS styling: updated

```css
div {
    /* <p> Inherits these */
    color: lightpink;
    font-weight: bold;

    /* <p> Don't Inherits these */
    border: 5px solid darkred;
    margin: 40px;
}

p {
    border: inherit;
    margin: inherit;
    color: darkorange;
}
```

### HTML page on browser

![](/Images/DAY4-4.png)

See more about CSS Cascade here: [Introducing the CSS Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)

# DAY 5: HTML5 Semantic Elements

<main> : For thr mai content of a webpage, unique to that page

<section> : Defines a certain section of a webpage (e.g. blog list, contact info)

<article> : Defines a bit of content which makes up an article (e.g. a blog post)

<aside> : Defines some content related to something else (e.g. similar blogs)

<header> : For the header of a webpage - contains the nav, title etc

<footer> : For the footer of a website (e.g. contact, copyright info)

## HTML life with Semantic Elements

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
        <title>DAY-5</title>
    </head>
    <body>

        <header>
            <h1>MarioClub</h1>
        </header>
        <section class="banner">
            <img src="img/banner.png" alt="MarioClub Welcome Banner">
            <div class="welcom">
                <h2>Welcome to <br><span>MarioClub</span></h2>
            </div>
        </section>

        <nav class="main-nav">
            <ul>
                <li><a href="/join.html" class="join">Join the club</a></li>
                <li><a href="/news.html">Latest News</a></li>
                <li><a href="/games.html">New Games</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
        </nav>

        <main>
            <article>
                <h2>It's me! Mario.</h2>
                <p>
                    Mario[e] is a fictional character created by Japanese video game designer Shigeru Miyamoto. 
                    He is the title character of the Mario video game franchise and the mascot of Japanese video game company Nintendo. 
                    Mario has appeared in over 200 video games since his creation. 
                    Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. 
                    Mario has access to a variety of power-ups that give him different abilities. Mario's fraternal twin brother is Luigi. 
                </p>
            </article>
            <ul class="images">
                <li><img src="img/thumb-1.png" alt="mario thumb 1"></li>
                <li><img src="img/thumb-2.png" alt="mario thumb 2"></li>
            </ul>
        </main>

        <section class="join">
            <h2>Join today</h2>
            <p>
                Mario first appeared as the player character of Donkey Kong (1981), a platform game. Miyamoto wanted to use Popeye as the protagonist, but when he could not achieve the licensing rights, he created Mario instead. Miyamoto expected the character to be unpopular and planned to use him for cameo appearances; originally called "Mr. Video", he was renamed to Mario after Mario Segale.
            </p>
            <form>
                <input type="email" name="email" placeholder="Type email & hit enter" required>
            </form>
        </section>

        <footer>
            <p class="copyright"> Copyright 2019 MarioClub</p>
        </footer>
        
    </body>
</html>
```

CSS we will do in further chapters 

## HTML page on browser
  
![](/Images/DAY5-1.png)

# DAY-6: Chrome Dev Tools

Have a look at [Chrome Dev Tools](https://youtu.be/25R1Jl5P7Mw?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)

# DAY-7: CSS Layout & Position

Position: Static, Relative, Fixed, Absolute and Sticky

## CSS with Layout & Position

```css
body, ul, li, h1, h2, a{
    margin: 0;
    padding: 0;
    font-family: Arial;
}

header {
    background-color: #F63232;
    padding: 20px;
    text-align: center;
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
    left: 0;
}

header h1 {
    color: white;
    border: 8px solid white;
    padding: 6px 12px;
    display: inline-block;
    border-radius: 36px;
}

.banner {
    position: relative;
}

.banner img {
    max-width: 100%;
}

.banner .welcome {
    background-color: #FEB614;
    color: white;
    padding: 30px;
    position: absolute;
    left: 0;
    top: 30%;
}

.banner h2 {
    font-size: 74px;
}

.banner h2 span {
    font-size: 1.3em;
}

nav {
    background-color: #F4F4F4;
    padding: 20px;
    position: sticky;
    top: 105px;
}

nav ul {
    white-space: nowrap;
    max-width: 1200px;
    margin: 0 auto;
}

nav li {
    width: 25%;
    display: inline-block;
    font-size: 24px;
}

nav li a {
    text-decoration: none;
    color: #4B4B4B;
}

nav li a.join {
    color: #F63232;
}

main {
    max-width: 100%;
    width: 1200px;
    margin: 80px auto;
    padding: 0 40px;
    box-sizing: border-box;
}

article h2 {
    color: #F63232;
    font-size: 45px;
}

article p {
    line-height: 2em;
    color: #4B4B4B;
}

.images {
    text-align: center;
    margin: 80px 0;
    white-space: nowrap;
}

.images li {
    display: inline-block;
    width: 40%;
    margin: 20px 5%;
}

.images li img {
    max-width: 100%;
}

section.join {
    background: #F4F4F4;
    text-align: center;
    padding: 60px 20px;
    color: #4B4B4B;
}

.join h2 {
    font-size: 36px;
}

form input {
    margin: 20px 0;
    padding: 10px 20px;
    font-size: 24px;
    border-radius: 28px;
    border: 4px solid white;
}

footer {
    background: #F63232;
    color: white;
    padding:  10px;
    text-align: center;
}
```

## HTML page on browser
  
![](/Images/Day7-1.png)

# DAY-8: Pseudo Classes & Elements

## Pseudo Classes

- Style elements when they are in a particular state
- Hover, focus, first child of a parent
- :hover :focus :first-child

### CSS Style with Pseudo Classes (look in the end)

```css
<--------- REST CSS WILL COME AS IT IS FROM DAY-7 -------->

/* Pseudo Classes */

nav li a:hover {
    text-decoration: underline;
    background: lightgreen;
}

.images li:hover {
    position: relative;
    top: -4px;
}

form input:focus {
    border: 4px dashed #4B4B4B;
    outline: none;
}

form input:valid{
    border: 4px solid #71D300;
}
```

### HTML page on browser

- When we hover over the image, it goes 4px up
- When we hover over the nav bar the background color will change
- When we select email box to write the email it comes in focus
- When we enter a valid email, the email box border become Green
  
![](/Images/DAY8-1.png)

## Pseudo Elements

See here: [https://www.w3schools.com/css/css_pseudo_elements.asp](https://www.w3schools.com/css/css_pseudo_elements.asp)

### CSS Style with Pseudo Classes (look in the end)

```css
<--------- REST CSS WILL COME AS IT IS FROM DAY-7 -------->

/* Pseudo Classes */

nav li a:hover {
    text-decoration: underline;
    background: lightgreen;
}

.images li:hover {
    position: relative;
    top: -4px;
}

form input:focus {
    border: 4px dashed #4B4B4B;
    outline: none;
}

form input:valid{
    border: 4px solid #71D300;
}

/* Pseudo Elements */

article p::first-line {
    font-weight: bold;
    font-size: 1.2em;
}

section.join p::first-letter {
    font-size: 1.5em;
}

p::selection {
    background: #F63232;
    color: white;
}

p::after {
    content: '...';
}
```

### HTML page on browser

- First line on paragraph is bold and font-size has increased
- First letter of email-box message is in greater font size
- When we select text from paragraph then background colour will become RED and text color will be in WHITE
- The last line of paragraph is now having '...'

![](/Images/DAY8-2.png)
 
# Reference

1. [HTML & CSS Crash Course Tutorial #1 - Introduction](https://youtu.be/hu-q2zYwEYs?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
2. [HTML & CSS Crash Course Tutorial #2 - HTML Basics](https://youtu.be/mbeT8mpmtHA?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
3. [HTML & CSS Crash Course Tutorial #3 - HTML Forms](https://youtu.be/YwbIeMlxZAU?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
4. [HTML & CSS Crash Course Tutorial #4 - CSS Basics](https://youtu.be/D3iEE29ZXRM?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
5. [HTML & CSS Crash Course Tutorial #5 - CSS Classes & Selectors](https://youtu.be/FHZn6706e3Q?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
6. [HTML & CSS Crash Course Tutorial #6 - HTML 5 Semantics](https://youtu.be/kGW8Al_cga4?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
7. [HTML & CSS Crash Course Tutorial #7 - Chrome Dev Tools](https://youtu.be/25R1Jl5P7Mw?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
8. [HTML & CSS Crash Course Tutorial #8 - CSS Layout & Position](https://youtu.be/XQaHAAXIVg8?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
9. [HTML & CSS Crash Course Tutorial #9 - Pseudo Classes & Elements](https://youtu.be/FMu2cKWD90g?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
10. [HTML & CSS Crash Course Tutorial #10 - Intro to Media Queries](https://youtu.be/Xig7NsIE6DI?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
