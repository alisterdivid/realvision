jQuery(document).ready(function($){

    dynnamicWidthThubSlide();

    jQuery('[data-toggle="tooltip"]').tooltip();

    jQuery("[data-toggle=tooltip]").hover(function() {

        //jQuery('.tooltip').css('left',parseInt(jQuery('.tooltip').css('left')) + -10 + 'px')

        //jQuery('.tooltip').css('top',parseInt(jQuery('.tooltip').css('top')) + -10 + 'px')

        });

    /* set parameter for large image photo panel   */

    var $sync1 = $(".big-images"),

    $sync2 = $(".thumbs"),

    flag = false,

    duration = 1;

    duration2 = 300;

    $sync1.owlCarousel({

        center: true,

        navSpeed:1200,

        smartSpeed:1200,

        items: 1,

        loop: false,

        startPosition: 2,

        mouseDrag: false,

        touchDrag: false,

        nav: true,

        margin: 0,

        dots: true,

        stagePadding: 100,

        /*autoplay: true,*/
		autoplay: false,

        autoplayTimeout: 2000,

        autoplayHoverPause: false,

        autoHeight: false,

        responsiveRefreshRate: 100,

        onTranslated: callback,

        onResized: callback,

        onInitialized: callback, 

        onDragged: dragcallback,	

        lazyLoad : true,  

        responsive: {

            0: {

                items: 1,

                stagePadding: 0,

                mouseDrag: false,

                touchDrag: true,

                nav: true,

                autoplay:false,

                smartSpeed:300,

                dragEndSpeed:300,

                navSpeed:400

            },

            374: {

                items: 1,

                stagePadding: 0,

                touchDrag: true,

                autoplay:false,

                smartSpeed:300,

                dragEndSpeed:300,

                navSpeed:400

            },

            479: {

                stagePadding:0,

                mouseDrag: false,

                touchDrag: true,

                nav: true,

                smartSpeed:500,

                dragEndSpeed:0.1,

                navSpeed:0.1,

                autoplay:false

            },

            568: {

                items: 1,

                stagePadding: 110,

                mouseDrag: false,

                touchDrag: true,

                nav: true,

                smartSpeed:1000,

                dragEndSpeed:0.1,

                navSpeed:0.1,

                autoplay:false

               

            },

            768: {

                items: 1,

                stagePadding: 0,

                mouseDrag: true,

                touchDrag: true,

                nav: true,

                smartSpeed:2000,

                dragEndSpeed:0.1,

                navSpeed:0.1                

            },

            1000: {

                items: 1,

                touchDrag: true,

                stagePadding: 0,

                smartSpeed:2000,

                dragEndSpeed:0.1,

                navSpeed:0.1                

            },

			1205: {

                stagePadding: 0,

                mouseDrag: false,

                touchDrag: true,

                nav: true,

                smartSpeed:500,

                dragEndSpeed:0.1,

                navSpeed:0.1,

                autoplay:false

            },

			1207: {

                items: 1,

                touchDrag: true,

                stagePadding: 0

            },

			1245: {

               items: 1,

               stagePadding: 222,

            },

            1281: {

                items: 1,

                stagePadding: 222

            },

            1572 : {

                items: 1,

                stagePadding: 0,

                mouseDrag: true,

                touchDrag: true,

                nav: true,

                smartSpeed:2000,

                dragEndSpeed:0.1,

                navSpeed:0.1 

            },

            1573: {

               items: 1,

                stagePadding: 222

                },

            1700: {

                items: 1,

                stagePadding: 0,

                mouseDrag: true,

                touchDrag: true,

                nav: true,

                smartSpeed: 2000,

                dragEndSpeed: 0.1,

                navSpeed: 0.1

            },

            1702: {

                items: 1,

                stagePadding: 222

            }

        },

        afterMove: function() {

            if (this.currentItem === this.maximumItem) {

                alert($('.owl-item').eq(this.maximumItem))

            }

        }

    })

        

    .on('changed.owl.carousel', function(e) {

        if (!flag) {

            flag = true;

            $('#sync2 .owl-item').removeClass('currentThumb');

            var thumnIndexVal = e.item.index + 1;

            if(jQuery(window).width() > 1024){

                $sync2.trigger('to.owl.carousel', [e.item.index - 4,duration2, true]);

            }

            else

            {

                $sync2.trigger('to.owl.carousel', [e.item.index,duration2, true]);

            }

            $('.imgThumb-' + thumnIndexVal).parent().addClass('currentThumb');

            flag = false;

        }

    });

    

    /* set photo panel Thumb slider parameter */

    $sync2.owlCarousel({

        //margin: 20,

        startPosition: 2,

        loop: false,

        items: 9,

        nav: true,

        dots: true,

        autoplay: false,

        autoplayTimeout: 3000,

        autoplayHoverPause: false,

        responsiveRefreshRate: 100,

        dragEndSpeed:0.1,

        navSpeed:0.1,

        responsive: {

            0: {

                items : 3,

                nav: false,

                mouseDrag: true,

                touchDrag: true

            },

            640 : {

                items : 4,

                nav: false

            },

            768: {

                items : 5,

            },

            1000: {

                items : 6,

            },

            1200: {

                items: 7,

            },

			1205:{

				items : 3,

			},

			1207:{

				items : 7,

			},

            1300: {

                items: 8,

            },

            1400: {

                items: 9,

            },

            1500: {

                items: 10,

            },

            1572: {

                  items : 5,

            },  

            1573: {

                items: 10,

            },

            1600: {

                items: 11,

            },

            1700: {

                items:5

            },   

            1702: {

                items:12

             },

            1920: {

                items: 12,

            }

        },

        pagination: false,

        responsiveRefreshRate: 100,

        afterInit: function(el) {

            el.find(".owl-item").eq(0).addClass("synced");

        }

    }).on('click', '.owl-item', function() {

        $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

    }).on('changed.owl.carousel', function(e) {

        if (!flag) {

            flag = true;

            $('#sync2 .owl-item').removeClass('currentThumb');

            var thumnIndexVal = e.item.index - 1;

            $('.imgThumb-' + thumnIndexVal).parent().addClass('currentThumb');

            flag = false;

        }

    });

    $('#sync2 .owl-item.active:nth-child(2)').addClass('currentThumb');

    $('#playslide').hide();

    //add class here to first thumbnail, and then add/remove on clicks

    

    /* js for control Photo panel left,right stagpadding */

    function callback() {

    

        var $sync1 = jQuery(".big-images");

        var imgwidth = jQuery('#sync1 .owl-item.active .item').width();

        // console.log(imgwidth);

        var ww = jQuery(window).width();

        var padding = Math.abs((parseInt(ww) - parseInt(imgwidth)) / 2);

        // console.log('padding : ' + padding);

        if (ww >= 1024) {

           

                jQuery('#sync1 .owl-stage').css('padding-left', padding - 2);

                jQuery('#sync1 .owl-stage').css('padding-right', padding - 2);

                jQuery('#section2 .slider-dropdown').css('left', padding + 10);

                jQuery('#section2 .main-slide-control').css('right', padding + 15);

           

        } else {

            //console.log("else");

            jQuery('#section2 .slider-dropdown').css('left', '5%');

            jQuery('#section2 .main-slide-control').css('right', '5%');

            

        }

           if (ww <= 750) {

           

                jQuery('#sync1 .owl-stage').css('padding-left', padding - 2);

                jQuery('#sync1 .owl-stage').css('padding-right', padding - 2);

                jQuery('#section2 .slider-dropdown').css('left', padding + 10);

                jQuery('#section2 .main-slide-control').css('right', padding + 15);

            } 

        

        

    }

	

    jQuery(window).resize(function() {

        callback();

    })



    /* function for autoplay off for photopanel */

    function photopanel_stop(){

        setTimeout(function() {

            var owl = jQuery('#sync1.owl-carousel');

            owl.trigger('stop.owl.autoplay');

            jQuery('#pauseslide').hide();

            jQuery('#playslide').show();

        },500);

    }

    photopanel_stop();



});

// show image info and hide

jQuery(document).ready(function() {

    var $element = jQuery(this);

    var $element = jQuery('#section2');



    /* Add src attribute in image tag, when slider fullscreen button is click */

    jQuery('#fullscreen').click(function(){

        jQuery("#property_gallery  .item img").each(function() {

            var name = jQuery(this).attr('data-xl');

            jQuery(this).attr('src', name);

        });

    })



	

	    /* Change photo panel images in mobile devices */

    

   

            /* Js for slider image */

           if(jQuery(window).width() <= 767){



            /* Add Thumb images*/

            jQuery("#sync1 .item img").each(function() {

                var name = jQuery(this).attr('data-name');

                var mediumPhoto = jQuery(this).attr('data-src-sm');

                jQuery(this).attr('data-src', mediumPhoto);

            });

            }

              

          

	

	

    /* Photo panel play pause control js */

    var owl2 = jQuery('#sync2.owl-carousel');

    var owl1 = jQuery('#sync1.owl-carousel');

    var owl = jQuery('#sync1.owl-carousel');

    jQuery('#pauseslide,#showtooltip,#fullscreen,.slider-dropdown,#sync2,#fullscreen,.listval').on('click', function() {

        setTimeout(function() {

            owl.trigger('stop.owl.autoplay');

            jQuery('#pauseslide').hide();

            jQuery('#playslide').show();

   

        },500);

    });



    

    jQuery('#sync2').on('click', function() {

        setTimeout(function() {

            var owlSync1 = jQuery('#sync1');

            owlSync1.trigger('stop.owl.autoplay');

            jQuery('#pauseslide').hide();

            jQuery('#playslide').show();

        }, 500);

    })

    // Go to the next item

    jQuery(owl2).on('click', '.owl-next', function(e) {

        e.preventDefault();

        var clsCustName = jQuery('#sync2 .owl-item.active:last(-1n)').find('.item').attr('class');

        var spltArr = clsCustName.split('-');

        var lastIndexActive = spltArr[1];

        var activeThumbIndex = parseInt(lastIndexActive) -1;//+1

        //console.log('clsCustName-->>' + clsCustName);

        //console.log('spltArr-->>' + spltArr);

        //console.log('lastIndexActive-->>' + lastIndexActive);

        //console.log('activeThumbIndex-->>' + activeThumbIndex);

        jQuery("#sync2").trigger('to.owl.carousel', [activeThumbIndex, 300, true]);

        owl.trigger('stop.owl.autoplay');

        jQuery('#pauseslide').hide();

        jQuery('#playslide').show();

    })

    // Go to the previous item

    jQuery(owl2).on('click', '.owl-prev', function(e) {

        e.preventDefault();

        var cnt = 0;

        jQuery.each(jQuery("#sync2 .owl-item"), function(index, value) {

            if (jQuery(this).hasClass('active')) {

                cnt++;

            }

        });

        // console.log(cnt);

        var clsCustName = jQuery('#sync2 .owl-item.active:first').find('.item').attr('class');

        var spltArr = clsCustName.split('-');

        var lastIndexActive = spltArr[1];

        var activeThumbIndex = parseInt(lastIndexActive) - (cnt);//+1

        // console.log('activeThumbIndex-->>>'+activeThumbIndex );

        jQuery("#sync2").trigger('to.owl.carousel', [activeThumbIndex, 300, true]);

        owl.trigger('stop.owl.autoplay');

        jQuery('#pauseslide').hide();

        jQuery('#playslide').show();

    });

    /* add src in first 3 images */

    var flag=1;

    jQuery("#sync1 .owl-item img").each(function(){

        if(flag <= 3)

        {

            var ImageSrc = jQuery(this).attr('data-src');

            jQuery(this).attr('src',ImageSrc);

            jQuery(this).css('opacity','1');

            flag++;

        }

    });



    owl1.on('changed.owl.carousel', function(event) {

        setTimeout(function() {

            jQuery('#sync1 .owl-item.active.center img.owl-lazy').css('opacity', '1');

            jQuery('#sync1 .owl-item.active.center').next().find('img.owl-lazy').css('opacity', '1');

            //jQuery('#sync1 .owl-item.active.center').next().next().find('img.owl-lazy').css('opacity', '1');

            var getImageSrc = jQuery('#sync1 .owl-item.active.center img.owl-lazy').attr('data-src');

            var getImageSrcNext = jQuery('#sync1 .owl-item.active.center').next().find('img.owl-lazy').attr('data-src');

            //var getImageSrcNext2 = jQuery('#sync1 .owl-item.active.center').next().next().find('img.owl-lazy').attr('data-src');

            jQuery('#sync1 .owl-item.active.center img.owl-lazy').attr('src',getImageSrc);

        

            jQuery('#sync1 .owl-item.active.center').next().find('img.owl-lazy').attr('src',getImageSrcNext);

            //otLogEvent("PHOTO VIEW");

           

        //jQuery('#sync1 .owl-item.active.center').next().next().find('img.owl-lazy').attr('src',getImageSrcNext2);

        },100);

    

    })

    

    jQuery('#playslide').on('click', function() {

        owl.trigger('play.owl.autoplay');

        jQuery(this).hide();

        jQuery('#pauseslide').show();

        jQuery('#playslide').removeClass('active');

    });

    jQuery('#pauseslide').on('click', function() {

        owl.trigger('stop.owl.autoplay');

        jQuery(this).hide();

        jQuery('#playslide').show();

        jQuery('#playslide').addClass('active');

    });

    jQuery('.owl-prev, .owl-next').on('click', function() {

        jQuery('#playslide').show();

        jQuery('#pauseslide').hide();

        setTimeout(function() {

            var owlSync1 = jQuery('#sync1');

            owlSync1.trigger('stop.owl.autoplay');

            jQuery('#pauseslide').hide();

            jQuery('#playslide').show();

        }, 2000);

    });

    jQuery('#playslide').hide();

    var owl = jQuery('#sync1');

    owl.owlCarousel();

    owl.on('changed.owl.carousel', function(property) {

        loadNumberDetail(property);

    });

    jQuery(document).on("click", ".dropdown-menu li a.listval", function() {

        setTimeout(function() {

            var owlSync1 = jQuery('#sync1');

            owlSync1.trigger('stop.owl.autoplay');

            jQuery('#pauseslide').hide();

            jQuery('#playslide').show();

        }, 0);

        var toIndex = jQuery(this).attr('indexval') - 1;

        jQuery("#sync1").trigger("to.owl.carousel", [toIndex, 1, true]);

        jQuery("#sync2").trigger("to.owl.carousel", [toIndex, 1, true]);

        jQuery('#sync2 .owl-item').removeClass('currentThumb');

        toIndex = toIndex + 1;

        jQuery('.imgThumb-' + toIndex).parent().addClass('currentThumb');

        owl.trigger('stop.owl.autoplay'); // Stop autoplay

    });

    var totalItems = jQuery('#sync2 .owl-item').length;

    var imgCounter = 1;

    jQuery('#sync1 .item > img').each(function(idx, img) {

        var pTitle = img.title; // Get The image title

        if (jQuery(this).parent().parent().hasClass('cloned')) {} else {

            jQuery('.slider-dropdown .dropdown-menu').append(jQuery('<a/>', {

                value: imgCounter,

                text: pTitle,

                class: 'listval',

                indexval: imgCounter

            }));

            imgCounter = imgCounter + 1;

        }

    });

    jQuery(".slider-dropdown .dropdown-menu a").wrap("<li><li/>");

    

    // Handler for .load() called.

    // Listen to owl events:

    var totalItems = jQuery('#sync1 .item').length;

    var currentIndexVal = jQuery('#sync1 div.active').find('.item').attr('class');

    if (currentIndexVal) {

        //console.log(currentIndexVal);

        var currentIndexArr = currentIndexVal.split('-');

        var currentIndex = currentIndexArr[1];

        var imgTitle = jQuery("#sync1 .owl-item.active img").attr("title");

        jQuery('.slidetitle').html('' + imgTitle + '');

        jQuery('.num').html('' + '( ' + currentIndex + ' of ' + totalItems  + ' )' + '');



        /* jQuery for current images for full screen slider */

        jQuery('#slide-status').attr('data-slide-to',currentIndex - 1);

        

    }

    dropdown_width();

});

/* js for photopanel dropdown */

function dropdown_width(){

    var dwidth=jQuery('#section2 .slider-dropdown .dropdown-menu').width();

    jQuery('#section2 .dropdown.slider-dropdown .btn.btn-default').css('min-width',dwidth);

    jQuery('#section2 .slider-dropdown .dropdown-menu').css('width','100%');

}



jQuery(window).resize(function() {

    dynnamicWidthThubSlide();

    dropdown_width();

    setTimeout(function() {

        var owlSync1 = jQuery('#sync1');

        owlSync1.trigger('stop.owl.autoplay');

        jQuery('#pauseslide').hide();

        jQuery('#playslide').show();

    }, 2000);

});



/*Photo panel Dropdown js for dynamic add photo name  */

function loadNumberDetail(property) {

    var totalItems = jQuery('#sync1 .item').length ;

    var current = property.item.index;

    var imgObj = jQuery(property.target).find(".owl-item").eq(current).find("img");

    var src = imgObj.attr('src');

    var currentIndexClass = imgObj.parent().attr('class');

    currentIndexArr = currentIndexClass.split('-');

    currentIndex = currentIndexArr[1];

    var imgTitle = imgObj.attr('title');

    jQuery('.slidetitle').html('' + imgTitle + '');

    jQuery('.num').html('' + '( ' + currentIndex + ' of ' + totalItems  + ' )' + '');



    /* jQuery for current images for full screen slider */

    jQuery('#slide-status').attr('data-slide-to',currentIndex-1);

    if (currentIndex == totalItems) {

        setTimeout(function() {

            jQuery("#sync1").trigger("to.owl.carousel", [0, 300, true]);

        }, 3000);

    }

}



function stopOwlSlider() {

    var owlSync1 = jQuery('#sync1');

    owlSync1.trigger('stop.owl.autoplay');

    jQuery('#pauseslide').hide();

    jQuery('#playslide').show();

}



function dynnamicWidthThubSlide(){

    var win_width = jQuery(window).width();

    if(win_width > 767){

        var nav_arrows_width = jQuery('owl-prev').width();

        jQuery('#sync2').css('width',win_width- 80);

    }

}



/* Stop autoplay on drag event */

function dragcallback(){

	jQuery('#sync2 .owl-stage').css('transition','0s');

	jQuery('#pauseslide').hide();

	jQuery('#playslide').show();

	setTimeout(function() {

		 var owl = jQuery('#sync1.owl-carousel');

		 owl.trigger('stop.owl.autoplay');

	}, 2100);

}





/*  Photo panel js for start the auto sliding process when it's in the viewport. */

//!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

//

//var photo_flag = 0;

//

//jQuery(window).scroll(function() {

//    

//    if (jQuery('#sync1').visible(true)) {

//        

//        if(photo_flag == 0 ){

//            alert();

//            // The element is visible

//            setTimeout(function() {

//                 var owl = jQuery('#sync1.owl-carousel');

//                 owl.trigger('play.owl.autoplay');

//            }, 2100);

//            photo_flag++;

//        }

//        console.log(photo_flag);

//    } else {

//        // The element is NOT visible

//        photo_flag = 0;

//        console.log(photo_flag);

//    }

//});

