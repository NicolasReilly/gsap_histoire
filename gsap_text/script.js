gsap
  .timeline()
  .from(".date", 1, { y: -50, opacity: 0 })
  .to(".bg", 0.2, { scaleX: 1 })
  .from(".textWord", 0.1, { opacity: 0 })
  .to(".bg", 0.2, { scaleX: 0 });