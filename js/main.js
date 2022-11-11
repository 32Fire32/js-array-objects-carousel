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

// DICHIARAZIONI OGGETTI DOM

// template
const carouseljs = document.getElementById("carousel-template").content.cloneNode(true);
let carouselContainer = document.querySelector('.container');


let mainImage = carouseljs.querySelectorAll('.hid');
let thumbimage = carouseljs.querySelectorAll('.thumbnail');


let startBtn = carouseljs.querySelector('.btn-start');
let stopBtn = carouseljs.querySelector('.btn-stop');
let inverseBtn = carouseljs.querySelector('.btn-inverse');

let active= 0;


// VERSIONE CICLO FOREACH
images.forEach((elm, i) => {


    //immagini principali
    let dinamicImage = carouseljs.querySelector(`.id-${i} img`);
    dinamicImage.src = images[i].image;

    //thumbnails
    carouseljs.querySelector(`.thumb-${i} img`).src = elm.image;

    // //testo
    let title = document.createTextNode( elm.title );
    carouseljs.querySelector(`.title-${i}`).appendChild( title );

    let descr = document.createTextNode( elm.text );
    carouseljs.querySelector(`.description-${i}`).appendChild( descr );
});


// VERSIONE CICLO FOR

// for (let i = 0; i < images.length; i++){
//     console.log(images[i].image);

//     //immagini principali
//     let dinamicImage = carouseljs.querySelector(`.id-${i} img`);
//     dinamicImage.src = images[i].image;

//     //thumbnails
//     let imageDiv = carouseljs.querySelector(`.id-${i}`);
//     carouseljs.querySelector(`.thumb-${i} img`).src = images[i].image;
//     carouseljs.querySelector(`.thumb-${i}`).addEventListener('click', function(){
//         console.log(`thumbclicked ${i}`);
//         imageDiv.classList.remove(`.id-${i}`);           
//         // imageDiv.classList.add('selected');
//     })

//     // //testo
//     let title = document.createTextNode( images[i].title );
//     carouseljs.querySelector(`.title-${i}`).appendChild( title );

//     let descr = document.createTextNode( images[i].text );
//     carouseljs.querySelector(`.description-${i}`).appendChild( descr );
// }


// COMANDI CAROSELLO

carouseljs.querySelector('.arrow-up').addEventListener('click', function() {
    console.log('clickup');
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
    console.log('clickdown');
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

// COMANDI LOOP E INVERSE LOOP

let up;
let autoplay;
let stopauto;
startBtn.addEventListener('click', function(){
    autoplay = setInterval(loopup, 3000);
});

stopBtn.addEventListener('click', function(){
    clearInterval(autoplay);
    clearInterval(stopauto);

});

inverseBtn.addEventListener('click', function(){
    inverseLoop();
});


// FUNZIONI


function loopup() {
    console.log('clickup');
    mainImage[active].classList.remove('selected');
    thumbimage[active].classList.remove('thumbselected');
        if( active === 0 ) {
            active = images.length -1;
        } else {
            active--;
        }
        mainImage[active].classList.add('selected');
    thumbimage[active].classList.add('thumbselected');
}

function loopdown() {
    console.log('clickdown');
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

function inverseLoop() {
    if(up === true){
        clearInterval(stopauto);
        up = false;
        autoplay = setInterval(loopup, 3000);
        console.log(up);

    } else {
        clearInterval(autoplay);
        up = true;
        stopauto = setInterval(loopdown, 3000);
        console.log(up);
    }
}

function thumbClick(){
    images.forEach((elem, index) => {
        let plus = index + 2;
        let preview = document.querySelector(`.thumb-${index}`);
        preview.addEventListener('click', function(){
            if ( !this.classList.contains('thumbselected') ){
                for ( let i = 1; i < images.length + 1; i++ ){
                    document.querySelector(`.thumbnail:nth-child(${i})`).classList.remove('thumbselected');
                }
                this.classList.add('thumbselected');
                for ( let i = 2; i < images.length + 2; i++ ){
                    document.querySelector(`.main-image:nth-child(${i})`).classList.remove('selected');
                }
                document.querySelector(`.main-image:nth-child(${plus})`).classList.add('selected');
            }
        })
    });

}

carouselContainer.append(carouseljs);
    
thumbClick();



