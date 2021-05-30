gsap.registerPlugin(ScrollTrigger);

//загрузка карточек
gsap.from('.photo-grid__item', {
  scrollTrigger: {
  trigger:'.photo-grid__item',
  start: "20px 80%"
},
  duration: 1,
  opacity: 0,
  delay: 1,
  stagger: .5 });

//загрузка заголовка в  блоке cover
  gsap.from('.cover__title', {
    scrollTrigger: {
    trigger:'.cover__title',
    start: "20px 80%"
  },
    duration: 2,
    opacity: 0,
    y: '-150%' });



//загрузка шапки сайта
const timeline = gsap.timeline({defaults: {duration: .1}});
timeline.from('.header__logo', { duration: 1, scale: 0.3, ease: 'back', opacity: 0 });

timeline.from('.lead__title', { duration: 1, x: '-100%', opacity: 0 });
timeline.from('.lead__subtitle', { duration: 1, x: '100%', opacity: 0 });

timeline.from('.lead__image', { scrollTrigger: '.lead__image', opacity: 0, ease: 'circ', duration: 3, scale: 0.3 });


//загрузка текста
const text = gsap.utils.toArray('.place__text');
text.forEach(place => {
  gsap.from(place, {  scrollTrigger:{
    trigger:place,
    start: "20px 80%",
  }, duration: 2, x: '-100%',  delay: 1, stagger: .5, opacity: 0});
});

//загрузка заголовка
const title = gsap.utils.toArray('.place__title');
title.forEach(place => {
  gsap.from(place, {  scrollTrigger:{
    trigger:place,
    start: "20px 80%",
  }, duration: 2,  y: '130%', stagger: .5});
});

const tl = new TimelineMax();
tl
.to(".place__image",  {zIndex:2 })
.to(".place__title",  {zIndex:3 })


