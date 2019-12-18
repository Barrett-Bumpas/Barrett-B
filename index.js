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




function openTab(evt, tabName){
  var i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++){
    tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tabLinks");
  for (i = 0; i < tabLinks.length; i++){
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

var name = "BNB_USDT";
var url = "http://anyorigin.com/go?url=" + encodeURIComponent('https://www.binance.com/en/trade/') 
+ name + "&callback=?";
$.get(url, function(response){
  console.log(response);
});