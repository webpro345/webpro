( function( $ ) {
	jQuery( document ).ready(function() {
		jQuery('#cssmenu').prepend('<div id="menu-button"><i class="fa fa-bars"></i></div>');
		jQuery('#cssmenu #menu-button').on('click', function(){
			var menu = jQuery(this).next('ul');
			if (menu.hasClass('open')) {
				menu.removeClass('open');
			}
			else {
				menu.addClass('open');
			}
		});
		var x;
	 	setInterval(function() {
            if(x == 0) {
            	x=1;
            	jQuery('.download_file a').removeAttr('style');
            	jQuery('.download_file').removeAttr('style');
            } else {
            	x=0;
                jQuery('.download_file a').css('color', '#FFBE07');
                jQuery('.download_file').css('color', '#FFBE07');
            }
        }, 500);

		jQuery(".navpage span").click(function(){
			jQuery(".colleft .item").hide();
			var currentID = jQuery(this).attr("rel");
			jQuery(".navpage span").removeClass("active");
			jQuery(this).addClass("active");
			jQuery(".colleft #"+currentID).fadeIn("slow");
		});
		var url_current  = window.location.href;
		//check and hide menu
		jQuery("#cssmenu > ul > li").each(function(){
			if(jQuery(this).attr("class").indexOf("current-menu") > 0){
				var menuID = jQuery(this).attr('id');
				if(menuID == "menu-item-9296"){
					if(url_current.indexOf("/en/") > 0) jQuery(".howtobuy .title").html("OnlineCRMâ€™s services");
					else jQuery(".howtobuy .title").html("Dá»‹ch vá»¥ CRM");
				} else if(menuID == "menu-item-346") {
					if(url_current.indexOf("/en/") > 0) jQuery(".howtobuy .title").html("OnlineCRMâ€™s products");
					else jQuery(".howtobuy .title").html("Tá»•ng quan sáº£n pháº©m");
				} else if(menuID == "menu-item-4722") {
					if(url_current.indexOf("/en/") > 0) jQuery(".howtobuy .title").html("CRM SOLUTIONS BY INDUSTRY");
					else jQuery(".howtobuy .title").html("Giáº£i phĂ¡p CRM");
				} else if(menuID == "menu-item-223") {
					if(url_current.indexOf("/en/") > 0) jQuery(".howtobuy .title").html("CASE STUDIES");
					else jQuery(".howtobuy .title").html("KhĂ¡ch hĂ ng tham kháº£o");					
				} else if(menuID == "menu-item-5341"){
					jQuery(".howtobuy .title").html("");
				}else {
					if(url_current.indexOf("/en/") > 0) jQuery(".howtobuy .title").html("Category");
					else jQuery(".howtobuy .title").html("Danh má»¥c");
				}
				jQuery("."+menuID).show();
			}
	    });

		if (/(Series60|Nokia)/i.test(navigator.userAgent)){
		  jQuery("a[href^='tel:']").each(function(){
		    this.href = this.href.replace("tel:", "wtai://wp/mc;");
		  });
		}
	});
} )( jQuery );