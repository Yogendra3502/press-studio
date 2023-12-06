// var explore = document.querySelector(".explore")
// var loading = document.querySelector(".loader")
// explore.addEventListener("click", function(dets){
//     loading.style.top = "-1000%"
// })
// var pop = document.querySelector(".ppot")
// pop.addEventListener("mouseenter",function(){
//     pop.innerHTML ="Press play On Tap"
// })
// pop.addEventListener("mouseleave",function(){
//     pop.innerHTML ="PPOT"
// })

// var tl = gsap.timeline()
// tl.from(".Press", { 
//     duration: 2,
//     x: 200,
//     rotation: 90,
//   });
// tl.fromTo(".on",
//     { 
//       y: 100,
//       opacity: 0
//     },
//     {
//       y: 0,
//       opacity: 1,
//       stagger: 0.05,
//     //   duration: 1,
//       ease: 'power4.out',
//     }
//   )
// tl.fromTo(
//     ".tape",
//     { 
//       y: 100,
//       opacity: 0
//     },
//     {
//       y: 0,
//       opacity: 1,
//       stagger: 0.05,
//     //   duration: 1,
//       ease: 'power4.out',
//     }
//   )
// tl.from(".studio .studiopart1",{
        
//         rotate:"90",
//         color:"red",
//         opacity:"0",
//         duration:"2",
//         scrollTrigger:{
//             trigger:".studio",
//             scroller:"body",
        
//             start:"top 20%",
//             end:"top -40%",
//             scrub:1,
//             pin:true
//         }
//     })
    
// tl.from(".studiopart2",{
//         opacity:"-1",
//         scale:"5",
//         markup:true,
//         scrollTrigger:{
//             trigger:".main",
//             scroller:"body",
//             start:"top 30%",
//             end:"bottom 50%",
//             scrub:5,
//         }
//     })
//     // gsap.timeline
    
//     // gsap.to(".play",{
//     //     transform:"translateX(-460%)",
//     //     scrollTrigger:{
//     //         trigger:".navbar",
//     //         scroller:"body",
//     //         start:"top 0",
//     //         end:"top -150%",
//     //         scrub:2,
//     //         pin:true
//     //     }
//     // })
//     // var menu = document.querySelector(".boxnav")
//     // var owner = document.querySelector(".nav")
  
//   //   menu.addEventListener("mouseenter",function(){    
//   //       menu.innerHTML=`<div class="mix">
//   //       <h1>MiX Voice & Mix Voice</h1>
//   //       <img src="Services_Mix-Voice.jpg" alt="">
//   //       <div class="text"><hr>
//   //           <h5>Casting & Recording</h5><hr>
//   //           <h5>Talent Direction</h5><hr>
//   //           <h5>Voice Over</h5><hr>
//   //           <h5>Commercials & Trailers</h5><hr>
//   //           <h5>Post Sync</h5><hr>
//   //           <h5>Remote recording</h5><hr>
//   //       </div>
//   //   </div>`
//   //    })
//   //    menu.addEventListener("mouseleave",function(){
//   //     menu.innerHTML=`<div class="boxnav">
//   //     <h4>vm</h4>
//   //     <h3>Voice_&_Mix</h3>
//   // </div>`
//   //    })
// gsap.to(".boxnav h3,.boxnav1 h3,.boxnav2 h3,.boxnav3 h3",{
//     rotate:"270"
// })
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