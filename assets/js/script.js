
function loadingAnimation() {
    var tl = gsap.timeline();
    tl.to(".loader .yellow", {
        top: "-100%",
        delay: 0.5,
        duration: 0.6,
        ease: "expo.out"

    })
    tl.from(".yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    }, "textani")

    tl.to(".loader h1", {
        color: "#000",
        duration: 0.7,

    }, "textani")

    tl.to(".loader", {
        opacity: 0,
        display: "none",
    })
}
loadingAnimation()

// let navBarIcon = document.getElementById("nav-icon");
// let navlinks = document.querySelector(".nav-links");
// // let nav = document.querySelectorAll(".nav-link")
// navBarIcon.addEventListener("click", () => {
//     // Toggle the class to open/close the navigation
//     navlinks.classList.toggle("open");
//     navBarIcon.classList.toggle("nav-icon");
//     nav.classList.toggle("hide-nav-link");


// });

const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
})

// scroll.on("click", ()=>{

// })

function backToTop() {
    let backToTop = document.querySelector(".footer-top .back-to-top ");
    backToTop.addEventListener("click", () => {
        // console.log("hello joni")
        scroll.scrollTo(0)

    })
}
backToTop()

function ElemEffect() {
    let elemBoxs = document.querySelectorAll(".elem");
    let studioSetion = document.querySelector(".studio-section")
    elemBoxs.forEach((el) => {
        // console.log(el)
        el.addEventListener("mouseenter", () => {
            let bgimg = el.getAttribute("data-img");
            // console.log(bgimg)
            studioSetion.style.backgroundImage = `url(${bgimg})`;


        })

    })
}
ElemEffect()

let navLinks = document.querySelector(".nav-links");
let navIcon = document.getElementById("nav-icon");
navIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show-nav-links");
});