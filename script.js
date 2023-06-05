gsap.registerPlugin(ScrollTrigger);

const myText = new SplitType("#title");
const headerTl = gsap.timeline();
headerTl
  .fromTo(
    ".word",
    { y: "215px" },
    {
      y: 0,
      stagger: 0.3,
      delay: 0.2,
      duration: 1,
    }
  )
  .fromTo(
    ".lead__subtitle",
    { opacity: 0 },
    {
      opacity: 1,
      delay: 0.2,
      duration: 2,
    }
  )
  .from(
    ".lead__image",
    {
      opacity: 0,
      ease: "circ",
      duration: 3,
      scale: 0.5,
    },
    "-=1.5"
  );

gsap.fromTo(
  ".intro",
  {
    opacity: 0,
    y: 50,
  },
  {
    y: 0,
    ease: "Power1.easeOut",
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".intro",
      start: "top center+=200",
    },
  }
);

//загрузка карточек

gsap.from(".photo-grid__item", {
  scrollTrigger: {
    trigger: ".photo-grid__item",
    start: "top center+=200",
  },
  duration: 1,
  opacity: 0,

  stagger: {
    each: 1,
    grid: [4, 3],
    from: "edges",
  },
});

//загрузка заголовка в  блоке cover
gsap.from(".cover__title", {
  scrollTrigger: {
    trigger: ".cover__title",
    start: "top center",
  },
  duration: 2,
  opacity: 0,
  y: "-150%",
});

//загрузка текста
const text = gsap.utils.toArray(".place__text");
text.forEach((place) => {
  gsap.from(place, {
    scrollTrigger: {
      trigger: place,
      start: "top center+=200",
    },
    duration: 2,
    x: "-100%",
    delay: 1,
    stagger: 0.5,
    opacity: 0,
  });
});

//загрузка заголовка
const title = gsap.utils.toArray(".place__title");
title.forEach((place) => {
  gsap.from(place, {
    scrollTrigger: {
      trigger: place,
      start: "top center+=200",
    },
    duration: 2,
    y: "130%",
    stagger: 0.5,
  });
});
