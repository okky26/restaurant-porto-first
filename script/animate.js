export const animateOnLoad = (target,addClass) => {
    window.addEventListener('load', function(){
        target.classList.add(addClass)
    })
}