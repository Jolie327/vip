/**
 * Created by admin on 2017/6/1.
 */
var $=require("../lib/jquery-3.1.1.js");
$(function () {
    var page = {
        init: function () {
             this.validate_phone();
             this.validate_code();
        },
        validate_phone: function () {
            var pattern = /^1[34578]\d{9}$/;
            $(".write-numer").on("blur", function () {
                var phone_val = $('.write-numer').val();
                if (pattern.test(phone_val)) {
                    $(".prompt_phone").html("bingo");
                    //location.href = "./index. html";
                    return true;
                } else {
                    $(".prompt_phone").html("terrible");
                    return false;
                }
            });
        },
        validate_code: function () {
                $(".get-code").on("click", function () {
                    var phone_val = $('.write-numer').val();
                    var aa = $(".prompt_phone").html();
                    if(aa=="bingo"){
                        $.ajax({
                            url: 'http://www.luckykai.com/orange/index.php/Home/index/test',
                            type: 'get',
                            dataType: 'jsonp',
                            async: true,
                            success: function (data) {
                                var a = data.data;
                                $(".write-code").val(a);
                            }
                        });

                        var intDiff = parseInt(5); //倒计时总秒数量
                        function timer(intDiff) {
                            var timer;
                            var code = "重新获取验证码";
                            var code_val = $(".get-code").val();
                            getTimer();
                            function getTimer() {
                                timer = setInterval(function () {
                                    var day = 0, hour = 0, minute = 0, second = 0; //时间默认值
                                    if (intDiff > 0) {
                                        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
                                    }
                                    if (minute <= 9) minute = '0' + minute;
                                    if (second <= 9) second = '0' + second;
                                    $('.get-code').html(second + '秒').addClass("disabled");
                                    if (parseInt(second) == 0) {
                                        clearInterval(timer);
                                        $('.get-code').html(code).removeClass("disabled");
                                    }
                                    intDiff--;
                                }, 1000)
                            }
                        }
                        timer(intDiff);
                    }else{
                        return false;
                    }
                });
        }
    };
    page.init();
});
