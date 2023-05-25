let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let nav = document.querySelector("nav");

// INTRO ANIMATION
window.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh'
        }, 2400)

        // NAVBAR FIXED TOP
        setTimeout(() => {
            intro.style.top = '-100vh'
            nav.classList.add('fixed-top');
        }, 2600)
    })
})


// NAVBAR CHANGE COLOR ON SCROLL
window.onscroll = () =>{
    if(window.scrollY>500){
        nav.classList.add("changec")
    }
    else{
        nav.classList.remove("changec")
    }
};

//TYPING EFFECT ANIMATION
const texts = ['family', 'friends', 'co-workers'];
let count = 0;
let index =  0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 300)

}());






