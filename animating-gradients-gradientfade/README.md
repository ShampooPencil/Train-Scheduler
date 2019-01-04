# gradientFade
Since at the moment it is near impossible to have animated fading gradients as a background with pure css, I needed to built a nice lightweight plugin to do it with jQuery.

## Setting Up
First, we need to link the css to the page we need to use, (put this within the `<head>` tags):  
```<link rel="stylesheet" href="/path/to/gradientFade.css">```

Then, we need to reference the JavaScript, (put this before the end of the `<body>` tags):  
```<script src="/path/to/gradientFade.js" charset="utf-8"></script>```

**Important: make sure you've referenced jQuery before you reference gradientFade**
## Getting Started
Get the `<div>` you want to use and give it some children:  
```
<div class="xyz">
    <div style="background: linear-gradient(to right, #ee9ca7, #ffdde1)" class="gradient active"></div>
    <div style="background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)" class="gradient"></div>
    <div style="background: linear-gradient(to right, #ee9ca7, #8a8a8a)" class="gradient"></div>
    <div style="background: linear-gradient(to right, #34f351, #ffdde1)" class="gradient"></div>
    <div style="background: linear-gradient(to right, #007991, #78ffd6);" class="gradient"></div>
</div>
```
**Important: make sure that every child element you want to use as a gradient has the gradient class and that the one you want to start with has the active class**

Finally, simply write this within `<script>` tags:  
```gradientFade(<Transition time in ms>);```
