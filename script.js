const dynamicGreetText = document.querySelector("h1 span");
const dynamicTileText = document.querySelector(".top h2 span");
const greeting = "Hi, I'm KEN!";
const title = "Software Developer";

// Variables to track the position and deletion status of the word
let charIndex = 0;

function typeEffect(text, targetText){
    const currentChar = text.substring(0, charIndex);
    targetText.textContent = currentChar;

    if (charIndex < text.length) {
        charIndex++;
        if(text[charIndex - 2] == " "){
            setTimeout(function (){typeEffect(text, targetText)}, 600);
        }else{
            setTimeout(function (){typeEffect(text, targetText)}, 100);
        }
    }else{
        charIndex = 0;
        targetText.classList.add("stop-blinking");
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