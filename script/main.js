// import { animateOnLoad } from "./animate";
import { togglerOpen, togglerClose} from "./toggler";

// get window height
const windowHeight = window.innerHeight;
// made function for animating on scroll
const animateOnscroll = (target, targetInView, targetOutView, classTarget) =>{
    // if target is in view based on half of the viewport and if it scrolled back to view
    if(targetInView <= windowHeight / 2){
        target.classList.add(classTarget)
    // if target was out of view based on bottom position to top viewport
    }if (targetOutView <= 0){
        target.classList.remove(classTarget)
    }if (scrollY === 0){
        target.classList.remove(classTarget)
    }else {return}
}

// hero animate on load
window.addEventListener('load', function(){
    // loader
    document.querySelector('#loader-white').classList.add('-translate-x-full');
    document.querySelector('#loader-black').classList.add('translate-x-full');
    setTimeout(function(){
        document.querySelector('#loader').classList.add('hidden')
    },1500)

    // logo
    document.querySelector('#logo-nav').classList.add('animate-fade-up');
    document.querySelector('#toggle-open').classList.add('animate-fade-left');
    // hero img-1
    document.querySelector('#hero-img-1').classList.add('animate-fade-down');
    // hero header-1
    document.querySelector('#hero-header-1').classList.add('animate-fade-right');
    // hero img-2
    document.querySelector('#hero-img-2').classList.add('animate-fade-left');
    // hero header-2
    document.querySelector('#hero-header-2').classList.add('animate-fade-right');
    // hero img-3
    document.querySelector('#hero-img-3').classList.add('animate-fade-right');
    // hero header-2
    document.querySelector('#hero-header-3').classList.add('animate-fade-up');
    // hero button
    document.querySelector('#hero-button').classList.add('animate-fade-in');

    // slider.classList.add(`-translate-x-[${300}%]`);
    
   
})


window.addEventListener('scroll',function(){
    
// get scroll position
    const scrollY = window.scrollY
// change nav style based on scrolling
    scrollNav(scrollY)
// get element position
    let aboutTopPosition = document.querySelector('#about-container').getBoundingClientRect().top
    let aboutBotPosition = document.querySelector('#about-container').getBoundingClientRect().bottom
    let chefTopPosition = document.querySelector('#chef-container').getBoundingClientRect().top
    let chefBotPosition = document.querySelector('#chef-container').getBoundingClientRect().bottom
// call the function
    animateOnscroll(document.querySelector('#about-container #title-container'),aboutTopPosition,aboutBotPosition,'animate-scale-left')
    animateOnscroll(document.querySelector('#about-container #about-img'),aboutTopPosition,aboutBotPosition,'animate-fade-left')
    animateOnscroll(document.querySelector('#about-container #about-paragraf'),aboutTopPosition,aboutBotPosition,'animate-fade-up')
    animateOnscroll(document.querySelector('#chef-container #title-container'),chefTopPosition,chefBotPosition,'animate-scale-right')
    animateOnscroll(document.querySelector('#chef-container #img'),chefTopPosition,chefBotPosition,'animate-fade-down')
    animateOnscroll(document.querySelector('#chef-container #paragraf'),chefTopPosition,chefBotPosition,'animate-fade-up')

})

// scroll to top
document.querySelector('#back-to-top-btn').addEventListener('click',function(){
    window.scrollTo({top : 0, behavior : 'smooth'})
})


//change navbar
const scrollNav = (scrollY) => {
    if(scrollY > 0){
        document.querySelector('header').classList.add('-translate-y-5');
        document.querySelector('header').classList.add('bg-neutral-50/50');
        document.querySelector('header').classList.add('backdrop-blur-md');
    }else if(scrollY === 0){
        document.querySelector('header').classList.remove('-translate-y-5');
        document.querySelector('header').classList.remove('bg-neutral-50/50');
        document.querySelector('header').classList.remove('backdrop-blur-md');
    } return
}

// toggler activation
togglerOpen('translate-x-full');
togglerClose('translate-x-full');

// slider navigation
const sliders = document.querySelectorAll('#slider div');
let sliderCounter = 0;
const slider = document.querySelector('#slider');

document.querySelector('#next-btn').addEventListener('click', function(){
    sliderCounter++;
    slider.classList.add(`-translate-x-[${sliderCounter * 100}%]`);
    slider.classList.remove(`-translate-x-[${(sliderCounter + 1) * 100}%]`);
    slider.classList.remove(`-translate-x-[${(sliderCounter - 1) * 100}%]`);
    
});

document.querySelector('#prev-btn').addEventListener('click', function(){
    sliderCounter--;
    slider.classList.add(`-translate-x-[${sliderCounter * 100}%]`);
    slider.classList.remove(`-translate-x-[${(sliderCounter + 1) * 100}%]`);
    slider.classList.remove(`-translate-x-[${(sliderCounter - 1) * 100}%]`);
});

