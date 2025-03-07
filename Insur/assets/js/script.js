
const header = document.querySelector('.page-header');
const toggleClass = 'is-sticky';
window.addEventListener('scroll', () => {
    header.classList.toggle(toggleClass, document.documentElement.scrollTop > 10);
});


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
        }
    });
});


var totalSlides = 5;
var progressStep = 100 / totalSlides;

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: true,
    // },
    navigation: {
        nextEl: "#nextBtn",
        prevEl: "#prevBtn",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    },
    on: {
        init: function () {
            updateProgressBar(1);
        },
        slideChangeTransitionEnd: function () {
            let currentIndex = (swiper.realIndex % totalSlides) + 1;
            updateProgressBar(currentIndex);
        }
    }
});

function updateProgressBar(currentIndex) {
    let progress = progressStep * currentIndex;

    if (currentIndex === 1) {
        progress = progressStep;
    }

    document.getElementById("progressBar").style.width = progress + "%";
}

document.addEventListener("DOMContentLoaded", function () {
    updateProgressBar(1);
});


document.addEventListener("DOMContentLoaded", function () {
    const balanceRange = document.getElementById("balanceRange");
    const balanceValue = document.getElementById("balanceValue");

    function updateSliderFill() {
        const min = balanceRange.min;
        const max = balanceRange.max;
        const val = balanceRange.value;
        balanceRange.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
    }

    balanceValue.textContent = "$" + balanceRange.value;
    updateSliderFill();

    balanceRange.addEventListener("input", function () {
        balanceValue.textContent = "$" + this.value;
        updateSliderFill();
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("backToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            backToTopBtn.classList.add("show");
            backToTopBtn.classList.remove("hide");
        } else {
            backToTopBtn.classList.add("hide");
            setTimeout(() => backToTopBtn.classList.remove("show"), 300); 
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
