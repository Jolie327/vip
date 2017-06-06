/**
 * Created by admin on 2017/6/1.
 */
var $ = require("../lib/jquery-3.1.1");
$(function () {
    var page = {
        init:function () {
            this.countDown();
            this.deleteGoods();
            this.delGoods();
            this.useDiscount();
        },

        // 倒计时
        countDown:function () {
            $(".list-car .re_shopping").click(function () {
                $(".vip-main-empty-car").hide();
                $(".empty-car-history").hide();
                $(".vip-main-car").show();
                $(".vip-footer-car").show();
                var total = 1200000;
                var timer = setInterval(function () {
                    total-=1000;
                    var minutes = Math.floor(total/(1000*60));
                    var totalSconds = Math.ceil(total-minutes*60*1000);
                    var sconds = Math.floor(totalSconds/1000);
                    function zero(a) {
                        return a = a > 10 ? a : '0' + a;
                    }
                    $(".vip-footer-car .end-time").html(zero(minutes)+":"+zero(sconds));

                    if(total==0){
                        clearInterval(timer);
                        $(".vip-main-empty-car").show();
                        $(".empty-car-history").show();
                        $(".vip-main-car").hide();
                        $(".vip-footer-car").hide();
                    }
                },1000)


            })
        },

        // 空购物车删除物品
        deleteGoods:function () {
            $(".empty-car-history .list-car .close").click(function () {
                var that = $(this);
                that.parent().parent().parent().hide();
            })
        },

        // 有物购物车删除物品
        delGoods:function () {
            $(".vip-main-car .list-car .close").click(function () {
                now = $(this);
                $(".del_goods").show();
                $(".del_goods .no").click(function(){
                    var that = $(this);
                    that.parent().parent().parent().hide();
                });
                $(".del_goods .yes").click(function () {
                    var that = $(this);
                    that.parent().parent().parent().hide();
                    now.parent().parent().parent().hide();
                })
            })
        },

        // 使用礼券
        useDiscount:function () {
            $(".gift-car ").click(function () {
                $(".use_discount").slideToggle();
            })
            $(".confirm-yes").click(function () {
                var that = $(this);
                that.parent().parent().hide();
            })
            $(".close").click(function () {
                var that = $(this);
                that.parent().parent().parent().hide();
            })
        }
    }
    page.init();
})