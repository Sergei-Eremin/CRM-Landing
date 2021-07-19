"use strict"
document.addEventListener('DOMContentLoaded', ()=>{
    const popUpContainer = document.querySelector('.popUp-container');
    const headerCross = document.querySelectorAll('.popUp-header__cross');
    const introductionBtn = document.querySelector('.introduction-btn');
    const getKPBtn = document.querySelector('.getKP-btn');

    popUpContainer.addEventListener('click', function(e){
        if(e.target.classList.contains('popUp-container')){
            document.querySelector('.order-introduction').classList.add('hidden')
            document.querySelector('.getKP').classList.add('hidden')
            popUpContainer.style.zIndex = -10;
            document.querySelector('body').classList.remove('no-scroll-body');
        }
    })

    // headerCross
    for(let item of headerCross){
        item.addEventListener('click', function(event){
            console.log("клик по крестику");
            document.querySelector('.order-introduction').classList.add('hidden')
            document.querySelector('.getKP').classList.add('hidden')
            item.classList.add('hidden')
            popUpContainer.style.zIndex = -10;
            document.querySelector('body').classList.remove('no-scroll-body');
        })
    }

    introductionBtn.addEventListener('click', function(){
        document.querySelector('body').classList.add('no-scroll-body');
        popUpContainer.style.zIndex = 10;
        document.querySelector('.order-introduction').classList.remove('hidden')
    })

    getKPBtn.addEventListener('click', function(){
        document.querySelector('body').classList.add('no-scroll-body');
        popUpContainer.style.zIndex = 10;
        document.querySelector('.getKP').classList.remove('hidden')
    })
})

