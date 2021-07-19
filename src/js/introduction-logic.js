"use strict"
window.addEventListener('DOMContentLoaded', () => {
    const introductionBlock = document.querySelector('.introduction-block');
    introductionBlock.addEventListener("mouseover", function(event){
        if(!event.target.classList.contains('active') && event.target.classList.contains('item-span')){
            document.querySelector(".item-span.active").classList.remove('active')
            event.target.classList.add('active')
        }
    })
})