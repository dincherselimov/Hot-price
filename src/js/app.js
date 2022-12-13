import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  
   let element  = document.getElementsByClassName('hot');

      for(let i=0; i <element.length; i++){
        element[0].innerHTML = element.innerHTML + " 🔥";
      }
});
