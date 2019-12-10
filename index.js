var toggle = false;
function openTab(){
  if(toggle == false){
    document.getElementById("aboutMe").style.display = "block";
    toggle = true;
  } else if (toggle == true){
    document.getElementById("aboutMe").style.display = "none";
    toggle = false;
  }
}