document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');
    const slidesLeft = document.querySelectorAll('.slide-left');
    const slidesRight = document.querySelectorAll('.slide-right');
    const fadeUps = document.querySelectorAll('.fade-up');
    const headerAnims = document.querySelectorAll('.header-content-anim');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    slidesLeft.forEach(slide => {
        appearOnScroll.observe(slide);
    });

    slidesRight.forEach(slide => {
        appearOnScroll.observe(slide);
    });

    fadeUps.forEach(fade => {
        appearOnScroll.observe(fade);
    });

    headerAnims.forEach(anim => {
        anim.classList.add('appear');
    });

    const bookScene = document.getElementById('bookScene');
    
    if (bookScene) {
        const bookObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bookScene.classList.add('open');
                } else {
                    bookScene.classList.remove('open');
                }
            });
        }, { 
            threshold: 0.3 
        });

        bookObserver.observe(bookScene);
    }
});

document.querySelectorAll('.citation-grid .flip-card').forEach(card => {
    card.addEventListener('click', function (e) {
        if (e.pointerType === 'mouse') return;
        card.classList.toggle('flipped');
    });
});