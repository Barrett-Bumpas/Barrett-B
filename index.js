window.onscroll = function() {scrollFunction()};

var menu = document.getElementById("myMenu");
var sticky = menu.offsetTop;

function scrollFunction(){
  if(window.pageYOffset > sticky){
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}


var button = document.getElementsByTagName("button");
function changeWindow(){

}