(function($) {
  	
    var App = {
	
    // Init Function

    init: function() {
    	App.HomepageHeight();
    	App.ButtonsHoverAnimations();
        App.setHeight();
        App.ServicesHoverAnimations();
        App.ScrollToSomeplace();
        App.Preloader();
        App.StickyNavigation();
        App.Counter();
        App.Stellar();
        App.ContactForm();
        App.VideoFitVid();
		App.ModalBoxCenter();
		App.Scale_video();
		App.ProgressBars();
		App.AlertBoxClose();
    },
 
    // Homepage Height
    HomepageHeight: function() {
    "use strict"; 
        var h = window.innerHeight;
        $('#home').css('height', h );
        $('#homepage_content').css('height', h );
    },
 
    // Buttons hover animations
    ButtonsHoverAnimations: function() {
     	var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
     	
		$(".arrow_down").hover(
			function () { $(this).find(".arrow").removeClass('arrow_down_mouse_out').addClass('arrow_down_mouse_over'); },
			function () { $(this).find(".arrow").removeClass('arrow_down_mouse_over').addClass('arrow_down_mouse_out');
							if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
							{ $(this).find(".arrow").removeClass('arrow_down_mouse_out') }}
    	);
    	
    	$(".mobile_nav_open").hover(
			function () { $(this).find(".nav_open").removeClass('mobile_nav_open_out').addClass('mobile_nav_open_over'); },
			function () { $(this).find(".nav_open").removeClass('mobile_nav_open_over').addClass('mobile_nav_open_out');
						  	if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
							{ $(this).find(".nav_open").removeClass('mobile_nav_open_out') }}
    	);
    	
    	$(".close").hover(
			function () {  $(this).find(".close_icon").removeClass('close_out').addClass('close_over'); },
			function () {  $(this).find(".close_icon").removeClass('close_over').addClass('close_out'); 
							if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
							{  $(this).find(".close_icon").removeClass('close_out') }}
    	);
    	
    	$(".arrow_right").hover(
			function () { $(this).find(".arrow_right_icon").removeClass('arrow_right_mouse_out').addClass('arrow_right_mouse_over'); },
			function () { $(this).find(".arrow_right_icon").removeClass('arrow_right_mouse_over').addClass('arrow_right_mouse_out'); 
							if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
							{ $(this).find(".arrow_right_icon").removeClass('arrow_right_mouse_out') }}
    	);
    	
    	$(".arrow_left").hover(
			function () { $(this).find(".arrow_left_icon").removeClass('arrow_left_mouse_out').addClass('arrow_left_mouse_over'); },
			function () { $(this).find(".arrow_left_icon").removeClass('arrow_left_mouse_over').addClass('arrow_left_mouse_out'); 
							if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
							{ $(this).find(".arrow_left_icon").removeClass('arrow_left_mouse_out') }}
    	);
    	
		$(".post_excerpt").hover(
			function () { $(this).find("h3, p, img, iframe").removeClass('arrow_right_mouse_out').addClass('arrow_right_mouse_over'); },
			function () { $(this).find("h3, p, img, iframe").removeClass('arrow_right_mouse_over').addClass('arrow_right_mouse_out'); 
							if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
							{ $(this).find("h3, p, img, iframe").removeClass('arrow_right_mouse_out') }}
    	);
    	
    	$("#subpage_blog .post_excerpt, #subpage_single_post .post_excerpt").hover(
			function () { $(this).find("h3, p, img, iframe").removeClass('arrow_right_mouse_out').removeClass('arrow_right_mouse_over'); },
			function () { $(this).find("h3, p, img, iframe").removeClass('arrow_right_mouse_over').removeClass('arrow_right_mouse_out'); 
							if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
							{ $(this).find("h3, p, img, iframe").removeClass('arrow_right_mouse_out') }}
    	);
    	
    	$(".arrow_up").hover(
			function () { $(this).find(".arrow_up_icon").removeClass('arrow_up_mouse_out').addClass('arrow_up_mouse_over'); },
			function () { $(this).find(".arrow_up_icon").removeClass('arrow_up_mouse_over').addClass('arrow_up_mouse_out');
							if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
							{ $(this).find(".arrow_up_icon").removeClass('arrow_up_mouse_out') }}
    	);
    
    	
    },
    
    
    // Set Height
    setHeight: function() {
	    navbarheight = $("#nav_bar").outerHeight()+1;
	    width = window.innerWidth;
	    
	    sliderheight = $("#slider").height();
	    $("#title_container").css({'height':sliderheight});
	    $("#portfolio_single_fullwidth .slider-overlay").css({'height':sliderheight});
    },
    
    
    // Services hover animations 
    ServicesHoverAnimations: function() {
     	var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

     	if (window.innerWidth > 0) {
     	    $(".service_box_content").find("h6").removeClass('animation_jump_over_small_1 ');
	    	$(".service_box_content").find(".service_icon").removeClass('animation_jump_over_small_2 ');
			$(".service_box_content").find("p").removeClass('animation_jump_out_small_2');
			$(".service_box_content").find("p").removeClass('service_box_p_open');
	
	    	$(".service_box_content").hover(
				function () { $(this).find("h6").removeClass('animation_jump_out_small_1 ').addClass('animation_jump_over_small_1 ');
							  $(this).find(".service_icon").removeClass('animation_jump_out_small_2 ').addClass('animation_jump_over_small_2 ');
							  $(this).find("p").removeClass('animation_jump_out_small_2 ');
							  $(this).find("p").addClass('service_box_p_open');},
							  
				function () { $(this).find("h6").removeClass('animation_jump_over_small_1').addClass('animation_jump_out_small_1 ');
							  $(this).find(".service_icon").removeClass('animation_jump_over_small_2').addClass('animation_jump_out_small_2 ');
							  $(this).find("p").addClass('animation_jump_out_small_2');
							  $(this).find("p").removeClass('service_box_p_open');
							  	
								if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
								{ $(this).find("h6").removeClass('animation_jump_out_small_1 ');
								  $(this).find(".service_icon").removeClass('animation_jump_out_small_2 '); }}
	    	); } 	  		
	    	   	
    },


    // Scroll To ...
    ScrollToSomeplace: function() {
    $('.arrow_down').click(function () {$.scrollTo('#about_intro',1000,{easing:'easeInOutExpo',offset:-navbarheight+2,'axis':'y'});return false});
    $('.arrow_up').click(function () {$.scrollTo('0',1000,{easing:'easeInOutExpo',offset:-navbarheight,'axis':'y'}); return false});
    $('#logo').click(function () {$.scrollTo('#home',1000,{easing:'easeInOutExpo',offset:-navbarheight,'axis':'y'}); return false}); 
    $('#subpage_blog #logo, #subpage_single_post #logo, #subpage_elements #logo').click(function () {location.href = 'index.html';});     
 
    var lastId,
    topMenu = $('#navigation, #mobile_menu_content');
    menuItems = topMenu.find('a');
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });
 
    menuItems.click(function(e){
        var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-navbarheight+2;
        $('html, body').stop().animate({ scrollTop: offsetTop  }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });
 
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+navbarheight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
                                if ($(this).offset().top < fromTop)
                                return this;
                                });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
        .parent().removeClass("active")
        .end().filter("[href=#"+id+"]").parent().addClass("active");
        }                   
    });
    },
    
    
    // Preloader
    Preloader: function() {
    "use strict";
        $(window).load(function() {
            $('#status').delay(100).fadeOut('slow');
            $('#preloader').delay(500).fadeOut('slow');
            $('body').delay(500).css({'overflow':'visible'});
        })
    },
    
    
	// Sticky Navigation
    StickyNavigation: function() {
	    "use strict";
	    $('#nav_bar').waypoint('sticky');
	    $('#subpage_blog #nav_bar, #subpage_single_post #nav_bar, #subpage_elements #nav_bar').waypoint('unsticky');
    },
 

    // Counter
    Counter: function() {
     "use strict";
        $('.counter').counterUp({
            delay: 10,
            time: 2300
        });
    },


    // Parallax
    Stellar: function() {
	     "use strict";
	    $.stellar({responsive: true});
    },
 
 
    // Contact Form
    ContactForm: function() {
	     "use strict";
	    var options = {target: "#alert"}
	    $("#contact-form").ajaxForm(options);
    },
    
    
    // Video Fit Vid
    VideoFitVid: function() {
	     "use strict";
	    $(".video").fitVids();
    },
    
    
    // Modal Box Center
    ModalBoxCenter: function() {
	    $('.md-modal').css({
	        'position' : 'fixed',
	        'left' : '50%',
	        'top' : '50%',
	        'margin-left' : -$('.md-modal').width()/2,
	        'margin-top' : -$('.md-modal').height()/2
	    });
    },
    
    
    // Video background scaling
    Scale_video: function() {
    var min_w = 300; // minimum video width allowed
    var vid_w_orig;  // original video dimensions
    var vid_h_orig;

    jQuery(function() { // runs after DOM has loaded
        
        vid_w_orig = parseInt(jQuery('video').attr('width'));
        vid_h_orig = parseInt(jQuery('video').attr('height'));
        
        
        jQuery(window).resize(function () { resizeToCover(); });
        jQuery(window).trigger('resize');
        });

    function resizeToCover() {

	    // set the video viewport to the window size
	    jQuery('.video-container').width(jQuery(window).width());
	    jQuery('.video-container').height(jQuery(window).height());
	
	    // use largest scale factor of horizontal/vertical
	    var scale_h = jQuery(window).width() / vid_w_orig;
	    var scale_v = jQuery(window).height() / vid_h_orig;
	    var scale = scale_h > scale_v ? scale_h : scale_v;
	
	    // don't allow scaled width < minimum video width
	    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};
	
	    // now scale the video
	    jQuery('video').width(scale * vid_w_orig);
	    jQuery('video').height(scale * vid_h_orig);
	    // and center it by scrolling the video viewport
	    jQuery('.video-container').scrollLeft((jQuery('video').width() - jQuery(window).width()) / 2);
	    jQuery('.video-container').scrollTop((jQuery('video').height() - jQuery(window).height()) / 2);
	
	    };
    },
    
     
    // Progress Bars
    ProgressBars: function() {
        $('.progress_bar').waypoint(function(){
		datavalue = $(this).attr('data-value'),
		$(this).animate({ "width" : datavalue + "%"}, '1000', 'easeInOutExpo');
	        
        },{ offset: '60%' }); 
    },
     
      
    // Alert Box Close
    AlertBoxClose: function() { 
	    $(".alert_box a.close").click(function(){
			$(this).parent().parent().animate({'opacity' : '0'}, 500).slideUp(500);
			return false;
		});
    }, 

 
 
}

$(function() {
  App.init();
  
  $(window).resize(App.HomepageHeight);
  $(window).resize(App.setHeight);
  $(window).resize(App.ModalBoxCenter);  
  $(window).resize(App.ServicesHoverAnimations);

  
  
});


 
 
 
 
 

})(jQuery);