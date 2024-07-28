 $(".drop__down.invest").click(function(){  
	$(this).toggleClass('visible');
});
  $(".csll__item").click(function(){  
  $(".csll__item").removeClass("check");     
	$(this).toggleClass('check');	
});   
  $(".plans__tabs button").click(function(){  
  $(".plans__tabs button").removeClass("check");     
	$(this).toggleClass('check');	
});   
  $(".planTub__standart").click(function(){  
  $(".standartPlans").addClass("visible");     	
  $(".premiumPlans").removeClass("visible");     	
});   
  $(".planTub__premium").click(function(){  
  $(".standartPlans").removeClass("visible");     	
  $(".premiumPlans").addClass("visible");     	
});   
 
    $(".amount__item-line-row.drop__down").click(function(){    
	$(this).toggleClass('visible');	
});
  $(".amount__drop-item").click(function(){  
  $(".amount__drop-item").removeClass("check");     
	$(this).toggleClass('check');	
});

  function faqList() {
    // Скрыть fgL__unswer при загрузке страницы
    $('.faq__item-answer').hide();

    // Добавить класс checked и показать/скрыть fgL__unswer с плавностью при клике на fgL__body
    $('.faq__item-body').click(function() {
      $(this).toggleClass('open');
      $(this).find('.faq__item-answer').slideToggle('fast');
    });
  }

  // Вызов функции faqList
  faqList();
  
    function SignIn() {
    $('.login__action,.msC__startButton,.start__mining').click(function() {
      $('.modal__overflow-layer').addClass('visible');
      $('.modal__sign-in').addClass('visible');
    });
  }

  SignIn();
  
  function SignUp() {
    $('.reg__action-link').click(function() {
      $('.modal__sign-in').removeClass('visible');
      $('.modal__sign-up').addClass('visible');
    });
  }
    $('.registration__action,.getStart,.sign__up-action,.getStarted').click(function() {
      $('.modal__overflow-layer').toggleClass('visible');
      $('.modal__sign-up').addClass('visible');
    });  

  SignUp();
  
    function closeModal() {
    $('.modal__close').click(function() {
      $('.modal__overflow-layer').removeClass('visible');
      $('.modal__body').removeClass('visible');
    });
  }

  closeModal();
  
  function forgotPass() {
    $('.forgot__action-link').click(function() {
      $('.modal__sign-in').removeClass('visible');
      $('.modal__forgot').addClass('visible');
    });
  }

  forgotPass();  
  
    function depositModal() {
    $('.cSLi__body ').click(function() {      
      $('.modal__overflow-layer,.modal__deposit').addClass('visible');
    });
  }

  depositModal();  
  

  $(".bonus__button,.get__bonus-button,.fP_bonus").click(function(){  
  $(".modal__bonus,.modal__overflow-layer,.bonus__button").toggleClass("visible");     	
});
$(".mobile__button").click(function(){  
  $("body").toggleClass("visible__nav");     	
});  
  $(".dtc__i-plus").click(function() {
    var input = $(this).siblings("input");
    var currentValue = parseFloat(input.val());
    var newValue = currentValue + 1;
    input.val(newValue);
  });

  $(".dtc__i-minus").click(function() {
    var input = $(this).siblings("input");
    var currentValue = parseFloat(input.val());
    var newValue = currentValue - 1;
    if (newValue < 0) {
      newValue = 0;
    }
    input.val(newValue);
  });
 
 
function copyModalAdres() {
  // Выбираем текст для копирования
  var textToCopy = $('.modalAdress').val();

  // Создаем временный элемент textarea для копирования
  var tempTextarea = $('<textarea>');
  tempTextarea.val(textToCopy);
  $('body').append(tempTextarea);

  // Выделяем текст внутри textarea
  tempTextarea.select();
  tempTextarea[0].setSelectionRange(0, 99999); // Для мобильных устройств

  // Копируем текст в буфер обмена
  document.execCommand("copy");

  // Удаляем временный элемент textarea
  tempTextarea.remove();
}

$('.copy__modalAdres').on('click', function() {
  copyModalAdres();
});

$('.modalAdress').off('click').on('click', function() {
  copyModalAdres();
}); 
  function copyAffiliateLink() {
  // Выбираем текст для копирования
  var textToCopy = $('.urls__copylink').text();

  // Создаем временный элемент textarea для копирования
  var tempTextarea = $('<textarea>');
  tempTextarea.val(textToCopy);
  $('body').append(tempTextarea);

  // Выделяем текст внутри textarea
  tempTextarea.select();
  tempTextarea[0].setSelectionRange(0, 99999); // Для мобильных устройств

  // Копируем текст в буфер обмена
  document.execCommand("copy");

  // Удаляем временный элемент textarea
  tempTextarea.remove();
}

// Назначаем обработчик клика на кнопку urls__copy-button
$('.urls__copy-button').click(function() {
  copyAffiliateLink();
});
 
$(".mining__invest-body").click(function(){  
   $(".mining__invest-body").removeClass("select");  		     
   $(this).toggleClass('select');	     
});

$(".mn__reinvest-btn").click(function(){  
   $(".modal__reinvest,.modal__overflow-layer").toggleClass("visible");  		     
}); 
$(".mn__withdrawal-btn").click(function(){  
   $(".modal__withdraw,.modal__overflow-layer").toggleClass("visible");  		     
});
$(".get__bonus").click(function(){  
   $(".modal__bonus,.modal__overflow-layer").toggleClass("visible");  		     
});   
$(".depositNow-action,.dtc__button-row button,.calc__deposit-btn").click(function(){  
   $(".modal__deposit,.modal__overflow-layer").toggleClass("visible");  		     
});
 $(".header__mobileButton").click(function(){  
 $(this).toggleClass('check');	
   $(".header__navigation,.site__navigation").toggleClass("visible");  		     
});

  $(".chooseCoin__button").click(function(){   
   $(".chooseCoin__button").removeClass("check");  		     
   $(this).toggleClass('check');	
});
$('.calc__item-line-row.drop__down').click(function() {
  var isVisible = $(this).hasClass('visible');
  
  $('.calc__item-line-row.drop__down').removeClass('visible');
  
  if (!isVisible) {
    $(this).addClass('visible');
  }
});
 $('.calc__drop-list.you__give .calc__drop-item').click(function() {
  $('.calc__drop-list.you__give .calc__drop-item').removeClass('check'); 
  $(this).toggleClass('check'); 
});
$('.calc__drop-list.you__get .calc__drop-item').click(function() {
  $('.calc__drop-list.you__get .calc__drop-item').removeClass('check'); 
  $(this).toggleClass('check'); 
});
$('.drop__down.invest').click(function() {
  $('.drop__down.invest').toggleClass('visible');   
});
$('.user__cabinet-nav .mobile__button').click(function() {
	  $(this).toggleClass('check'); 
  $('.cabinet__navigation').toggleClass('visible');   
});

 

$(document).ready(function () {
  $('.mnRange').on('click', function () {
    var $clickedButton = $(this);

    // Удалить класс "check" у всех кнопок внутри блока .mnRange__buttons
    $clickedButton.siblings('.mnRange').removeClass('check');

    // Добавить класс "check" только к нажатой кнопке
    $clickedButton.addClass('check');
  });
});
$('.deposit__GroupList li button').click(function() {
  $('.deposit__GroupList li button').removeClass('check'); 
  $(this).toggleClass('check'); 
});
 $('.mobButton,.cabinetNavButton').click(function() {
  $('body').toggleClass('ViewMenu');   
}); 

 $(document).ready(function() {
  $('.hitCopy').click(function() {
    // Получаем значение атрибута data-type
    var referralLink = $('.hitd__data').data('type');
    
    // Копируем значение в кеш
    navigator.clipboard.writeText(referralLink)
      .then(function() {
        // Успешно скопировано
        console.log('Содержимое скопировано в кеш: ' + referralLink);
      })
      .catch(function(err) {
        // Ошибка копирования
        console.error('Не удалось скопировать содержимое в кеш: ', err);
      });
  });
});