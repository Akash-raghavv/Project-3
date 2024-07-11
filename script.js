var tl = gsap.timeline()
tl.from("#nav h4",{
    y:-50,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.5
})

tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:1
})
tl.from("#main img",{
    x:100,
    rotate:360,
    opacity:0,
    duration:0.5,
    
})