let burger = document.querySelector('.BurgerMenu');
let nav = document.querySelector('.nav__list');
let lang = document.querySelector('.lang__item');
burger.addEventListener('click', function () {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
});
lang.addEventListener('click', function () {
    lang.classList.toggle('active')
});

$(document).ready(function(){
    $("#home-slider").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 3500,
        smartSpeed: 1500,
        loop: true,
    }
    );
    let owl = $('#cert-slider');
    owl.owlCarousel({
        items: 5,
        margin: 28,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
    // Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });

    let products = $('.products-slider');
    products.owlCarousel({
        items: 5,
        margin: 20,
        loop: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    }
    );
    // Go to the next item
    $('.products-next').click(function() {
        products.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.products-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        products.trigger('prev.owl.carousel', [300]);
    });

  });



