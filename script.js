var pop = document.querySelector(".ppot")
pop.addEventListener("mouseenter",function(){
    pop.innerHTML ="Press play On Tap"
    console.log(helo)
})
pop.addEventListener("mouseleave",function(){
    pop.innerHTML ="PPOT"
})
document.querySelector(".ttext button")
.addEventListener("mouseover",function(){
    gsap.to(".fatore video",{
        opacity:1,
        duration:1.5,
        ease: Power2
    })
})
document.querySelector(".ttext button")
.addEventListener("mouseleave",function(){
    gsap.to(".fatore video",{
        opacity:0,
        duration:1,
        ease: Power2
    })
});
var main = document.querySelector(".main")
var loader = document.querySelector(".loader")

var tl = gsap.timeline();

tl.to(loader,{
    opacity:0,
    delay:3,
    // scale:-1,
    // top:"-100%",
    // duration:2,

});
tl.to(loader,{
    duration:0.1,
    duration:0.1,
    top: -1000,
    // opacity:-1,
   
})

tl.to(main,{
    opacity: 1,
    scale:1,
    display: "inline"
})






gsap.from(".studiopart3",{
    y:50,
    opacity: 0,
    stagger: 0.4,
    duration:1,
    scrollTrigger:{
        trigger:".studiopart3 h1",
        scroller:"body",
        start: "top 50%",
        end: "top 65%",
        scrub:2

    }
})
gsap.from(".studiopart4",{
    scale:0.8,
    opacity: 0,
    stagger: 0.4,
    duration:3,
    scrollTrigger:{
        trigger:".studiopart4 h1",
        scroller:"body",
        start: "top 50%",
        end: "top 45%",
        scrub:1
    }
})