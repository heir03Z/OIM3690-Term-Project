$(document).ready(function() {
    "use strict";
    //wap-nav
    (function() {
        var nav_btn = $(".wap-menu");
        var nav_box = $(".wap-sub");
        nav_btn.click(function(e) {
            e.preventDefault();
            $(this).toggleClass("on");
            nav_box.toggleClass("on");
        });
        var nav_first = nav_box.find(".s-row");
        nav_first.click(function() {
            $(this).find("span").click(function() {
                nav_box.removeClass("on");
            });
			 nav_box.removeClass("on");
            $(this).toggleClass("on");
            nav_first.not($(this)).removeClass("on");
            var nav_sub = $(this).find(".s-sub");
            nav_sub.click(function(e) {
                e.stopPropagation();
            });
            nav_sub.slideToggle();
            nav_first.not($(this)).find(".s-sub").slideUp();
        });
    })();
    //delay
    function delay(id) {
        var tar = $(id);
        tar.addClass("wow fadeInUp");
        if (delay) {
            for (var i = 0; i < tar.length; i++) {
                tar.eq(i).attr("data-wow-delay", i * 0.2 + "s");
            }
        }
    }
    delay(".g-nft .m-box .m-c ul li");
    delay(".g-jieg .m-c .s-info ul li");
	  delay(".g-jsys .m-c p");
	 delay(".g-csr .m-box .m-c ul li");
	 delay(".g-js .m-box .m-c ul li");
    delay(".g-gz .s-info ul li ");
	  delay(".g-shili .m-c .s-info ul li");
	delay('.g-bj .s-pic ul li');
	delay('.g-hz ul li');
	delay(".g-db .m-box .m-c .s-info p");
	delay(".g-db .m-box .m-c .s-pic p");
	delay(".g-zldb .m-box .m-c .s-info p");
	
    //wow
    var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        mobile: false,
        offset: 200,
        live: true,
		iteration:'infinite'
    });
    wow.init();
});