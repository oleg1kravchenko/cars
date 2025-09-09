$(document).ready(function() {

	/*form*/

	// стайлер для select
	 $('.item-input select').styler();

	 /*input file*/
		$("input[type='file']").change(function(){
			var filename_text = $(this).parent().siblings(".name-upload");
			var filename = $(this).val().replace(/.*\\/, "");
			filename_text.html(filename);
		});

	//redesign

	$('.nav-page__wrap').each(function() {
		var currentTab = $(this);
		var initalTextTab = currentTab.find(".active a").html();
		currentTab.find(".nav-page__btn").html(initalTextTab);
}); 
$('.nav-page__btn').click(function() {
	$(this).toggleClass("active");
	$(this).siblings(".nav-page__list").slideToggle(200);

}); 



setTimeout(function () {
		$(".preloader").addClass("loaded");
	}, 500); 


	//paralax
	function parallaxEffect() {
        $('.billbord-main').each(function() {
            var scrolled = $(window).scrollTop();
            var offset = $(this).offset().top;
            var windowHeight = $(window).height();

            if (scrolled + windowHeight > offset && scrolled < offset + windowHeight) {
                var parallaxSpeed = 0.07;
                var yPos = -(scrolled - offset) * parallaxSpeed;
                $(this).find('.billbord-main__image').css('transform', 'translateY(' + yPos + 'px)');
            }
        });
    }

    $(window).on('scroll', parallaxEffect);
    $(window).on('resize', parallaxEffect);

    // Инициализация эффекта при загрузке страницы
    parallaxEffect();

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
    	return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
        	$('.header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


  $('form').each(function() {
	var $form = $(this);

	// Функция установки атрибутов
	function setAttributes() {
		var selectedValue = $form.find('input[name="radio"]:checked').val();

		if (selectedValue === 'phone') {
			$form.find('.item-form_phone input').attr('required', 'required').attr('aria-required', 'true');
			$form.find('.item-form_email input').removeAttr('required').attr('aria-required', 'false');
		} else if (selectedValue === 'email') {
			$form.find('.item-form_email input').attr('required', 'required').attr('aria-required', 'true');
			$form.find('.item-form_phone input').removeAttr('required').attr('aria-required', 'false');
		}
	}

	// Начальная проверка
	setAttributes();

	// Событие при изменении состояния радио-кнопок
	$form.find('input[name="radio"]').on('change', function() {
		setAttributes();
	});

	// Первоначальное триггерное событие для установки атрибутов на основе выбранной по умолчанию радио-кнопки
	$form.find('input[name="radio"]:checked').trigger('change');
});

$(".item-history__head").click(function() {
    $(this).parent().toggleClass("active");
    $(this).siblings().slideToggle(200);
    $(this).parent().siblings(".item-history").removeClass("active");
    $(this).parent().siblings(".item-history").find(".item-history__content").slideUp(200);
  });

  $(".btn-option").click(function(e) {
	e.preventDefault();
    $(this).toggleClass("active");
  });



	//кнопка sandwich
	$(".btn-menu").click(function() {
		
		$(".menu-dropdown").addClass("firstopened");
		if ($(".menu-dropdown").hasClass("active")) {
			$(".menu-dropdown").removeClass("active");
			$(".menu-overlay").fadeOut(200);
			$(".navigation__submenu").removeClass("active");
			$(".navigation__dropdown").removeClass("active");
			$(".navigation__haschild > a").removeClass("active");
			$(".submenu__haschild > a").removeClass("active");
			$("body").removeClass("body_menu");
			$(".btn-menu").removeClass("active");
		} else {
			$(".menu-dropdown").addClass("active");
			$(".menu-overlay").fadeIn(200);
			$("body").addClass("body_menu");
			$(".btn-menu").addClass("active");

		}
	});

   // Hover-эффект

   $(".list-subnavigation a").hover(
	function () {
		$(".list-subnavigation a, .navigation__content .navigation__title").not(this).css("color", "#7C7C7C");
	},
	function () {
		$(".list-subnavigation a, .navigation__content .navigation__title").css("color", "");
	}
);

   $(".menu-dropdown__contacts *").hover(
	function () {
		$(".menu-dropdown__contacts *, .menu-dropdown__title").not(this).css("color", "#7C7C7C");
	},
	function () {
		$(".menu-dropdown__contacts *, .menu-dropdown__title").css("color", "");
	}
);


   $(".menu > li > a, .navigation > li > a").hover(
	function () {
		$(".menu > li > a, .navigation > li > a").not(this).css("color", "#7C7C7C");
	},
	function () {
		if (!$(".navigation__haschild > a.active, .submenu__haschild > a.active").length) {
			$(".menu > li > a, .navigation > li > a").css("color", "");
		}
	}
);

$(".navigation__submenu > ul > li > a").hover(
	function () {
		$(".navigation__submenu > ul > li > a").not(this).css("color", "#7C7C7C");
	},
	function () {
		if (!$(".submenu__haschild > a.active").length) {
			$(".navigation__submenu > ul > li > a").css("color", "");
		}
	}
);

// Клик на родительский пункт
$(".navigation__haschild > a").click(function (e) {
	e.preventDefault();

	$(this).parent().siblings().find(".navigation__submenu").removeClass("active");
	$(this).parent().siblings().find("a").removeClass("active");

	if ($(this).siblings(".navigation__submenu").hasClass("active")) {
		$(this).siblings(".navigation__submenu").removeClass("active");
		$(this).removeClass("active");
		$(".menu > li > a, .navigation > li > a").css("color", "");
	} else {
		$(this).siblings(".navigation__submenu").addClass("active");
		$(this).addClass("active");
		$(".menu > li > a, .navigation > li > a").not(this).css("color", "#7C7C7C");
	}
});

// Клик на подпункт
$(".submenu__haschild > a").click(function (e) {
	e.preventDefault();

	$(this).parent().siblings().find(".navigation__dropdown").removeClass("active");
	$(this).parent().siblings().find("a").removeClass("active");

	if ($(this).siblings(".navigation__dropdown").hasClass("active")) {
		$(this).siblings(".navigation__dropdown").removeClass("active");
		$(this).removeClass("active");
		$(".navigation__submenu > ul > li > a").css("color", "");
	} else {
		$(this).siblings(".navigation__dropdown").addClass("active");
		$(this).addClass("active");
		$(".navigation__submenu > ul > li > a").not(this).css("color", "#7C7C7C");
	}
});

	$(".back-menu").click(function() {
		$(this).parent().removeClass("active");
	});

	$(".menu-overlay").click(function() {
		$(".menu-dropdown").removeClass("active");
		$(".menu-overlay").fadeOut(200);
		$(".btn-menu").removeClass("active");
		$(".navigation__submenu").removeClass("active");
		$(".navigation__dropdown").removeClass("active");
		$(".navigation__haschild > a").removeClass("active");
		$(".submenu__haschild > a").removeClass("active");
		$("body").removeClass("body_menu");
	});

	//слайдер

	$('.slider-container').each(function() {
        var sliderContainer = $(this);
        var thumbsSwiper = new Swiper(sliderContainer.find('.swiper-thumbs')[0], {
            spaceBetween: 20,
            slidesPerView: 3,
            freeMode: true,
        });

        var mainSwiper = new Swiper(sliderContainer.find('.swiper-billbord')[0], {
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: thumbsSwiper,
            },
        });

        // Функция для обновления текста в зависимости от активного слайда
        function updateText(index) {
            sliderContainer.siblings().find('.billbord__text-items .title-middle').hide().eq(index).show();
        }

        // Инициализация текста при загрузке
        updateText(mainSwiper.activeIndex);

        // Обработчик события смены слайда
        mainSwiper.on('slideChange', function() {
            updateText(mainSwiper.activeIndex);
        });
    });

	  var swiper3 = new Swiper(".swiper-gallery", {
		lazy: { loadPrevNext: true },
        effect: "slide",
        scrollbar: { el: ".swiper-scrollbar", hide: false, draggable: true },
        freeMode: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        breakpoints: { 1200: { spaceBetween: 40 } },
	  });

	  var swiper3 = new Swiper(".swiper-services", {
		lazy: { loadPrevNext: true },
        effect: "slide",
        scrollbar: { el: ".swiper-scrollbar", hide: false, draggable: true },
        freeMode: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        breakpoints: { 1200: { spaceBetween: 52, slidesPerView: 4 } },
	  });

	  if ($('.swiper-main').length > 0) {
		let swiper4;

		function initSwiper() {
		  const windowWidth = window.innerWidth;
		
		  if (windowWidth <= 1200) {
			if (!swiper4) {
			  swiper4 = new Swiper(".swiper-main", {
				lazy: { loadPrevNext: true },
				effect: "slide",
				scrollbar: { el: ".swiper-scrollbar", hide: false, draggable: true },
				freeMode: true,
				slidesPerView: "auto",
				spaceBetween: 20,
				breakpoints: { 1200: { spaceBetween: 52, slidesPerView: 3 } },
			  });
			}
		  } else {
			if (swiper4) {
			  swiper4.destroy(true, true);
			  swiper4 = null;
			}
		  }
		}
		
		initSwiper();
		window.addEventListener('resize', initSwiper);
  
	  }


	  $('.swiper-project').each(function(){
		var swiper5 = new Swiper(this, {
			slidesPerView: 1,
			observer: true,
			observeParents: true,
			loop: true,
			speed: 1000,
			navigation: {
				nextEl: (this, ".btn-swiper_next"),
				prevEl: (this, ".btn-swiper_prev")
			}
			});
			
	});
	$('.swiper-info').each(function(){
		var swiper6 = new Swiper(this, {
			slidesPerView: 1,
			loop: true,
			effect: "fade",
			navigation: {
				nextEl: (this, ".btn-swiper_next"),
				prevEl: (this, ".btn-swiper_prev")
			}
			});
			
	});

	$('.swiper-banner').each(function(){
		var swiper7 = new Swiper(this, {
			slidesPerView: 1,
			loop: true,
			effect: "fade",
			navigation: {
				nextEl: (this, ".btn-swiper_next"),
				prevEl: (this, ".btn-swiper_prev")
			}
			});
			
	});

	$('.swiper-article').each(function(){
		var swiper8 = new Swiper(this, {
			slidesPerView: 1,
			loop: true,
			navigation: {
				nextEl: (this, ".arrow-swiper_next"),
				prevEl: (this, ".arrow-swiper_prev")
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			  },
			});
			
	});

	$('.swiper-photos').each(function(){
		var swiper9 = new Swiper(this, {
			slidesPerView: 1,
			loop: false,
			navigation: {
				nextEl: (this, ".arrow-swiper_next"),
				prevEl: (this, ".arrow-swiper_prev")
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			  },
			});
			
	});

	if ($('.swiper-service').length > 0) {
		let swiper10;

		function initSwiper2() {
		  const windowWidth = window.innerWidth;
		
		  if (windowWidth <= 1200) {
			if (!swiper10) {
				swiper10 = new Swiper(".swiper-service", {
				lazy: { loadPrevNext: true },
				effect: "slide",
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				  },
				freeMode: true,
				slidesPerView: 1,
				spaceBetween: 0,
				breakpoints: { 1200: { spaceBetween: 52, slidesPerView: 3 } },
			  });
			}
		  } else {
			if (swiper10) {
				swiper10.destroy(true, true);
			  swiper10 = null;
			}
		  }
		}
	
		initSwiper2();
		window.addEventListener('resize', initSwiper2);
	}

	$('.swiper-banners').each(function(){
		var swiper11 = new Swiper(this, {
			slidesPerView: 1,
			loop: false,
			navigation: {
				nextEl: (this, ".btn-swiper_next"),
				prevEl: (this, ".btn-swiper_prev")
			},
			
	});
});

var swiper12 = new Swiper(".swiper-menu", {
	lazy: { loadPrevNext: true },
	effect: "slide",
	scrollbar: { el: ".swiper-menu .swiper-scrollbar", hide: false, draggable: true },
	freeMode: true,
	slidesPerView: "auto",
	spaceBetween: 10,
	breakpoints: { 
		2200: { spaceBetween: 40 },
		801: { spaceBetween: 20 }
	 },
  });

	  

	jQuery('.tabs-wrap').each(function() {
		var currentTab = $(this);
		var initalTextTab = currentTab.find(".active a").html();
		currentTab.find(".btn-tab").html(initalTextTab);
}); 
$('.btn-tab').click(function() {
	$(this).toggleClass("active");
	$(this).siblings(".tabs").slideToggle(200);

}); 

$('.tabs a').click(function(e) {
    e.preventDefault();
    var textTab = $(this).html();
    $(".btn-tab").html(textTab);
		$(".btn-tab").removeClass("active");

    $('.tabs li').removeClass('active');
    $(this).parent().addClass('active');

    var tab = $(this).data('tab');

    if (tab === 'all') {
        $('.item-option').fadeIn(200);
    } else {
        $('.item-option').fadeOut(0);
        $('.item-option[data-product="' + tab + '"]').fadeIn(200);
    }

	{
		if ($(window).width() < 1200) { 
			$(this).parents(".tabs").slideUp(200);
		}
	  }
});


	$(".input-phone").mask("+7 (999) 999-99-99");

	$('form').each(function() {
        var $form = $(this);

        // Функция переключения полей ввода
        function toggleTelegramInput() {
            if ($form.find('.radio_tg input').is(':checked')) {
                $form.find('.item-form_email').fadeOut(0);
                $form.find('.item-form_telegram').fadeIn(200);
            } else {
                $form.find('.item-form_telegram').fadeOut(0);
                $form.find('.item-form_email').fadeIn(200);
            }
        }

        // Начальная проверка
        toggleTelegramInput();

        // Событие при изменении состояния радио-кнопок
        $form.find('input[name="radio"]').change(function() {
            toggleTelegramInput();
        });
    });


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>



	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
		animationEffect: "fade", // Устанавливаем тип анимации
		animationDuration: 500, // Длительность анимации в миллисекундах
		afterShow: function(instance, current) {
		  // Здесь можно добавить дополнительные действия после отображения окна
		}
	});
	

	$(".fancybox-modal").fancybox({
		autoFocus: false,
		backFocus: false,
		baseClass: "fancy-main",
		animationEffect: "fade", // Устанавливаем тип анимации
		animationDuration: 500, // Длительность анимации в миллисекундах
		afterShow: function(instance, current) {
		  // Здесь можно добавить дополнительные действия после отображения окна
		}
	});

	$(".fancybox-gallery").fancybox({
        autoFocus: false,
        backFocus: false,
		baseClass: "fancy-gallery",
        animationEffect: "fade",
        animationDuration: 500,
        beforeShow: function(instance, current) {
            if (!$('#fancybox-dots').length) {
                createDots(instance);
            }
            updateDots(current.index);
        },
        beforeClose: function(instance, current) {
            $('#fancybox-dots').remove();
        }
    });

		/*share*/
		$(".fancybox-main").fancybox({
			autoFocus: false,
			backFocus: false,
			baseClass: "fancy-page",
		});

    function createDots(instance) {
        var total = instance.group.length;
        var $dots = $('<div id="fancybox-dots" class="fancybox-dots"></div>');
        
        for (var i = 0; i < total; i++) {
            $dots.append('<div class="fancybox-dot" data-index="' + i + '"></div>');
        }

        instance.$refs.inner.append($dots);

        $('.fancybox-dot').on('click', function() {
            var index = $(this).data('index');
            $.fancybox.getInstance().jumpTo(index);
        });
    }

    function updateDots(currentIndex) {
        $('.fancybox-dot').removeClass('active');
        $('.fancybox-dot').eq(currentIndex).addClass('active');
    }

	$(".fancybox-video").fancybox({
		autoFocus: false,
		backFocus: false,
		baseClass: "fancy-video",
		animationEffect: "fade", // Устанавливаем тип анимации
		animationDuration: 500, // Длительность анимации в миллисекундах
		afterShow: function(instance, current) {
		  // Здесь можно добавить дополнительные действия после отображения окна
		}
	});

	$('#modal-callback .btn-main, .consultation__content form .btn-main').click(function(e) {
		e.preventDefault();
		$.fancybox.close(true);
		$(this).toggleClass("active");
		$.fancybox.open({
			src  : '#modal-success',
			type: 'inline',
			touch: false,
			autoFocus: false,
			backFocus: false,
			baseClass: "fancy-main",
			animationEffect: "fade", // Устанавливаем тип анимации
			animationDuration: 500, // Длительность анимации в миллисекундах
			afterShow: function(instance, current) {
			// Здесь можно добавить дополнительные действия после отображения окна
			}
		  });
	}); 

	$('#modal-offer .btn-main').click(function(e) {
		e.preventDefault();
		$.fancybox.close(true);
		$(this).toggleClass("active");
		$.fancybox.open({
			src  : '#modal-error',
			type: 'inline',
			touch: false,
			autoFocus: false,
			backFocus: false,
			baseClass: "fancy-main",
			animationEffect: "fade", // Устанавливаем тип анимации
			animationDuration: 500, // Длительность анимации в миллисекундах
			afterShow: function(instance, current) {
			// Здесь можно добавить дополнительные действия после отображения окна
			}
		  });
	}); 
	


	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();


  const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("active");
		}
	})
	
	}, {
		threshold: 0.9
	})
	
	document.querySelectorAll(".animation, .anim").forEach(item => {
		observer.observe(item)
	})

