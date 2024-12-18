const dynamicGreetText = document.querySelector("h1 span");
const dynamicTileText = document.querySelector(".top h2 span");
const greeting = "Hi, I'm KEN!";
const title = "Software Developer";

// A variable to track the position of the word
let charIndex = 0;

// Add an effect on a sentence.
// Parameter: a sentence and a target element to display the sentence
function typeEffect(text, targetText){
    const currentChar = text.substring(0, charIndex);
    targetText.textContent = currentChar;

    if (charIndex < text.length) {
        charIndex++;
        // Take a longer timeout when encountering a space
        if(text[charIndex - 2] == " "){
            setTimeout(function (){typeEffect(text, targetText)}, 200);
        }else{
            setTimeout(function (){typeEffect(text, targetText)}, 50);
        }
    }else{
        charIndex = 0;
        targetText.classList.add("stop-blinking");
        // Apply this animation to the title text as well
        if(text == greeting){
            dynamicTileText.classList.add("start-blinking");
            setTimeout(function (){typeEffect(title, dynamicTileText)}, 600);
        }
    }
}

// Execute the function when it's loaded
typeEffect(greeting, dynamicGreetText);


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }