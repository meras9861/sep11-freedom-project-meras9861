alert("Welcome to my mini-game! The purpose of this game is to test your knowledge on the content that you have learned in a particular subject this year. What better subject to test your knowledge on than SEP!? So, in this game, you will be tested on what you have been taught in your SEP classes to see how much you have learned or how much more review you may need.");

document.querySelector('#content3').innerHTML += prompt("Please type in your name below. Then, click on the directions after pressing 'OK.'");

document.querySelector("button").addEventListener("click",function(event){
    document.querySelector("button").innerHTML = "Directions: First, you will pick what year of SEP you would like to test your knowledge on by using the drop-down list below on the left. The years include SEP9 (based on Scratch), SEP10 (based on HTML/CSS), and SEP11 (based on JavaScript). Then, you will answer ten ture or false questions about the content from the year you chose (make sure that you write your answers down for every question to check if they were correct at the end!). Lastly, you will fill in the sentence below by answering two questions at the end of the game. Refresh your page if you would like to play the game with another SEP year. Have fun!  (SOFTWARE ENGINEERING IS OUT OF THIS WORLD ;))";
});

document.querySelector("#years").addEventListener("change",function(event){
    if(event.target.value == "SEP9"){
    alert("The next ten questions will focus on Scratch content. Make sure to stay until the end to see if you got the correct answers!");
    prompt("True OR False: All Scratch programs contain sprites and scripts.");
    prompt("True OR False: In Scratch, a character or object is called a 'Sprite.'");
    prompt("True OR False: An algorithm is a list of numbers going in a pattern.");
    prompt("True OR False: The green flag symbol on the top of your Scratch program stops the program.");
    prompt("True OR False: A 'Script' is another name for a character on Scratch.");
    prompt("True OR False: Scratch is a programming language.");
    prompt("True OR False: Scratch was released in 2010.");
    prompt("True OR False: Bill Gates invented Scratch.");
    prompt("True OR False: The animal that serves as the overall sprite/character for Scratch is a cat.");
    prompt("True OR False: In Scratch, coordinates allow the user to move sprites/characters around the screen.");
    alert("Here are the correct answers for the ten questions in the order that you answered them in, as well as the correct statements for the questions that were false: 1)True   2)True   3)False; An algorithm is a set of instructions   4)False; The green flag symbol on the top of your Scratch program starts the program   5)False; A 'Script' is the instructions for a sprite   6)True   7)False; Scratch was released in 2007   8)False; Mitch Resnik invented Scratch   9)True   10)True");
    document.querySelector('#content1').innerHTML += prompt("How many questions did you answer correctly? Please type the number only.");
        document.querySelector('#content2').innerHTML += prompt("What is 1 thing you learned from the SEP content or about yourself as an SEP student? Please start your response with 'I learned'");
    } else if(event.target.value == "SEP10"){
    alert("The next ten questions will focus on HTML/CSS content. Make sure to stay until the end to see if you got the correct answers!");
    prompt("True OR False: HTML stands for 'Hypertext Markup Language.'");
    prompt("True OR False: CSS stands for 'Coding Style Strategies.'");
    prompt("True OR False: All HTML tags must contain a closing tag.");
    prompt("True OR False: The CSS selector '*' allows the user to get a hold of every element in a web page.");
    prompt("True OR False: A <br> tag is used to separate lines of text.");
    prompt("True OR False: 'display: none' allows the user to only remove part of an element.");
    prompt("True OR False: 'text-align' can be used to move a line of text to the left, right, or center of the screen.");
    prompt("True OR False: In HTML, an <i> tag can be used to italicize text.");
    prompt("True OR False: CSS can be implemented with internal, external, and inline styles.");
    prompt("True OR False: In HTML, '<a href>' creates an image.");
    alert("Here are the correct answers for the ten questions in the order that you answered them in, as well as the correct statements for the questions that were false: 1)True   2)False; CSS stands for 'Cascading Style Sheets'   3)False; Most HTML tags must contain a closing tag   4)True   5)False; A <br> tag is used to bold lines of text   6)False; 'display: none' allows the user to remove an entire element   7)True   8)True   9)True   10)False; In HTML, '<a href>' links the page to another URL/website");
    document.querySelector('#content1').innerHTML += prompt("How many questions did you answer correctly? Please type the number only.");
        document.querySelector('#content2').innerHTML += prompt("What is 1 thing you learned from the SEP content or about yourself as an SEP student? Please start your response with 'I learned'");
    } else if(event.target.value == "SEP11"){
    alert("The next ten questions will focus on JavaScript content. Make sure to stay until the end to see if you got the correct answers!");
    prompt("True OR False: 'prompt()' is used as a way to ask for some type of user input.");
    prompt("True OR False: The 'delete()' method is used to remove the first element from an array.");
    prompt("True OR False: One can start writing their JavaScript code under the <javascript> tag in their IDE.");
    prompt("True OR False: JavaScript is usually abbreviated as 'JS.'");
    prompt("True OR False: The '.addEventListener()' method puts an event handler to an element/elements of ones choice.");
    prompt("True OR False: The first element of an array is counted as zero.");
    prompt("True OR False: A 'for loop' can only run the same code once.");
    prompt("True OR False: 'i++' is used to increase a number or value by two.");
    prompt("True OR False: JavaScript strings can be used for both storing and manipulating text.");
    prompt("True OR False: An array can stand and function correctly on its own.");
    alert("Here are the correct answers for the ten questions in the order that you answered them in, as well as the correct statements for the questions that were false: 1)True   2)False; The 'shift()' method is used to remove the first element from an array   3)False; One can start writing their JavaScript code under the <script> tag in their IDE   4)True   5)True   6)True   7)False; A 'for loop' can run the same code over and over again   8)False; 'i++' is used to increase a number or value by one   9)True   10)False; An array needs to be connected to a single variable to function correctly");
    document.querySelector('#content1').innerHTML += prompt("How many questions did you answer correctly? Please type the number only.");
        document.querySelector('#content2').innerHTML += prompt("What is 1 thing you learned from the SEP content or about yourself as an SEP student? Please start your response with 'I learned'");
    }});