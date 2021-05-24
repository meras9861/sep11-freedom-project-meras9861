document.querySelector("button").addEventListener("click",function(event){
    document.querySelector("button").innerHTML = "Directions: First, you will pick what year of SEP you would like to test your knowledge on. The years include SEP9 (based on Scratch), SEP10 (based on HTML/CSS), and SEP11 (based on JavaScript). Then, you will answer ten ture or false questions about the content from the year you choose. Make sure that you write your answers down for every question to check if they were correct at the end. Have fun!";
});

document.querySelector("#years").addEventListener("change",function(event){
    if(event.target.value == "SEP9"){
        alert("The next ten questions will focus on Scratch content. Make sure to stay until the end to see if you got the correct answers!");
        prompt("True of false: All scratch programs contain sprites and scripts.");
        prompt("True of false: In scratch, a character or object is called a 'Sprite.'");
        prompt("True of false: An algorithm is a list of numbers going in a pattern.");
        prompt("True of false: The green flag symbol on the top of your scratch program stops the program.");
        prompt("True of false: A 'Script' is another name for a character on scratch.");
        prompt("True of false: Scratch is a programming language.");
        prompt("True of false: Scratch was released in 2010.");
        prompt("True of false: Bill Gates invented Scratch.");
        prompt("True of false: The animal that serves as the overall sprite/character for Scratch is a cat.");
        prompt("True of false: In scratch, coordinates allow the user to move sprites/characters around the screen.");
    } else if(event.target.value == "SEP10"){
    alert("The next ten questions will focus on HTML/CSS content. Make sure to stay until the end to see if you got the correct answers!");
    prompt("True of false: HTML stands for 'Hypertext Markup Language.'");
    prompt("True of false: CSS stands for 'Coding Style Strategies.'");
    prompt("True of false: All HTML tags must contain a closing tag.");
    prompt("True of false: The CSS selector '*' allows the user to get a hold of every element in a web page.");
    prompt("True of false: A <br> tag is used to separate lines of text.");
    prompt("True of false: 'display: none' allows the user to only remove part of an element.");
    prompt("True of false: 'text-align' can be used to move a line of text to the left, right, and center of the screen.");
    prompt("True of false: In HTML, an <i> tag can be used to italicize text.");
    prompt("True of false: CSS can be implemented with internal, external, and inline styles.");
    prompt("True of false: In HTML, '<a href>' creates an image.");
    } else if(event.target.value == "SEP11"){
    alert("The next ten questions will focus on JavaScript content. Make sure to stay until the end to see if you got the correct answers!");
    prompt("True of false: 'prompt()' is used as a way to ask for some type of user input.");
    prompt("True of false: The 'delete()' method is used to remove the first element from an array.");
    prompt("True of false: One can start writing their JavaScript code under the <javascript> tag in their IDE.");
    prompt("True of false: JavaScript is usually abbreviated as JS.");
    prompt("True of false: The .addEventListener() method puts an event handler to an element/elements of ones choice.");
    prompt("True of false: The first element of an array is counted as zero.");
    prompt("True of false: A 'for loop' can only run the same code once.");
    prompt("True of false: 'i++' is used to increase a number or value by two.");
    prompt("True of false: JavaScript strings can be used for both storing and manipulating text.");
    prompt("True of false: An array can stand and function correctly on its own.");
    }});