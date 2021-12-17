gsap.to(".circular-nav2",{
    
    scrollTrigger: {

        scroller: ".subpage-stickman",
        trigger: ".subpage-stickman-inner",
        
        start: "top top",
        end: "+=4000px",

        scrub: true,
        pin: '.pin-wrap',
        
        
    },

    rotation: -720,
    
}); 
     
//    },
//
//    
//});



// var timer;


// if (ScrollTrigger.isScrolling()) {
    
// }

//$(window).scroll(function (event) {
//    var scroll = $(window).scrollTop();
//    document.documentElement.style.setProperty('--speed', "0.8s");
//       
//});
//$(window).scroll(function() {
//    clearTimeout($.data(this, 'scrollTimer'));
//    $.data(this, 'scrollTimer', setTimeout(function() {
//        document.documentElement.style.setProperty('--speed', "0s");
//    }, 500));
//});

//$('.globe').click(function() {
//   window.location.href = "index.html"
//});
//
//window.addEventListener("scroll", (event) => {
//    let scroll = this.scrollY;
//    console.log(scroll)
//});