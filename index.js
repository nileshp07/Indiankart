 var buttons = document.querySelectorAll(".card-btn");

 var numOfButtons = buttons.length;

 for (var i = 0; i < numOfButtons; i++) {

     buttons[i].addEventListener('click', changeText);

     function changeText(e) {
         var targetButton = e.target;
         targetButton.innerHTML = "That's All!";

         setTimeout(function() {
             targetButton.innerHTML = "View All";
         }, 3000);
     }

 }