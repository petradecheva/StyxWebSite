let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

    const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        if(products.length > 0) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                // newProduct.id = product.id;
                // console.log( ' item' + product.cl);
                // newProduct.setAttribute('id', product.id);
                newProduct.dataset.id = product.id;
                // newProduct.dataset.cl = product.cl;
                newProduct.classList.add('item', 'product');
                console.log(newProduct.classList);
                newProduct.innerHTML = 
                `<img src="${product.image}"  alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">ADD</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    }
    listProductHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if(positionClick.classList.contains('addCart')){
            let id_product = positionClick.parentElement.dataset.id;
            console.log(id_product);
            addToCart(id_product);
        }
    })
    listProductHTML.addEventListener('mouseover', (event) => {
        let positionClick = event.target;
        const p = document.querySelector('.gradient-bg');
            let color1bg = [
                'rgb(23,181,248)',
                'rgb(223,31,226)', 
                'rgb(253,247,0)',
                'rgb(79,148,222)'
            ];
            let color2bg = [
                'rgb(43,182,115)',
                'rgb(89,158,189)',
                'rgb(255,43,0)',
                'rgb(251,147,255)'
                
            ];
            
            let color1 = [
                '119,236,227',
                '166,187,208',
                '255,37,155',
                '176,238,171'
                
            ];
            
            let color2 = [
                '20,17,99',
                '227,108,164',
                '255,94,0',
                '165, 54, 190'
            ];
            
            let color3 = [
                '162,238,222',
                '115,137,194',
                '255,181,0',
                '32,219,224'
            ];
            
            let color4 = [
                '198,132,229',
                '198,120,180',
                '255,169,201',
                '245, 155, 155'
            ];
            
            let color5 = [
                '147,27,228',
                '244,202,206',
                '251,241,168',
                '168, 230, 53'
                
            ];
        console.log("otgore eee");
        console.log(event.target);
        if(positionClick.parentElement.classList.contains('listProduct') || positionClick.parentElement.classList.contains('product')){
            console.log("cak");
            let id = positionClick.dataset.id;
            if(id == null) id = positionClick.parentElement.dataset.id;
            console.log(id);
                // p.style.setProperty('transition', '3s');
                p.style.setProperty('--color-bg1', color1bg[id-1]);
                p.style.setProperty('--color-bg2', color2bg[id-1]);
                p.style.setProperty('--color1', color1[id-1]);
                p.style.setProperty('--color2', color2[id-1]);
                p.style.setProperty('--color3', color3[id-1]);
                p.style.setProperty('--color4', color4[id-1]);
                p.style.setProperty('--color5', color5[id-1]);
            
        } else {
            p.style.setProperty('--color-bg1', color1bg[3]);
                p.style.setProperty('--color-bg2', color2bg[3]);
                p.style.setProperty('--color1', color1[3]);
                p.style.setProperty('--color2', color2[3]);
                p.style.setProperty('--color3', color3[3]);
                p.style.setProperty('--color4', color4[3]);
                p.style.setProperty('--color5', color5[3])
        }
    })
const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
        })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp = () => {
    // get data product
    fetch('src/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();

        // get data cart from memory
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
    
}

console.log("init");
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
//const p = document.querySelector(':root');
// const poster = document.querySelector('model-viewer');
// const nameTag = document.querySelector('#name');
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

// document.querySelector('.atina').onmouseover = function(){
//     p.style.setProperty('--color-bg1', color1bg[1]);
//     p.style.setProperty('--color-bg2', color2bg[1]);
//     p.style.setProperty('--color1', color1[1]);
//     p.style.setProperty('--color2', color2[1]);
//     p.style.setProperty('--color3', color3[1]);
//     p.style.setProperty('--color4', color4[1]);
//     p.style.setProperty('--color5', color5[1]);
// }
// document.querySelector('.zevs').onmouseover = function(){
//     p.style.setProperty('--color-bg1', color1bg[2]);
//     p.style.setProperty('--color-bg2', color2bg[2]);
//     p.style.setProperty('--color1', color1[2]);
//     p.style.setProperty('--color2', color2[2]);
//     p.style.setProperty('--color3', color3[2]);
//     p.style.setProperty('--color4', color4[2]);
//     p.style.setProperty('--color5', color5[2]);
// }

window.onload = function(){ 
    initApp();
    // ColorChange();
};

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