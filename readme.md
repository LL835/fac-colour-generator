# fac-colour-generator
## About
A random colour palette generator. Users can hit the spacebar or click the [SPACE] button to generate a new five-colour palette.

## Planning

The key features I wanted to include in the final product were:
* Users can press a key to generate a random palette.
* Users can copy the hex code and/or rgb value of a colour.
* Users can lock a colour to stop that colour from changing.
* The page can handle different screen sizes.
* The page looks nice.
* Tooltips appear when users click a button.

(See also the [wireframe](https://wireframe.cc/1GPrVs).)

Research topics included:

* **HEX and RBG values.**  How is a colour made in programming? What do the values in a HEX/RGB code mean? How can you convert one to the other? 
* **Random function.** How do you create a random colour in JS?
* **Tooltip**. How are tooltips made?

## Building
The layout of the page was built first with HTML and CSS, sticking as closely to the wireframe as possible. However, I thought that the wireframe's design left too much empty space so I made the palette stretch to fill the whole screen. Once I was happy with the basic design, I added some media queries to adjust the page's layout for smaller screens.

I then moved on to the javascript portion, starting with the functions to generate random colours, and then moving on the functions to copy a hex code and lock a colour in place.

## Challenges
### Functions returning "undefined"
For example, when clicking the copy HEX button, the button would copy "undefined" to the user's clipboard. Used "console.log()" and realised that the code should have read "parentElement.parentElement.parentElement" instead of "parentElement.parentElement" as the event fired on the icon inside the button rather than on the button itself.

### Button focus
When pressing the spacebar, the last clicked button would activate instead. Fixed by adding "blur()".
### Tooltips
Initially, when users clicked a button, the tooltip would show and stay there permanently. Fixed this by using "setInterval()" to remove the tooltip elements after a set period.

## Attribution
The padlock icons and the copy icon are by [Icons8](https://icons8.com/)


