window.onload = function(){
    const headerTwo = document.getElementsByClassName('header-2') ;

    window.addEventListener('scroll' , scrollFunction) ;
    console.log(window.scrollY);
    function scrollFunction(){
        if(window.scrollY >= 180){
            headerTwo[0].classList.add('fixed') ;
        }
        else if(window.scrollY < 180){
            headerTwo[0].classList.remove('fixed') ;
        }
    }
}

$('.libary-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.why-carousel').owlCarousel({
    loop:true,
    nav: false,
    dots: true,
    item : 4 ,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.news-carousel').owlCarousel({
    margin : 20 ,
    loop:true,
    autoplay:false,
    nav: false,
    dots: false,
    item : 4 ,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

const menuMobile = document.querySelector('.menu-header-container') ;
// open
const open = document.querySelector('.menu-header-mb-list > i') ;
open.addEventListener('click' ,function (event){
    menuMobile.style.animation = 'menuappear 0.4s ease-in-out forwards' ;
})

const close = document.querySelector('.close');
close.addEventListener('click' ,function (event){
    menuMobile.style.animation = 'menudisappear 0.4s ease-in-out forwards' ;
})
// close
