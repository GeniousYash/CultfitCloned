gsap.from(".img1",{
    scale:0,
    scrollTrigger : {
        markers:false,
    },
});
gsap.from(".img2",{
    scale:0,
    scrollTrigger : {
        markers:false,
    },
});
gsap.from("#page3 #upper2>img",{
    scale: 1.2,
    duration: 1,
    stager: 0.25,
    scrollTrigger: {
        trigger: "#page3 #upper2",
        markers: false,
        start: "20% 20%",
        end: `+=${innerHeight * 0.2}`,
        scrub: 3,
    },
});


gsap.from("#lower3 .img3",{
    scale:0,
    scrollTrigger : {
        markers:false,
    },
});
gsap.from("#lower3 .img4",{
    scale:0,
    scrollTrigger : {
        markers:false,
    },
});
gsap.from("#lower3 .img5",{
    scale:0,
    scrollTrigger : {
        markers:false,
    },
});
gsap.from("#page3 #lower3>img",{
    scale: 1,
    duration: 1,
    stager: 0.25,
    scrollTrigger: {
        trigger: "#page3 #lower3>img",
        markers: false,
        start: "70% 70%",
        end: `+=${innerHeight * 0}`,
        scrub: 3,
    },
});





gsap.from("#betweenimgtext>h4",{
    scale:1,
    opacity:0,
    scrollTrigger : {
        markers:false
    }
})
gsap.from("#betweenimgtext>h4",{
    scale:2,
    opacity: 1,
    scrollTrigger : {
            trigger:"#betweenimgtext>h4",
            markers:false,
            start: "0% 100%",
            end:"0% 0%",
            scrub: 3,
    },
});


gsap.from("#betweenimgtext>h1",{
    scale:1,
    scrollTrigger : {
        markers:false,
    },
});
gsap.from("#betweenimgtext>h1",{
    scale: 2,
    duration: 1,
    stager: 0.25,
    scrollTrigger: {
        trigger: "#page3 #upper2",
        markers: false,
        start: "0% 70%",
        end: `+=${innerHeight * 0.2}`,
        scrub: 3,
    },
});
gsap.from("#betweenimgtext>h1",{
    scale:0,
    scrollTrigger : {
        markers:false,
    },
});
gsap.from("#betweenimgtext>h1",{
    scale: 1,
    duration: 1,
    stager: 0.25,
    scrollTrigger: {
        trigger: "#page3 #upper2",
        markers: false,
        start: "0% 0%",
        end: `+=${innerHeight * 0.2}`,
        scrub: 3,
    },
});








gsap.from("#textbetween5",{
    scale:1,
    scrollTrigger : {
        markers:false,
    },
});
gsap.from("#textbetween5",{
    scale: 2,
    duration: 1,
    stager: 0.25,
    scrollTrigger: {
        trigger: "#textbetween5",
        markers: false,
        start: "0% 70%",
        end: `+=${innerHeight * 0.2}`,
        scrub: 3,
    },
});
gsap.from("#page4 #upper4",{
    scale: 1.3,
    duration: 1,
    stager: 0.25,
    scrollTrigger: {
        trigger: "#page4 #upper4",
        markers: false,
        start: "70% 100%",
        end: `+=${innerHeight * 0}`,
        scrub: 3,
    },
});
gsap.from("#page4 #lower4",{
    scale: 1.3,
    duration: 1,
    stager: 0.25,
    scrollTrigger: {
        trigger: "#page4 #lower4",
        markers: false,
        start: "100% 100%",
        end: `+=${innerHeight * 0}`,
        scrub: 3,
    },
});



// page 5

gsap.from("#subdivpage5",{
    scrollTrigger : {
        scrub: true,
    },
    y:1500,
});













