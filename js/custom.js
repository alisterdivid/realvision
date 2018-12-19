jQuery.noConflict();



jQuery(document).ready(function () {

    dots();

    jQuery('.header-bottom').fadeIn(1000);

    jQuery('.top-fluid').height(jQuery(window).height());

    jQuery('#footer').removeClass('hidden');

    jQuery('.content-white').css('position','relative');

    if(jQuery(window).width() > 1024){

        jQuery('.content-white').css('margin-bottom',jQuery('footer').height()+80);

    }

    jQuery(window).resize(function() {

        dots();

        if(jQuery(window).width() > 1024){

            jQuery('.content-white').css('margin-bottom',jQuery('footer').height()+80);

        }

        jQuery('.top-fluid').height(jQuery(window).height());

        

    });

             if(jQuery(window).width() > 1024){

                jQuery('footer').hide(); 

            }

	

    jQuery(window).scroll(function() {

        var $element = jQuery('body');

        var viewportHeight = jQuery(window).height(),

        winScrollTop = jQuery(window).scrollTop(),

        elementOffsetTop = $element.offset().top,

        elementHeight = $element.height();

        var distance = (winScrollTop + viewportHeight) - elementOffsetTop;

        //console.log('distance : ' + distance + ' = '+elementOffsetTop);

        var percentage = distance / ((viewportHeight + elementHeight) / 100);

        //console.log('percentage' + percentage);                    

        // jQuery('footer').show();

        if(percentage > 70 )

        {

            jQuery('footer').show();

        }else{

             if(jQuery(window).width() > 1024){ 

                jQuery('footer').hide(); /*27-1-16*/

            }

        }

    });

    

    /****************************************************

     *

     * HEADER NAVIGATION WITH SCROLL TO EACH SECTION

     *

     ****************************************************/

    jQuery('.navbar-nav > li > a[href^="#"]').click(function (e) {

        jQuery('html,body').animate({

            scrollTop: jQuery(this.hash).offset().top

        }, 700);

        return false;

        e.preventDefault();

    });



    /* smooth scrolling for nav sections */

    jQuery('#nav .navbar-nav li > a').click(function () {

        var link = jQuery(this).attr('href');

        var posi = jQuery(link).offset().top;

        //alert(posi);

        jQuery('body,html').animate({

            scrollTop: posi

        }, 700);

    });



    

    jQuery('#nav .navbar-header button').click(function () {

        });



    /* sticky header */

    jQuery("#sticky_header").sticky({

        topSpacing: 0

    });



    jQuery(".navbar-default .navbar-nav > li > a").click(function () {

        jQuery('.navbar-collapse').removeClass('in');

    });



    var header = jQuery('#sticky_header');

    jQuery(window).scroll(function (e) {

        if (header.offset().top !== 0) {

            if (!header.hasClass('whitebg')) {

                header.addClass('whitebg');

                jQuery(this).removeAttr('src');

            }

        } else {

            header.removeClass('whitebg');

            jQuery(this).removeAttr('src');

        }

    });



    jQuery('.header-top .navbar-default .navbar-collapse ul li a').click(function(){

        if( jQuery(window).width() < 1025){

            jQuery('.navbar-header button.navbar-toggle').addClass('collapsed');

        }

    })

    jQuery(function () {

        //When the document loads

        jQuery("#scrollTop").bind("click", function () {

            //jQuery('body,html').scrollTop(jQuery("#section1").offset().top-52);

            jQuery('body,html').animate({

                scrollTop: jQuery('.more-info').offset().top

            }, 700);

            return false;

        });



        jQuery("#hbl_1").bind("click", function () {

            jQuery('body,html').animate({

                scrollTop: jQuery('#photo-panel-scroll').offset().top

            }, 700);

            return false;

        });





        jQuery("#hbl_2").bind("click", function () {

            jQuery('body,html').animate({

                scrollTop: jQuery('#section-video').offset().top

            }, 700);

            return false;

        });



        jQuery("#hbl_3").bind("click", function () {

            jQuery('body,html').animate({

                scrollTop: jQuery('#floorplanlink').offset().top

            }, 700);

            return false;

        });



        jQuery("#hbl_4").bind("click", function () {

            jQuery('body,html').animate({

                scrollTop: jQuery('#3dview_wrap').offset().top

            }, 700);

            return false;

        });

    });



    //jQuery("#my-video").backgroundVideo();

    var custom_vid = document.getElementById("my-video");

    custom_vid.playbackRate = 1.0;







    /****************************************************

     *

     * SECTION IMAGE WITH parallax background JS

     *

     ****************************************************/

    $window = jQuery(window);

    jQuery('section[data-type="background"]').each(function () {

        var width = jQuery(window).width();

        if (width > 1200) {

            // declare the variable to affect the defined data-type

            var $scroll = jQuery(this);

            jQuery(window).scroll(function () {

                // HTML5 proves useful for helping with creating JS functions!

                // also, negative value because we're scrolling upwards                            

                var yPos = -($window.scrollTop() / $scroll.data('speed'));

                // background position

                var coords = '50% ' + yPos + 'px';

                // move the background

                $scroll.css({

                    backgroundPosition: coords

                });



            });

        }// end window scroll

    });  // end section function

    //close out script

    /* Create HTML5 element for IE */

    document.createElement("section");



    /****************************************************

     *

     * SECTION Agent Listing slider jquery code

     *

     ****************************************************/

    

    jQuery('#agent_main_slider').owlCarousel({

        loop: true,

        margin: 20,

        nav: true,

        mouseDrag:false,

        slideBy: 3,

        stagePadding: 200,

        touchDrag:true,

        autoplay: false,

        responsiveRefreshRate : 100,

        responsive: {

            0: {

                items: 1,

                stagePadding: 30,

                mouseDrag: true,

                touchDrag:true,

                nav: false

            },

            600: {

                items: 2,

                stagePadding: 50,

                mouseDrag: true,

                touchDrag:true,

                nav: false

            },

            1000: {

                items: 2,

                stagePadding: 150

            },

            1200: {

                items: 2,

                stagePadding: 200,

                nav: true

            },

            1281: {

                items: 3,

                stagePadding: 100,

                nav: true

            },

            1800: {

                items: 4,

                stagePadding: 100,

                nav: true,

               slideBy: 4

            },

            2000: {

                items: 4,

                stagePadding: 100,

                nav: true,

                slideBy: 4

          }

        }

    });



    jQuery('#agent_main_slider .inner-carousel .carousel-inner').owlCarousel({

        //loop: true,

        nav: false,

        slideBy: 1,

        items: 1,

        mouseDrag: false,

        touchDrag: false,

        autoplay: false,

        //autoplayTimeout: 5000,

        responsiveRefreshRate : 100

    });



    /* js for Contact form height */

    function Contact_form_height(){

         if(jQuery(window).width() > 767){ 

        setTimeout(function() {

            var contact_height = jQuery('.agent-section').outerHeight(); 

            var contact = jQuery('.contact-form').outerHeight(); 

            if(contact_height > contact){

            jQuery('.contact-form').height(contact_height);

            }

        },1000);

    }else{

         jQuery('.contact-form').css('height','auto');

    }

    }

     jQuery(window).resize(function() {

             Contact_form_height();

     });

    Contact_form_height();



    /*  Match height function call for agent info section */

   /*   jQuery('.slideWrap .slideBottom').matchHeight();

    jQuery('.presentators .presentator-name').matchHeight();

    jQuery('.presentators .presentator-properties').matchHeight();

    jQuery('.contact-section .presentator-name').matchHeight();

    jQuery('.contact-section .presentator-properties').matchHeight();

    jQuery('.contact-logo-height').matchHeight(); */

    

    /* function for home information alignment */

    function dots(){

        jQuery(".item-list li").each(function( index ) {

            var itemw=jQuery(this).find(".home-item").width();

            var iteminfow=jQuery(this).find(".item-info").width();

            var total= parseInt(jQuery(this).width())-(parseInt(itemw)+parseInt(iteminfow));

            jQuery(this).find(".dot").width(total-80);

            if(jQuery(window).width()<767){

                jQuery(this).find(".dot").width(total-150);

            }

        });

    }

    

               



});



/****************************************************

 *

 * 3D panel ipad and iphone overlay

 *

 ****************************************************/



/*jQuery("#overlay-image").click(function(){

     window.open('http://my.matterport.com/show/?m=aSx1MpRRqif&play=0', '_blank');

});*/

//function ipad3dview(){

//    jQuery("#threedview-fullscreen").css("width",jQuery(window).width());

//    jQuery("#threedview-fullscreen").css("height",jQuery(window).height()-jQuery('.navbar-header').height() + 8);

//}

//var modal_flag=0;

//jQuery("#overlay-image").click(function(){

//    jQuery("#threedview-fullscreen").show();

//    jQuery('#menu-top').hide();

//    jQuery('#close-btn-3d').show();

//    jQuery("body").css("overflow-y","hidden");

//    jQuery("#bs-example-navbar-collapse-1").removeClass("in");

//    jQuery('.scrollup').hide();

//    if(modal_flag==0){

//        jQuery('#modelthreed').attr('src','http://my.matterport.com/show/?m=aSx1MpRRqif&play=1');

//        modal_flag++;

//    }

//        

//});

//

//jQuery("#close-btn-3d").click(function(){

//    jQuery(this).hide();

//    jQuery('#menu-top').show();

//    jQuery("#threedview-fullscreen").hide();

//    jQuery("body").css("overflow-y","scroll");

//    jQuery('.scrollup').show();

//});

//

//

//jQuery(window).resize(function() {

//    ipad3dview();

//});



jQuery(document).ready(function ($) {

   // ipad3dview();

    /****************************************************

     *

     * Photo galllery custom slider jquery code

     *

     ****************************************************/

		

    var currentimg = jQuery('#property_gallery.carousel .item.active img').attr('title');

    jQuery('#showtooltip.info-property').attr('data-original-title',currentimg);

	



	

    jQuery('#property_gallery.carousel').on('slid.bs.carousel', function () {

        var carouselData = jQuery(this).data('bs.carousel');

        var currentimg = carouselData.$element.find('.item.active img').attr('title');

        jQuery('#showtooltip.info-property').attr('data-original-title',currentimg);

  

    });

	 

    

    /***********************************************

    *   Play-Pause Slide

    ***********************************************/



    var owl = jQuery('#section2 .owl-carousel');

            

            

    jQuery('.carousel-stats-property').on('slid.bs.carousel', function () {

        var carouselData = jQuery(this).data('bs.carousel');

        var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));

        var total = carouselData.$items.length;



        // Now display this wherever you want

        var text ="Images "+ (currentIndex + 2) + " of " + total;

        jQuery('#carousel-property-stats').text(text);



    });

                

                

    /*Tooltip jquery code*/

                

    var owl = jQuery('#section2 .owl-carousel');

    owl.owlCarousel({autoplay: false});



    owl.on('changed.owl.carousel', function(event) {

        jQuery( 'div.carousel-caption' ).fadeOut();

    })







    jQuery('#showtooltip').click(function(){

        jQuery('#sync1 .owl-item.active .carousel-caption').fadeIn();

    });



    // hide image info



    jQuery(".info-close").click(function(){

        jQuery(this).parents('div.carousel-caption').fadeOut();

    });



    // hide image info on slide

	

	

    jQuery( "#maincarousel" ).bind( 'slide.bs.carousel', function() {

        jQuery( 'div.carousel-caption' ).fadeOut();

    });

    

    //Accent photo fancybox Initialize

    jQuery(".property-image .fancybox").fancybox({

        helpers: {

            title: {

                type: 'inside'

            },

            overlay : {

                locked : true

            }

        }, // afterLoad

        padding: 0,

        openEffect:'fade',

        autoSize: false,

        margin: 10,

        prevEffect: 'fade',

        nextEffect: 'fade',

        openSpeed:'slow',

        wrapCSS: 'small-gallery-lightbox',

        'autoDimensions': false,

        beforeShow: function() {

            this.title = 'Photo ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' <br> ' + this.title : '');

        },

        afterShow: function() {

        },

        afterClose: function() {

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                jQuery("#content-wrapper").css('position', 'inherit');

            }

        }

    });

        

    

    // Initialize Fancybox for floor plan images        

    jQuery("#section-floorplan #large-view1 .fancybox").fancybox({

        helpers: {

            title: {

                type: 'inside'

            },

            overlay : {

                locked : true

            }

        }, // afterLoad

        padding: 0,

        openEffect:'fade',

        autoSize: false,

        margin: 10,

        prevEffect: 'fade',

        nextEffect: 'fade',

        openSpeed:'slow',

        wrapCSS: 'small-gallery-lightbox',

        'autoDimensions': false,

        beforeShow: function() {

			

        },

        afterShow: function() {

        },

        afterClose: function() {

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                jQuery("#content-wrapper").css('position', 'inherit');

            }

        }

    });

	

    jQuery("#section-floorplan #large-view2 .fancybox").fancybox({

        helpers: {

            title: {

                type: 'inside'

            },

            overlay : {

                locked : true

            }

        }, // afterLoad

        padding: 0,

        openEffect:'fade',

        autoSize: false,

        margin: 10,

        prevEffect: 'fade',

        nextEffect: 'fade',

        openSpeed:'slow',

        wrapCSS: 'small-gallery-lightbox',

        'autoDimensions': false,

        beforeShow: function() {

        },

        afterShow: function() {

        },

        afterClose: function() {

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                jQuery("#content-wrapper").css('position', 'inherit');

            }

        }

    });

	

    jQuery("#section-floorplan #large-view3 .fancybox").fancybox({

        helpers: {

            title: {

                type: 'inside'

            },

            overlay : {

                locked : true

            }

        }, // afterLoad

        padding: 0,

        openEffect:'fade',

        autoSize: false,

        margin: 10,

        prevEffect: 'fade',

        nextEffect: 'fade',

        openSpeed:'slow',

        wrapCSS: 'small-gallery-lightbox',

        'autoDimensions': false,

        beforeShow: function() {

        },

        afterShow: function() {

        },

        afterClose: function() {

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                jQuery("#content-wrapper").css('position', 'inherit');

            }

        }

    });

	

	

    jQuery("#section-floorplan #large-view4 .fancybox").fancybox({

        helpers: {

            title: {

                type: 'inside'

            },

            overlay : {

                locked : true

            }

        }, // afterLoad

        padding: 0,

        openEffect:'fade',

        autoSize: false,

        margin: 10,

        prevEffect: 'fade',

        nextEffect: 'fade',

        openSpeed:'slow',

        wrapCSS: 'small-gallery-lightbox',

        'autoDimensions': false,

        beforeShow: function() {

        },

        afterShow: function() {

        },

        afterClose: function() {

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                jQuery("#content-wrapper").css('position', 'inherit');

            }

        }

    });

	

    jQuery('.floor-level-1').click(function(){

        jQuery.fancybox.open(jQuery('#section-floorplan #large-view1 .fancybox'), {

            index: 1,

            helpers: {

                title: {

                    type: 'inside'

                },

                overlay : {

                    locked : true

                }

            }, // afterLoad

            padding: 0,

            openEffect:'fade',

            autoSize: false,

            margin: 10,

            prevEffect: 'fade',

            nextEffect: 'fade',

            openSpeed:'slow',

            wrapCSS: 'small-gallery-lightbox',

            'autoDimensions': false,

            beforeShow: function() {

                this.title = 'Photo ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' <br> ' + this.title : '');

            },

            afterShow: function() {

            },

            afterClose: function() {

                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                    jQuery("#content-wrapper").css('position', 'inherit');

                }

            }

        });

    });

	

    jQuery('.floor-level-2').click(function(){

        jQuery.fancybox.open(jQuery('#section-floorplan #large-view2 .fancybox'), {

            index: 1,

            helpers: {

                title: {

                    type: 'inside'

                },

                overlay : {

                    locked : true

                }

            }, // afterLoad

            padding: 0,

            openEffect:'fade',

            autoSize: false,

            margin: 10,

            prevEffect: 'fade',

            nextEffect: 'fade',

            openSpeed:'slow',

            wrapCSS: 'small-gallery-lightbox',

            'autoDimensions': false,

            beforeShow: function() {

                this.title = 'Photo ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' <br> ' + this.title : '');

            },

            afterShow: function() {

            },

            afterClose: function() {

                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                    jQuery("#content-wrapper").css('position', 'inherit');

                }

            }

        });

    });

	

    jQuery('.floor-level-3').click(function(){

        jQuery.fancybox.open(jQuery('#section-floorplan #large-view3 .fancybox'), {

            index: 1,

            helpers: {

                title: {

                    type: 'inside'

                },

                overlay : {

                    locked : true

                }

            }, // afterLoad

            padding: 0,

            openEffect:'fade',

            autoSize: false,

            margin: 10,

            prevEffect: 'fade',

            nextEffect: 'fade',

            openSpeed:'slow',

            wrapCSS: 'small-gallery-lightbox',

            'autoDimensions': false,

            beforeShow: function() {

                this.title = 'Photo ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' <br> ' + this.title : '');

            },

            afterShow: function() {

            },

            afterClose: function() {

                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                    jQuery("#content-wrapper").css('position', 'inherit');

                }

            }

        });

    });

	

    jQuery('.floor-level-4').click(function(){

        jQuery.fancybox.open(jQuery('#section-floorplan #large-view4 .fancybox'), {

            index: 1,

            helpers: {

                title: {

                    type: 'inside'

                },

                overlay : {

                    locked : true

                }

            }, // afterLoad

            padding: 0,

            openEffect:'fade',

            autoSize: false,

            margin: 10,

            prevEffect: 'fade',

            nextEffect: 'fade',

            openSpeed:'slow',

            wrapCSS: 'small-gallery-lightbox',

            'autoDimensions': false,

            beforeShow: function() {

                this.title = 'Photo ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' <br> ' + this.title : '');

            },

            afterShow: function() {

            },

            afterClose: function() {

                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                    jQuery("#content-wrapper").css('position', 'inherit');

                }

            }

        });

    });

	

    function setInfoWidth(){

    //var windowWidth = jQuery(window).width()-80;

    //jQuery('.small-gallery-lightbox .fancybox-title-inside-wrap').css('width',windowWidth);

    }

	

	

});



jQuery(window).load(function(){

	jQuery('.broker-logo').css('height','auto');

});

	

