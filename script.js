var pop = document.querySelector(".ppot")
pop.addEventListener("mouseenter",function(){
    pop.innerHTML ="Press play On Tap"
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
})