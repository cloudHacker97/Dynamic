## LANDING PAGE

# requirements

1- dynamic and responsive nav bar
2- make the section in the view port active
3- the scrolling behavior must me smooth

# FUNCTIONS

in the first i tried to make at as an html and css just to see the steps then i turned it into dynamical nav-bar using JavaScript

in the first function [creatMagicNav ()] looping over the sections in the array and in each section i get the #id of it and for each section it makes an [li] and append it to the [ul]

after that i use the inner html method i use th[a] attribute and giving the href for the each section by the looping.

i have made an array of the a inside the li
then i make a for each to get each a alone
first i prevent the default then targeting the href value in a var.
selecting each section
adding scrollIntoView method to each section with behavior

then the [scroll] function making the boundaries for each section by making a forEach
loop and the using the [getBoundingClientRect()] for top and bottom then
making an if condition to add or remove the class='active' if the section is in the
viewport

then i have the function list function and what it make is that by making an if condition the display basically toggle from none to block
then add it to an event listener that works on click on the icon

# sources

these are some sources that helped me finish the landing page
1-scrollIntoView
https://www.w3schools.com/jsref/met_element_scrollintoview.asp

2-target an href
https://www.w3schools.com/jsref/event_target.asp

3-get bounding client rect
https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp

4-nav bar
https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
