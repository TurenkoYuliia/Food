window.addEventListener('DOMContentLoaded', function() {
    const slide = document.querySelectorAll('.offer__slide');
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    const current = document.querySelector('#current');
    const total = document.querySelector('#total');

    let slideIndex = 1;

    showSliders(slideIndex);
    
    if (slide.length < 10) {
        total.textContent = `0${slide.length}`
    } else {
        total.textContent = slide.length
    }

    function showSliders(n) {
        if (n > slide.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slide.length;
        }

        slide.forEach(item => item.style.display = 'none');
        slide[slideIndex - 1].style.display = 'block';

        if (slide.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function plusSlides(n) {
        showSliders(slideIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    });
});