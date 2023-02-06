// import { animateOnLoad } from "./animate";
import { togglerOpen, togglerClose} from "./toggler";

// loader animation
// animateOnLoad(document.querySelector('#loader-black div'),'scale-x-0');
// animateOnLoad(document.querySelector('#loader-white div'),'scale-x-0');
// animateOnLoad(document.querySelector('#loader-black'),'translate-x-full');
// animateOnLoad(document.querySelector('#loader-white'),'-translate-x-full');
// animateOnLoad(document.querySelector('#text-black'),'-translate-x-full');
// animateOnLoad(document.querySelector('#text-white'),'translate-x-full');
// animateOnLoad(document.querySelector('#text-black'),'sm:-translate-x-[200%]');
// animateOnLoad(document.querySelector('#text-white'),'sm:translate-x-[200%]');
// animateOnLoad(document.querySelector('#text-black'),'lg:-translate-x-[300%]');
// animateOnLoad(document.querySelector('#text-white'),'lg:translate-x-[300%]');

// hide loader after finished animation
// window.addEventListener('load', function(){
//     setTimeout(function(){
//         document.querySelector('#loader').classList.add('hidden')
//     },1000);
// });

// hero animate on load
window.addEventListener('load', function(){
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

// get scroll position
window.addEventListener('scroll',function(){
    const scrollY = window.scrollY
    scrollNav(scrollY);
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

