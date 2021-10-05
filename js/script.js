$(document).ready(function(){
    $('.photo__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrow-left.svg"</button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/arrow-right.svg"</button>',
    });
});
$(function(){
$('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
});
});