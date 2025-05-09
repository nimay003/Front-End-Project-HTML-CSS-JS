let tl = gsap.timeline({
    repeat: -1
});

tl.to(".img-container", {
    width: "100%",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 4
}, "a")
.to(".text h1", {
    ease: Expo.easeInOut,
    duration: 2.5,
    stagger: 4,
    top: "0%"
}, "a")
.to(".para p", {
    ease: Expo.easeInOut,
    duration: 2.5,
    stagger: 4,
    top: "0%"
}, "a")
.to(".text h1", {
    ease: Expo.easeInOut,
    delay: 4,
    stagger: 4,
    top: "-130%"
}, "a")
.to(".para p", {
    ease: Expo.easeInOut,
    delay: 4,
    stagger: 4,
    top: "-150%"
}, "a")