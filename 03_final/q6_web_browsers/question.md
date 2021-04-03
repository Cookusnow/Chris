### Question A (30% credit): 

Does the HTML below trigger a HTTP GET request for the picture file, when the page first loads?  

Hint: you may put it in a sample page, load it and check out the network tab in the Devtools.

Case 1:
    `<img src="dog.jpg" style="visibility: hidden" alt="my dog">`

Case 2:
    `<img src="dog.jpg" style="display:none" alt="my dog">`


## Question B (30% credit)

1. What are `data-` attributes good for? (100 words max)

2. Describe the differences between a cookie, sessionStorage and localStorage and when would you use each of them. Please make it your answer, and not a copy and paste from somwhere (150 words max)

### Answer:

\A: Neither case triggers a GET request

B: 
    1. They can store custom data to the webpage or application, and is entirely private to each. Javascript can also use the data to give more variety in user experience
    2. Local Storage stores data infinitely, Session Storage stores it until the webpage is closed, Cookies are completely variable. 
       Use Cookies when you want to read user data from the server, use Local when you want to keep data for an extended period of time, and use Session when
        you want to have data (like private information) for a short period of time.

