window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
window.onscroll = function() {
    scrollFunc();
};
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav" || x.className === "topnav sticky") {
    x.className += " responsive";
    } else {
    x.className = "topnav sticky";
    }
}
var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;
function scrollFunc() {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
     console.log(navbar.classList);
     document.querySelector('.topnav').style.setProperty('background-color', 'white');
  } else {
    navbar.classList.remove("sticky");
    document.querySelector('.topnav').style.setProperty('background-color', 'rgba(0, 0, 0, 0)');
  }
}

document.querySelector('p').onclick = function(){
  window.location.href='index.html';
  // window.scrollTo(0, 0);
}