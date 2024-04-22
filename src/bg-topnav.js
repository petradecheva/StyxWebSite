function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav" || x.className === "topnav sticky") {
    x.className += " responsive";
    // console.log(x.className);
    // document.getElementById("start").setAttribute('margin-top', '90px');
    } else {
    x.className = "topnav sticky";
    }
}
// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }
// document.getElementById("startcan").onload = function()
// { 
    
//     document.getElementById("loading").style.display = "none";
//     // console.log(document.getElementById("myTopnav").className);
//     // console.log(window.scrollY);
// }
const p = document.querySelector(':root');
const poster = document.querySelector('model-viewer');
const nameTag = document.querySelector('#name');
function setColor() {
    p.style.setProperty('--color-bg1', 'rgb(255, 255, 255)');
}
// let nameSize = [
//     '80px',
//     '100px',
//     '140px'
// ]
// let names = [
//     'POSEIDON',
//     'ATHENA',
//     'ZEUS'
// ]

// let posters = [
//     'assets/3d-models/poseidon.webp',
//     'assets/3d-models/atina.webp',
//     'assets/3d-models/zeus.webp'
// ]

// let models = [
//     'assets/3d-models/poseidon.glb',
//     'assets/3d-models/atina.glb',
//     'assets/3d-models/zeus.glb'
    
// ];

let color1bg = [
    'rgb(23,181,248)',
    'rgb(223,31,226)', 
    'rgb(253,247,0)'
];
let color2bg = [
    'rgb(43,182,115)',
    'rgb(89,158,189)',
    'rgb(255,43,0)'
    
];

let color1 = [
    '119,236,227',
    '166,187,208',
    '255,37,155'
    
];

let color2 = [
    '20,17,99',
    '227,108,164',
    '255,94,0'
];

let color3 = [
    '162,238,222',
    '115,137,194',
    '255,181,0'
];

let color4 = [
    '198,132,229',
    '198,120,180',
    '255,169,201'
];

let color5 = [
    '147,27,228',
    '244,202,206',
    '251,241,168'
    
];
// let imageTag = document.querySelector('.imageTag');
// let i = 0;

document.getElementById("0").onmouseover = function(){
    p.style.setProperty('--color-bg1', color1bg[0]);
    p.style.setProperty('--color-bg2', color2bg[0]);
    p.style.setProperty('--color1', color1[0]);
    p.style.setProperty('--color2', color2[0]);
    p.style.setProperty('--color3', color3[0]);
    p.style.setProperty('--color4', color4[0]);
    p.style.setProperty('--color5', color5[0]);
}
document.getElementById("1").onmouseover = function(){
    p.style.setProperty('--color-bg1', color1bg[1]);
    p.style.setProperty('--color-bg2', color2bg[1]);
    p.style.setProperty('--color1', color1[1]);
    p.style.setProperty('--color2', color2[1]);
    p.style.setProperty('--color3', color3[1]);
    p.style.setProperty('--color4', color4[1]);
    p.style.setProperty('--color5', color5[1]);
}
document.getElementById("2").onmouseover = function(){
    p.style.setProperty('--color-bg1', color1bg[2]);
    p.style.setProperty('--color-bg2', color2bg[2]);
    p.style.setProperty('--color1', color1[2]);
    p.style.setProperty('--color2', color2[2]);
    p.style.setProperty('--color3', color3[2]);
    p.style.setProperty('--color4', color4[2]);
    p.style.setProperty('--color5', color5[2]);
}
// function next() {
//     if (i >= models.length - 1) {
//         i = -1;
//     }
//     i++;
//     // nameTag.style.setProperty('font-size', nameSize[i]);
//     nameTag.innerHTML = names[i];
//     poster.setAttribute('poster', posters[i]);
//     imageTag.setAttribute('src', models[i]);
//     p.style.setProperty('--color-bg1', color1bg[i]);
//     p.style.setProperty('--color-bg2', color2bg[i]);
//     p.style.setProperty('--color1', color1[i]);
//     p.style.setProperty('--color2', color2[i]);
//     p.style.setProperty('--color3', color3[i]);
//     p.style.setProperty('--color4', color4[i]);
//     p.style.setProperty('--color5', color5[i]);
// }
// function previous() {
//     if (i <= 0) {
//         i = 3;
//     }
//     i--;
//    // nameTag.style.setProperty('font-size', nameSize[i]);
//     nameTag.innerHTML = names[i];
//     poster.setAttribute('poster', posters[i]);
//     imageTag.setAttribute('src', models[i]);
//     p.style.setProperty('--color-bg1', color1bg[i]);
//     p.style.setProperty('--color-bg2', color2bg[i]);
//     p.style.setProperty('--color1', color1[i]);
//     p.style.setProperty('--color2', color2[i]);
//     p.style.setProperty('--color3', color3[i]);
//     p.style.setProperty('--color4', color4[i]);
//     p.style.setProperty('--color5', color5[i]);
// }

//When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollFunc()};

window.addEventListener('resize', function(event) {
  console.log(window.screen.width);
}, true);
// Get the navbar
var navbar = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunc() {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
    // navbar.style.setProperty('background-color', 'white');
    // console.log(navbar.className);
  } else {
    navbar.classList.remove("sticky");
  }
}

	
