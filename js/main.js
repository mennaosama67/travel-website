// menu toggler button
let nav=document.querySelector(".navbar");

document.querySelector("#menu-bar").addEventListener('click',()=>{
    nav.classList.toggle('active');
})

// video slider
let videoBtns=document.querySelectorAll('.control-btn');
videoBtns.forEach(btn=>{
    btn.onclick=()=>{
        let src= btn.getAttribute('data-src');
        document.querySelector('.video').src=src
    }
 
})