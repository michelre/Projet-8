const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]
let currentSlide = 0;

let flecheDroite = document.getElementById("fleche-droite") ;
flecheDroite.addEventListener("click" , () => {
	if(currentSlide === slides.length - 1){
		currentSlide = 0
	} else {
		currentSlide += 1
	}
	changeSlide(currentSlide)
	console.log("Flèche droite cliquée"); //pour tester le fonctionnement des event listeners.
});

let flecheGauche = document.getElementById("fleche-gauche") ;
flecheGauche.addEventListener("click" , () => {
	if(currentSlide === 0){
		currentSlide = slides.length - 1
	} else {
		currentSlide -= 1
	}
	changeSlide(currentSlide)
	console.log("Flèche gauche cliquée"); //pour tester le fonctionnement des event listeners.
});

function changeSlide(currentSlide){
	const slide = slides[currentSlide]
	const bannerImg = document.querySelector('.banner-img');
	bannerImg.setAttribute('src', `./assets/images/slideshow/${slide.image}`)
	bannerImg.setAttribute('alt', slide.tagLine)
	document.querySelectorAll('.dot').forEach((dot, idx) => {
		if(idx === currentSlide){
			dot.classList.add('dot_selected')
		} else {
			dot.classList.remove('dot_selected')
		}
	})
}

function createDots(){
	const dots = document.querySelector('.dots')
	for(let i = 0; i < slides.length; i++){
		const dot = document.createElement('div')
		dot.classList.add('dot')
		if(i === 0){
			dot.classList.add('dot_selected')
		}
		dots.appendChild(dot)
	}
}

createDots()

