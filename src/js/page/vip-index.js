/**
 * Created by admin on 2017/6/1.
 */
var $ = require("../lib/jquery-3.1.1.js");
var Swiper = require("../lib/swiper.min.js");

$(function(){

    var page={
        init:function(){
            this.go();
            this.item();
            this.dian();
        },
        go:function(){
            $(window).scroll(function(){
                var sc=$(window).scrollTop();
                var rwidth=$(window).width();
                if(sc>300){
                    $("#goTopBtn").css("display","block");
                    $("#goTopBtn").css("left",(rwidth-60)+"px")
                }else{
                    $("#goTopBtn").css("display","none");
                }
            });
            $("#goTopBtn").click(function(){
                var sc=$(window).scrollTop();
                $('body,html').animate({scrollTop:0},500);
            });
        },
        item:function(){

            new Swiper('.index-mn-pic .swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            });
        },
        dian:function(){
                $(".index-tab li").click(function(){
                    $(this).addClass("shou").siblings().removeClass("shou");
        		});
        }
    };
    page.init();


});
