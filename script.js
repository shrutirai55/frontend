

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});





document.addEventListener("mousemove",function(dets){
    gsap.to("#circle",{
        left:dets.x,
        top:dets.y
    })
})
Animation();



