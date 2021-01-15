"use strict";
$(document).ready(function() {
	$('.slider').slick({
		arrows: true,/*Показ стрелок*/
		dots: true,/*Показ точек*/
		adaptiveHeight: true,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 1,/*Кол-во слайдов за один показ*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/
		speed: 1000,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: false,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: true,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 20,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: true,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются а затемняются*/
		/*asNavFor: ".slider-big",*/    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		// responsive:[{
		// 	breakpoint: 768,Брейкпоинт, на котором можно изменить каие-либо значения
		// 	settings: {
		// 		slidesToShow: 1,
		// 	}
		// },{
		// 	// breakpoint: ;
		// 	settings: {}
		// }],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		/*appendArrows:$('.content'),*/       /*Выводит стрелки в блок с заданным классом*/
		/*appendDots:$('.content'), */        /*Выводит точки в блок с заданным классом*/
	});
}); 