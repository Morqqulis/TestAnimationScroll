"use strict";

gsap.registerPlugin( ScrollTrigger, ScrollSmoother );

ScrollSmoother.create( {
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
} );

gsap.fromTo( '.hero', { opacity: 1 }, {
    opacity: 0, scrollTrigger: {
        trigger: '.hero',
        start: 'top',
        scrub: true,
    }
}, );


const itemsLeft = document.querySelectorAll( '.gallery__left img' );
const itemsRight = document.querySelectorAll( '.gallery__right img' );

const randomNumber = Math.floor( Math.random() * 101 ) + 200;
const randomNumberMinus = Math.floor( Math.random() * 201 ) - 300;

console.log( randomNumberMinus );
itemsLeft.forEach( ( item ) => {
    gsap.fromTo( item, { x: randomNumberMinus, y: randomNumber, opacity: 0 }, {
        opacity: 1,
        x: 0,
        y: 0,
        scrollTrigger: {
            trigger: item,
            start: '-1000',
            end: '-100',
            scrub: true
        }
    } );
} );
itemsRight.forEach( ( item ) => {
    console.log( item );
    gsap.fromTo( item, { x: randomNumber, y: 500, opacity: 0 }, {
        opacity: 1,
        x: 0,
        y: 0,
        scrollTrigger: {
            trigger: item,
            start: '-1000',
            end: '-100',
            scrub: true
        }
    } );
} );


