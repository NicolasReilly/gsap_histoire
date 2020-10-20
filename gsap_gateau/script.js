gsap.registerPlugin(ScrollTrigger);

const gateau = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".contenant",
      start: "50% 50%",
      pin: true,
      scrub: 1
    }
  })

  .from(".etage3", {
    opacity: 0,
    y: 100
  })
  .from(
    ".etage2",
    {
      opacity: 0,
      y: -100
    },
    "<"
  )
  .from(".etage1", {
    opacity: 0
  })
  .from(".bougie", {
    opacity: 0,
    y: 100
  });