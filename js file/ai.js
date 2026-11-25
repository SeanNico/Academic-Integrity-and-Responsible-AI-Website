document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');

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

    const flipCards = document.querySelectorAll('.flip-card');

    flipCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if(e.target.tagName === 'A') return;
            this.classList.toggle('flipped');
        });
    });
});

    function openModal(title, content) {
        document.getElementById('modalTitle').innerHTML = title;
        document.getElementById('modalBody').innerHTML = content;
        document.getElementById('disclosureModal').style.display = 'flex';
            setTimeout(() => {
        document.getElementById('disclosureModal').classList.add('show');
        }, 10);
    }

    function closeModal() {
        document.getElementById('disclosureModal').classList.remove('show');
            setTimeout(() => {
            document.getElementById('disclosureModal').style.display = 'none';
        }, 300); 
    }

    window.onclick = function(event) {
        var modal = document.getElementById('disclosureModal');
        if (event.target == modal) {
            closeModal();
        }
    }