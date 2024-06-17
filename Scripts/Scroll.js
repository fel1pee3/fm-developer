window.sr = ScrollReveal({reset: true});

sr.reveal(".home-scroll", {
    duration: 1000,
    easing: 'ease',
    scale: 0.7, 
    opacity: 0.8
});

sr.reveal(".about-scroll", {
    duration: 1000,
    easing: 'ease',
    distance: '60px',
    origin: 'bottom',
    opacity: 0,
    scale: 0.9,
});

sr.reveal(".skill-scroll", {
    duration: 1000,
    easing: 'ease',
    distance: '30px',
    origin: 'right',
});

sr.reveal(".project-scroll", {
    duration: 1000,
    easing: 'ease',
    distance: '60px',
    origin: 'bottom',
    opacity: 0,
    scale: 0.9,
});

sr.reveal(".footer-scroll", {
    duration: 1000,
    easing: 'ease',
    distance: '60px',
    origin: 'bottom',
    opacity: 0,
    scale: 0.9,
});
