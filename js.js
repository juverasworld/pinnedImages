document.addEventListener("DOMContentLoaded", function (){
    'use strict';

    gsap.registerPlugin(ScrollTrigger);

    // lenis smooth scorll

    let workInfoItems = document.querySelectorAll(".work__photo-item");
    workInfoItems.forEach(function(item, index){
        item.style.zIndex = workInfoItems.length - index;});
    
})