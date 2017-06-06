/**
 * Created by admin on 2017/6/1.
 */
var $ = require("../lib/jquery-3.1.1.js");
	var page = {
		init: function() {
			this.label_nav();
		},

			label_nav:function() {
			$('.brands_nav_li').click(function() {
				var bb = $(this).index();
				//		console.log(bb);
				//		淡入淡出
				$(".section_main").eq(bb).fadeIn(1000).siblings(".section_main").fadeOut(1000);

				$(this).addClass("here").siblings().removeClass("here"); //removeClass就是删除当前其他类；只有当前对象有addClass("selected")；siblings()意思就是当前对象的同级元素，removeClass就是删除；
				$(".section_main").hide().eq(bb).show();
			});
		}
	}

	page.init();
