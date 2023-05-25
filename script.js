$(document).ready(function () {
    $('.banner').slick({
        lazyLoad: 'ondemand',
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right' aria-hidden='true'></i></button>"
    });


});
$(document).ready(function () {
    $('.product-slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right' aria-hidden='true'></i></button>",
        responsive: [
            {
              breakpoint: 1025, // Điểm phá vỡ (kích thước màn hình dưới 1024px)
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                // Cấu hình khác khi kích thước màn hình nhỏ hơn 1024px
              }
            },
            {
              breakpoint: 768, // Điểm phá vỡ (kích thước màn hình dưới 768px)
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // Cấu hình khác khi kích thước màn hình nhỏ hơn 768px
              }
            },
            {
              breakpoint: 480, // Điểm phá vỡ (kích thước màn hình dưới 480px)
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // Cấu hình khác khi kích thước màn hình nhỏ hơn 480px
              }
            }
          ]
    })
});


$(document).ready(function () {
    $('.slider-news').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right' aria-hidden='true'></i></button>"
    });


});
   

   
$('#front-gallery').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
    
   

