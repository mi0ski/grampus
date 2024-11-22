// slider
$(function () {
  $('.slider__items').slick({
      prevArrow: '<button class="slick-btn slick-prev"><img src="./img/icons/arrow-prew.svg" alt=""></button>',
      nextArrow: '<button class="slick-btn slick-next"><img src="./img/icons/arrow-next.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
      ]
  });

  $('.reviews__slider-items').slick({
    slidesToShow: 2,
    prevArrow: '<button class="slick-btn slick-prev slick-prev-revies"><img src="./img/icons/arrow-prew.svg" alt=""></button>',
    nextArrow: '<button class="slick-btn slick-next slick-next-revies"><img src="./img/icons/arrow-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });

  $('.documents__slider-items').slick({
    slidesToShow: 4,
    prevArrow: '<button class="slick-btn slick-prev slick-prev-revies"><img src="./img/icons/arrow-prew.svg" alt=""></button>',
    nextArrow: '<button class="slick-btn slick-next slick-next-revies"><img src="./img/icons/arrow-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1216,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  Fancybox.bind('[data-fancybox="contact-form"], [data-fancybox="contact-form-2"], [data-fancybox="contact-form-3"], [data-fancybox="contact-form-4"], [data-fancybox="contact-form-5"], [data-fancybox="contact-form-6"], [data-fancybox="contact-form-7"], [data-fancybox="contact-form-8"]', {
    closeButton: false,  // Отключаем стандартный крестик
    loop: false,         // Отключаем переключение между окнами
    dragToClose: true    // Оставляем возможность закрывать окно перетаскиванием
  });

  const closeButton = document.querySelector('.modal-close');
    closeButton.addEventListener('click', function () {
      Fancybox.close();  // Закрываем Fancybox при нажатии на кнопку
    });
});