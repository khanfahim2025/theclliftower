document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animate the main header container
    tl.from(".navbar-container", {
        y: -100,
        opacity: 0,
        duration: 1
    });

    // Animate the left, center, and right parts of the header
    tl.from(".navbar-left", {
        x: -50,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")
    .from(".navbar-center", {
        y: -30,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")
    .from(".navbar-right", {
        x: 50,
        opacity: 0,
        duration: 0.8
    }, "-=0.5");
});