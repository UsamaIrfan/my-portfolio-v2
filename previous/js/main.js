const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

window.addEventListener('load', function () {
    var el = document.querySelectorAll('img.lightsense');
    Lightense(el, {
        time: 300,
        padding: 40,
        offset: 40,
        keyboard: true,
        cubicBezier: 'cubic-bezier(.2, 0, .1, 1)',
        background: 'rgb(16, 12, 16, 0.5)',
        zIndex: 2147483647
    });
}, false);

$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

var typed = new Typed('.typer', {
    strings: ["React.js Developer", "React-Native Dev.", "Front-end Developer", "Flutter Developer", "Mobile Developer"],
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
  });