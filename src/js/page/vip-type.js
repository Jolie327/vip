
 var $=require("../lib/jquery-3.1.1.js");
 var page={
	init:function(){
		this.tab();
	},
	tab:function(){
		$(".classify_li").click(function(){
			var aa = $(this).index();
			$(this).addClass("color").siblings().removeClass();
			$(".warp").hide().eq(aa).show();

		})
	}
	
}
page.init();