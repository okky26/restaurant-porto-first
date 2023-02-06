export const togglerOpen = (add) => {
    document.querySelector('#toggle-open').addEventListener('click', function(){
        document.querySelector('#nav-menu').classList.add(add)
    });
};
export const togglerClose = (add) => {
    document.querySelector('#toggle-close').addEventListener('click', function(){
        document.querySelector('#nav-menu').classList.remove(add)
    });
};

export const navSlide = (removeBefore, removeAfter,add) => {
    document.querySelector('#slider').classList.add(add);
    document.querySelector('#slider').classList.remove(removeAfter);   
    document.querySelector('#slider').classList.remove(removeBefore);

};