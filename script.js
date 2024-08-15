//! locomotive and gsap combine used
const init=()=> {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
init();

//! crsr 
  var crsr = document.querySelector(".cursor")
  var main = document.querySelector(".main")
  document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+ 20 +"px"
    crsr.style.top=dets.y+ 20 + "px"
  
  })


//! page 1 animation
var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});
t1.to(
  ".page1 h1",
  {
    x: -100,
  },
  "anim"
);
t1.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim"
);
t1.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim"
);


// background-color: ;
// width: 7vw;
// padding: 9px;
// border-radius: 16px;text-align: center;
// font-weight: 100;
// text-transform: uppercase;
// font-size: 12px;
// opacity: 0;

//! page 1 vc paly btn
var videocon = document.querySelector(".page1 video")
var vcmode = document.querySelector(".cursor #vcmode ")
videocon.addEventListener("mouseenter",function(){
  vcmode.style.opacity=1
})
videocon.addEventListener("mouseleave",function(){
  vcmode.style.opacity=0
  vcmode.style.backgroundColor="rgb(8, 80, 8)"
  // crsr.style.opacity=1

})

//! page 2 color change
var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top -115%",
    end: "top -130%",
    scrub: 3,
  },
});

t2.to(".main",{
  backgroundColor:"#fff"
})

//! page 3
var img1 = document.querySelector(".page3-part1 img")
var viewmode = document.querySelector(".cursor #viewmode ")
img1.addEventListener("mouseenter",function(){
  viewmode.style.opacity=1
})
img1.addEventListener("mouseleave",function(){
    viewmode.style.opacity=0

})
var img2 = document.querySelector(".page3-part2 img")
var viewmode = document.querySelector(".cursor #viewmode ")
img2.addEventListener("mouseenter",function(){
  viewmode.style.opacity=1
})
img2.addEventListener("mouseleave",function(){
    viewmode.style.opacity=0

})
var vc1 = document.querySelector(".page3-part1 video")
var viewmode = document.querySelector(".cursor #viewmode ")
vc1.addEventListener("mouseenter",function(){
  viewmode.style.opacity=1
})
vc1.addEventListener("mouseleave",function(){
    viewmode.style.opacity=0

})
var vc2 = document.querySelector(".page3-part2 video")
var viewmode = document.querySelector(".cursor #viewmode ")
vc2.addEventListener("mouseenter",function(){
  viewmode.style.opacity=1
})
vc2.addEventListener("mouseleave",function(){
    viewmode.style.opacity=0

})
//! page 4 color change
var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top -330%",
    end: "top -370%",
    scrub: 3,
  },
});
t3.to(".main",{
  backgroundColor:"#0f0d0d"
})



//! page 5 img animation
  var boxes = document.querySelectorAll(".box")
  boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    // elem.style.backgroundColor="red"
    var att = elem.getAttribute("data-image") 
    crsr.style.width="400px"
    crsr.style.height="350px"
    crsr.style.borderRadius="0"
    crsr.style.backgroundImage=`url(${att})`
  
  })
  elem.addEventListener("mouseleave",function(){
    elem.style.backgroundColor="transparent"
    crsr.style.width="20px"
    crsr.style.height="20px"
    crsr.style.borderRadius="50%"
    crsr.style.backgroundImage=`none`
  })
  })



//! nav bar animation
var h4 = document.querySelectorAll("#nav  h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    purple.style.display="block"
    purple.style.opacity="1"

  })
  elem.addEventListener("mouseleave",function(){
    purple.style.display="none"
    purple.style.opacity="0"

  })
})