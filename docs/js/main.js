$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock-brg');
    })
})

$(document).ready(function() {
  $('.flex__link').click(function(event) {
    $('.bg-color-form').addClass('hidden');
  })
})

// отмена стандартного поведения ссылок
$(function() {
  let link = $('.content a');
  link.on('click', function (event) {
    event.preventDefault();
  });
  // let dink = $('body a');
  // dink.on('click', function(event) {
  //   event.preventDefault():
  // })
});




// для добалвения рабоих форм на другие слайдеры скопируйте фрагмент и замените цифры

// адреса ПК
$(document).ready(function () {
  $('.header__phone').click(function (event) {
    event.preventDefault();
    $('.form-adress').addClass('active');
    $('.bg-color-form').addClass('hidden');
    $('body').addClass('lock');
  })
})


// "На первое фото"
$(document).ready(function () {
  $('.first').click(function (event) {
    $('.bg-color-form').removeClass('hidden');
  });
  $('.flex__link.first').click(function(event) {
    $('bg-color-form').removeClass('hidden');
  })
})

// форма "Характеристика" 1-5
$(document).ready(function () {
  $('#charact-1').click(function(event) {
    $('#form-charact-1').addClass('active');
    $('body').addClass('lock');
  });
  $('#charact-2').click(function(event) {
    $('#form-charact-2').addClass('active');
    $('body').addClass('lock');
  });
  $('#charact-3').click(function(event) {
    $('#form-charact-3').addClass('active');
    $('body').addClass('lock');
  });
  $('#charact-4').click(function(event) {
    $('#form-charact-4').addClass('active');
    $('body').addClass('lock');
  });
  $('#charact-5').click(function(event) {
    $('#form-charact-5').addClass('active');
    $('body').addClass('lock');
  });
  $('#charact-6').click(function(event) {
    $('#form-charact-6').addClass('active');
    $('body').addClass('lock');
  });
  $('#charact-7').click(function(event) {
    $('#form-charact-7').addClass('active');
    $('body').addClass('lock');
  });
  $('#charact-8').click(function(event) {
    $('#form-charact-8').addClass('active');
    $('body').addClass('lock');
  });
  $('#charact-9').click(function(event) {
    $('#form-charact-9').addClass('active');
    $('body').addClass('lock');
  });
  $('#charact-10').click(function(event) {
    $('#form-charact-10').addClass('active');
    $('body').addClass('lock');
  });
})


// форма "Приобрести" 1-5
$(document).ready(function () {
  $('#buy-1').click(function(event) {
    $('#form-buy-1').addClass('active');
    $('body').addClass('lock');
  });
  $('#buy-2').click(function(event) {
    $('#form-buy-2').addClass('active');
    $('body').addClass('lock');
  });
  $('#buy-3').click(function(event) {
    $('#form-buy-3').addClass('active');
    $('body').addClass('lock');
  });
  $('#buy-4').click(function(event) {
    $('#form-buy-4').addClass('active');
    $('body').addClass('lock');
  });
  $('#buy-5').click(function(event) {
    $('#form-buy-5').addClass('active');
    $('body').addClass('lock');
  });
  $('#buy-6').click(function(event) {
    $('#form-buy-6').addClass('active');
    $('body').addClass('lock');
  });
  $('#buy-7').click(function(event) {
    $('#form-buy-7').addClass('active');
    $('body').addClass('lock');
  });
  $('#buy-8').click(function(event) {
    $('#form-buy-8').addClass('active');
    $('body').addClass('lock');
  });
  $('#buy-9').click(function(event) {
    $('#form-buy-9').addClass('active');
    $('body').addClass('lock');
  });
  $('#buy-10').click(function(event) {
    $('#form-buy-10').addClass('active');
    $('body').addClass('lock');
  });
})


// форма "Запись на замер" 1-5
$(document).ready(function () {
  $('#sample-1').click(function(event) {
    $('#form-sample-1').addClass('active');
    $('body').addClass('lock');
  });
  $('#sample-2').click(function(event) {
    $('#form-sample-2').addClass('active');
    $('body').addClass('lock');
  });
  $('#sample-3').click(function(event) {
    $('#form-sample-3').addClass('active');
    $('body').addClass('lock');
  });
  $('#sample-4').click(function(event) {
    $('#form-sample-4').addClass('active');
    $('body').addClass('lock');
  });
  $('#sample-5').click(function(event) {
    $('#form-sample-5').addClass('active');
    $('body').addClass('lock');
  });
  $('#sample-6').click(function(event) {
    $('#form-sample-6').addClass('active');
    $('body').addClass('lock');
  });
  $('#sample-7').click(function(event) {
    $('#form-sample-7').addClass('active');
    $('body').addClass('lock');
  });
  $('#sample-8').click(function(event) {
    $('#form-sample-8').addClass('active');
    $('body').addClass('lock');
  });
  $('#sample-9').click(function(event) {
    $('#form-sample-9').addClass('active');
    $('body').addClass('lock');
  });
  $('#sample-10').click(function(event) {
    $('#form-sample-10').addClass('active');
    $('body').addClass('lock');
  });
})


// "Обратный звонок" 1-5
$(document).ready(function () {
  $('#call-back-1').click(function(event) {
    $('#form-call-back-1').addClass('active');
    $('body').addClass('lock');
  });
  $('#call-back-2').click(function(event) {
    $('#form-call-back-2').addClass('active');
    $('body').addClass('lock');
  });
  $('#call-back-3').click(function(event) {
    $('#form-call-back-3').addClass('active');
    $('body').addClass('lock');
  });
  $('#call-back-4').click(function(event) {
    $('#form-call-back-4').addClass('active');
    $('body').addClass('lock');
  });
  $('#call-back-5').click(function(event) {
    $('#form-call-back-5').addClass('active');
    $('body').addClass('lock');
  });
  $('#call-back-6').click(function(event) {
    $('#form-call-back-6').addClass('active');
    $('body').addClass('lock');
  });
  $('#call-back-7').click(function(event) {
    $('#form-call-back-7').addClass('active');
    $('body').addClass('lock');
  });
  $('#call-back-8').click(function(event) {
    $('#form-call-back-8').addClass('active');
    $('body').addClass('lock');
  });
  $('#call-back-9').click(function(event) {
    $('#form-call-back-9').addClass('active');
    $('body').addClass('lock');
  });
  $('#call-back-10').click(function(event) {
    $('#form-call-back-10').addClass('active');
    $('body').addClass('lock');
  });
})




// Формы моб версия

$(document).ready(function () {
  // магазины
  $('#shop-min').click(function(event) {
    event.preventDefault();
    $('.form-shop').addClass('active');
    $('body').addClass('lock');
  });
  // купить
  $('#buy-min').click(function(event) {
    event.preventDefault();
    $('#form-buy-1').addClass('active');
    $('body').addClass('lock');
  });
  // замер
  $('#sample-min').click(function(event) {
    event.preventDefault();
    $('#form-sample-1').addClass('active');
    $('body').addClass('lock');
  });
  // фильтр
  $('#filter-min').click(function (event) {
    event.preventDefault();
  })
})


// КНОПКА закрытия формы
$(document).ready(function () {
  $('.form-btn-cancel').click(function(event) {
    $('.form-charact').removeClass('active');
    $('.form-shop').removeClass('active');
    $('.form-buy').removeClass('active');
    $('.form-call-back').removeClass('active');
    $('.form-sample').removeClass('active');
    $('.form-adress').removeClass('active');
    $('body').removeClass('lock');
    $('.bg-color-form').removeClass('hidden');
  })
})

// ЗАКРЫТИЕ формы по нажатию вне поля формы
$(document).mouseup(function (e){
  var div = $('.form-wrapper');
  if (!div.is(e.target) 
      && div.has(e.target).length === 0) {
    div.removeClass('active');
    $('body').removeClass('lock');
    $('.form-charact').removeClass('active');
    $('.form-sample').removeClass('active');
    $('.form-call-back').removeClass('active');
    $('.form-buy').removeClass('active');
    $('.form-shop').removeClass('active');
    $('.form-adress').removeClass('active');
    $('.bg-color-form').removeClass('hidden');
  }
})


// отмена затемнения фона при открытии формы
$(document).ready(function () {
  $('#call').click(function (event) {
    $('.bg-color-form').removeClass('hidden');
  });
  $('#filter-min').click(function (event) {
    $('.bg-color-form').removeClass('hidden');
  });
})


// кнопка гамбургер бокового меню для КАЖДОГО из слайдеров
//       при добавлении скопировать блок и изменить цифры 
$(document).ready(function () {
  $('#flex__nav-1').click(function(event) {
    $('#flex__menu-1,#burg-svg-1').toggleClass('active');
    $('#price-1').toggleClass('hidden');
  })
  $('#flex__nav-2').click(function(event) {
    $('#flex__menu-2,#burg-svg-2').toggleClass('active');
    $('#price-2').toggleClass('hidden');
  })
  $('#flex__nav-3').click(function(event) {
    $('#flex__menu-3,#burg-svg-1').toggleClass('active');
    $('#price-3').toggleClass('hidden');
  })
  $('#flex__nav-4').click(function(event) {
    $('#flex__menu-4,#burg-svg-1').toggleClass('active');
    $('#price-4').toggleClass('hidden');
  })
  $('#flex__nav-5').click(function(event) {
    $('#flex__menu-5,#burg-svg-1').toggleClass('active');
    $('#price-5').toggleClass('hidden');
  })
  $('#flex__nav-6').click(function(event) {
    $('#flex__menu-6,#burg-svg-1').toggleClass('active');
    $('#price-6').toggleClass('hidden');
  })
  $('#flex__nav-7').click(function(event) {
    $('#flex__menu-7,#burg-svg-1').toggleClass('active');
    $('#price-7').toggleClass('hidden');
  })
  $('#flex__nav-8').click(function(event) {
    $('#flex__menu-8,#burg-svg-1').toggleClass('active');
    $('#price-8').toggleClass('hidden');
  })
  $('#flex__nav-9').click(function(event) {
    $('#flex__menu-9,#burg-svg-1').toggleClass('active');
    $('#price-9').toggleClass('hidden');
  })
  $('#flex__nav-10').click(function(event) {
    $('#flex__menu-10,#burg-svg-1').toggleClass('active');
    $('#price-10').toggleClass('hidden');
  })
})

$(document).ready(function() {
  $('.flex__list li').click(function(event) {
    $('.price').removeClass('hidden');
    $('.flex__menu').removeClass('active');
    $('.flex__burg svg').removeClass('active');
  })
})





 
// маска формы ввода телефона
$(function() {
  //задание заполнителя с помощью параметра placeholder
  $(".phone").mask("+7 (999) 999-99-99", {placeholder: "+7 (xxx) xxx-xx-xx" });
});








// СЛАЙДЕРЫ

// 4. копируем ИЗ КОДА(не отсюда) фрагмент ниже
// new SimpleAdaptiveSlider('#slider-1', {
//   loop: true,
//   swipe: true,
// });
// можно с коментарием
// 5. вместо "#slider-1" ставим цифру соответствующего порядка как и в предыдущем файле (index.html)



document.addEventListener('DOMContentLoaded', function () {
  // инициализация 1 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-1', {
    loop: true,
    swipe: true,
  });
  // инициализация 2 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-2', {
    loop: true,
    swipe: true,
  });
  // инициализация 3 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-3', {
    loop: true,
    swipe: true,
  });
  // инициализация 4 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-4', {
    loop: true,
    swipe: true,
  });
  // инициализация 5 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-5', {
    loop: true,
    swipe: true,
  });
  // инициализация 6 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-6', {
    loop: true,
    swipe: true,
  });
  // инициализация 7 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-7', {
    loop: true,
    swipe: true,
  });
  // инициализация 8 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-8', {
    loop: true,
    swipe: true,
  });
  // инициализация 9 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-9', {
    loop: true,
    swipe: true,
  });
  // инициализация 10 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-10', {
    loop: true,
    swipe: true,
  });




});


$(document).ready(function () {
  $('.slider a').click(function(event) {
    event.preventDefault();
  })
})





// ФИЛЬТР

// кнопка
// ПК
$(document).ready(function () {
  $('#fil-btn').click(function(event) {
    $('.fil__btn').toggleClass('active');
    $('.fil__menu').toggleClass('active');
    $('.fill-burger').toggleClass('active');
    $('.filter').toggleClass('visible');
    // $('body').toggleClass('lock-brg');

  }); 
  // планшет
  $('#fil-btn-min').click(function(event) {
    $('.fil__btn-min').toggleClass('active');
    $('.fil__menu').toggleClass('active');
    $('.fill-burger-min').toggleClass('active');
    $('.filter').toggleClass('visible');
  });
  // моб
  $('.filter-min').click(function(event) {
    $('.filter-img').toggleClass('active');
    $('.fil__menu').toggleClass('active');
    $('.filter').toggleClass('visible');
    $('body').toggleClass('lock-brg');
  })
})



$('#filter-menu').on('change', 'input[type=checkbox]', function() {
  var $lis = $('.products > div'),
  $checked = $('input:checked');

  if ($checked.length){							
    var selector = '';
    $checked.each(function(index,element){                            
        selector += "[data-category~='" + element.id + "']";
      
    });                        
    $lis.hide();                        
    $lis.filter(selector).show();		
    $('.btn-circle').addClass('visible');
  }else{
    $lis.show();
    $('.btn-circle').removeClass('visible');
  };
});

