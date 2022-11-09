'strict mode'
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouseljs = document.getElementById("carousel-template").content.cloneNode(true);


let mainImage = carouseljs.querySelectorAll('.hid');
let thumbimage = carouseljs.querySelectorAll('.thumbnail');

let carouselContainer = document.querySelector('.container');


for (let i = 0; i < images.length; i++){
    console.log(images[i].image);
 
    //immagini principali
    carouseljs.querySelector(`.id-${i} img`).src = images[i].image;

    //thumbnails    
    carouseljs.querySelector(`.thumb-${i} img`).src = images[i].image;

    // //testo
    carouseljs.querySelector('h2.title').innerHtml = images[i].title;
    carouseljs.querySelector('p.description').innerHtml = images[i].text;
}

let active= 0;

carouseljs.querySelector('.arrow-up').addEventListener('click', function() {
    console.log('clickdown');
    mainImage[active].classList.remove('selected');
    thumbimage[active].classList.remove('thumbselected');
        if( active === 0 ) {
            active = images.length -1;
        } else {
            active--;
        }
        mainImage[active].classList.add('selected');
    thumbimage[active].classList.add('thumbselected');
});

carouseljs.querySelector('.arrow-down').addEventListener('click', function() {
    console.log('clickup');
        mainImage[active].classList.remove('selected');
        thumbimage[active].classList.remove('thumbselected');
        if ( active === images.length - 1) {
            active = 0;
        } else {
            active++;
        }
        mainImage[active].classList.add('selected');  
        thumbimage[active].classList.add('thumbselected');
    }
);
    
carouselContainer.append(carouseljs);

