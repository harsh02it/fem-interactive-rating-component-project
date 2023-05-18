# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### What I learned

**Usage of different _units of measurement_ in styling for responsive layout:**

Instead of using the fixed pixel unit in styling, I learned how to use rem, em and % units to get responsive layouts which adjusts to different screen size based on user's viewport.

**JavaScript code execution after HTML document has finished loading:**

I had trouble making my click event listener work on a submit button. It wasn't responding when I clicked the button because my script tag was placed in the header section of the HTML file. This caused my JavaScript code to run before the HTML document was fully loaded. However, I learned about the `defer` attribute. By adding the `defer` attribute to the `<script>` tag, the browser delays the execution of the script until after the HTML document has finished loading and parsing. This allowed my click event listener to work correctly.

```html
<html>
  <head>
    <script src="" defer></script>
  </head>
</html>
```

After realizing that my JavaScript code was running before the HTML document was fully loaded, I found a simple solution. I can place my `<script>` tag at the end of the body section, after all the `<div>` elements have been closed. This way, the code will still work correctly without needing to use the `defer` attribute. The JavaScript code will execute after all the HTML elements have been loaded, ensuring that my event listeners and interactions with the submit button function as intended.

```html
<html>
  <head> </head>
  <body>
    <div>.....</div>
    <script src="" defer></script>
  </body>
</html>
```
