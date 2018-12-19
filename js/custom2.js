jQuery.noConflict();

var fpViewState = 1;



jQuery(document).ready(function () {

    jQuery("#carousel").carousel("pause");

    //updateFloorPlanView();



    /* Add 1px in sync2(Thumbs) slider */

    var sync2width = jQuery('#sync2 .owl-stage').width();

    jQuery('#sync2 .owl-stage').width(sync2width + 1);

    var winWidth = jQuery(window).width();

    //owlStageDynamicHeight();

    jQuery('.mobile-bg-image').css('height', jQuery(window).height());

    /* top video full height */

    //jQuery('#video-wrap video').css('min-height',jQuery(window).height());

    jQuery('#video-wrap video').width(jQuery(window).width());



    var $vid = jQuery('#video-wrap video');

    var vw = $vid.width();

    var vh = $vid.height();

    var wh = jQuery(window).height();

    var ww = jQuery(window).width();



    if (vw >= ww)

        $vid.css({

            left: -((vw - ww) / 2)

        });

    else

        $vid.css({

            left: 0

        });

    if (vh > wh)

        $vid.css({

            top: -((vh - wh) / 2)

        });

    else

        $vid.css({

            top: 0

        });



    /* top video full height end */









    function dimensionFunction() {

        //jQuery('#video-wrap video').height(jQuery(window).height());

        jQuery('#video-wrap video').width(jQuery(window).width());

    }



    jQuery(window).resize(function () {

        dimensionFunction();

        //owlStageDynamicHeight();

        jQuery('.mobile-bg-image').css('height', jQuery(window).height());

    })



    /* Js for top panel video */

    function videoset() {

        jQuery('.mobile-bg-image').css('height', jQuery(window).height());

        var $vid = jQuery('#video-wrap video');

        var vw = $vid.width();

        var vh = $vid.height();

        var wh = jQuery(window).height();

        var ww = jQuery(window).width();



        if (vw >= ww)

            $vid.css({

                left: -((vw - ww) / 2)

            });

        else

            $vid.css({

                left: 0

            });

        if (vh > wh)

            $vid.css({

                top: -((vh - wh) / 2)

            });

        else

            $vid.css({

                top: 0

            });

    };



    jQuery(window).resize(function () {

        videoset();

        jQuery('.mobile-bg-image').css('height', jQuery(window).height());



    })

    /****************************************************

    *

    * Hidden header 

    *

    ****************************************************/





    var previousScroll = 0;

    /*  Top menu Js */

    jQuery(window).scroll(function () {

        var scroll = jQuery(window).scrollTop();

        // Address scroll value: 750

        if (scroll >= 70) {

            var currentScroll = jQuery(this).scrollTop();

            if (currentScroll > previousScroll) {

                /*setTimeout(function() {

                jQuery("body").addClass("hidden-header");

                }, 500);*/

                jQuery('.navbar-collapse').removeClass('in');

                jQuery('.navbar-toggle').addClass('collapsed');

            } else {

                /*setTimeout(function() {

                jQuery("body").removeClass("hidden-header");

                }, 500);*/

            }

            previousScroll = currentScroll;

        }

    });



    /* View more js*/

    jQuery('.view-more').click(function () {



        if (jQuery(this).prev().hasClass('large')) {

            jQuery(this).prev().height(jQuery(this).prev().find('.bodge').height());

            jQuery(this).prev().removeClass('large');

            jQuery(this).find("span").text("View less");

            jQuery(this).children("i").addClass('fa-chevron-up');

            jQuery(this).children("i").removeClass('fa-chevron-down');

        } else {

            jQuery(this).prev().height('');

            jQuery(this).prev().addClass('large');

            jQuery(this).find("span").text("View more");

            jQuery(this).children("i").addClass('fa-chevron-down');

            jQuery(this).children("i").removeClass('fa-chevron-up');

        }

    });

    /****************************************************

    *

    * SECTION IMAGE WITH parallax background JS

    *

    ****************************************************/





    jQuery.fn.parallaxify = function () {

        //alert();

        return this.each(function () {

            var $element = jQuery(this);

            function percentageSeen() {

                var viewportHeight = jQuery(window).height(),

                winScrollTop = jQuery(window).scrollTop(),

                elementOffsetTop = $element.offset().top,

                elementHeight = $element.height();



                var distance = (winScrollTop + viewportHeight) - elementOffsetTop;

                var percentage = distance / ((viewportHeight + elementHeight) / 100);

                //  alert(percentage);

                if (percentage < 0)

                    return 0;

                else if (percentage > 100)

                    return 100;

                else

                    return percentage;

            }







            jQuery(window).on('scroll', function () {

                $element.css({

                    'background-position': '50%' + '-' + percentageSeen() + 'px'

                });

            });

        });

    };

    var width = jQuery(window).width();

    if (width > 1200) {

        jQuery('.parallax1').parallaxify();

        jQuery('.parallax2').parallaxify();

        jQuery('.parallax3').parallaxify();

        jQuery('.parallax4').parallaxify();

    }



    /****************************************************

    *

    *  Tab panel Dropdown js

    *  fetch the selected tab value and set as a current tab

    *

    ****************************************************/

    jQuery("#tab-dropdown a").click(function () {

        jQuery('#tab-value').text(jQuery(this).text());

    });

    jQuery("#tab-dropdown-map a").click(function () {

        jQuery('#tab-value-map').text(jQuery(this).text());

    });

    jQuery("#tab-dropdown-category a").click(function () {

        jQuery('#tab-category-value').text(jQuery(this).text());

    });





    /* js for 3D dropdown tab */

    jQuery("#tab-dropdown-3d a").click(function () {

        jQuery('#tab-value-3d').text(jQuery(this).text());

    });



    /****************************************************

    *

    *   Toggle Button js in location section 

    *

    ****************************************************/





    /* Toggle Button js for Floor plan level one */

    jQuery('#btn-tab-one').click(function () {

        /*
		otLogEvent("FLOOR PLAN VIEW");

        jQuery("html, body").animate({

            scrollTop: jQuery('#section4').offset().top

        }, 500);
		*/
        jQuery(this).find('.btn').toggleClass('active');

        jQuery(this).find('.btn').toggleClass('btn-default');

        var id = jQuery('#btn-tab-one .active').attr('id');



        if (id == "largeview1") {

            fpViewState = 0;

            // jQuery('#side-view1').fadeOut('slow');

            jQuery('#side-view1').hide();

            jQuery('#large-view1').fadeIn('slow');

        } else {

            fpViewState = 1;

            //jQuery('#side-view1').fadeIn('slow');

            jQuery('#side-view1').show();

            jQuery('#large-view1').hide();

        }

    });



    /* Toggle Button js for Floor plan level two */

    jQuery('#btn-tab-two').click(function () {
		/*
        otLogEvent("FLOOR PLAN VIEW");

        jQuery("html, body").animate({

            scrollTop: jQuery('#section4').offset().top

        }, 500);
		*/
        jQuery(this).find('.btn').toggleClass('active');

        jQuery(this).find('.btn').toggleClass('btn-default');

        var id = jQuery('#btn-tab-two .active').attr('id');



        if (id == "largeview2") {

            fpViewState = 0;

            jQuery('#side-view2').fadeOut('slow');

            jQuery('#side-view2').hide();

            jQuery('#large-view2').fadeIn('slow');

        } else {

            fpViewState = 1;



            jQuery('#side-view2').fadeIn('slow');

            jQuery('#side-view2').show();

            jQuery('#large-view2').hide();

        }

    });



    /* Toggle Button js for Floor plan level three */

    jQuery('#btn-tab-three').click(function () {
		/*
        otLogEvent("FLOOR PLAN VIEW");

        jQuery("html, body").animate({

            scrollTop: jQuery('#section4').offset().top

        }, 500);
		*/
        jQuery(this).find('.btn').toggleClass('active');

        jQuery(this).find('.btn').toggleClass('btn-default');

        var id = jQuery('#btn-tab-three .active').attr('id');



        if (id == "largeview3") {

            fpViewState = 0;



            jQuery('#side-view3').fadeOut('slow');

            jQuery('#side-view3').hide();

            jQuery('#large-view3').fadeIn('slow');

        } else {

            fpViewState = 1;



            jQuery('#side-view3').fadeIn('slow');

            jQuery('#side-view3').show();

            jQuery('#large-view3').hide();

        }

    });



    /* Toggle Button js for Floor plan level four */

    jQuery('#btn-tab-four').click(function () {
		/*
        otLogEvent("FLOOR PLAN VIEW");

        jQuery("html, body").animate({

            scrollTop: jQuery('#section4').offset().top

        }, 500);
		*/
        jQuery(this).find('.btn').toggleClass('active');

        jQuery(this).find('.btn').toggleClass('btn-default');

        var id = jQuery('#btn-tab-four .active').attr('id');





        if (id == "largeview4") {

            fpViewState = 0;



            jQuery('#side-view4').fadeOut('slow');

            jQuery('#side-view4').hide();

            jQuery('#large-view4').fadeIn('slow');

        } else {

            fpViewState = 1;



            jQuery('#side-view4').fadeIn('slow');

            jQuery('#side-view4').show();

            jQuery('#large-view4').hide();

        }

    });





    /****************************************************

    *

    *   Collapse js in Home information section 

    *

    ****************************************************/



    jQuery("#collapse-root").click(function () {

        //jQuery("html, body").animate({scrollTop: jQuery('#co-img').offset()});

        jQuery("html, body").animate({

            scrollTop: jQuery('#section6').offset().top

        }, 600);

        if (jQuery('#co-img').attr('src') == 'images/minus-icon.png') {

            jQuery("html, body").animate({

                scrollTop: jQuery('#section6').offset().top + 1

            }, 1);

            jQuery('#co-img').removeAttr('src');

            jQuery('#co-img').attr('src', 'images/plus-icon.png');





        } else {

            jQuery('#co-img').attr('src', 'images/minus-icon.png');

        }

    });

    /****************************************************

    *

    *  Category list Collapse image change js  

    *

    ****************************************************/

    jQuery(".category-list .collapse-img").click(function () {

        if (jQuery(this).attr('src') == 'images/plus-icon2.html') {

            jQuery(this).removeAttr('src');

            jQuery(this).attr('src', 'images/minus-icon2.html');

        } else {

            jQuery(this).attr('src', 'images/plus-icon2.html');

        }

    });



    /****************************************************

    *

    *  Scroll to Top js  

    *

    ****************************************************/

    jQuery(window).scroll(function () {

        if (jQuery(this).scrollTop() > 100) {

            jQuery('.scrollup').fadeIn();

        } else {

            jQuery('.scrollup').fadeOut();

        }

    });

    jQuery('li.home,.scrollup').click(function () {

        jQuery('.navbar-collapse').removeClass('in');

        if (jQuery(window).width() < 1025) {

            jQuery('.navbar-header button.navbar-toggle').addClass('collapsed');

        }

        jQuery("html, body").animate({

            scrollTop: 0

        }, 600);

        return false;

    });

	

	



    jQuery('#3dview').load(function () {

    });





    jQuery('[name=temp_iframe]').contents().find('button#button-play').click(function () {



    });



    /****************************************************

    *

    * Agent listing Images, myaccent_modal Images change in Mobile view

    *

    ****************************************************/

    if (jQuery(window).width() < 700) {

        /* Agent listing Images */



        jQuery("#agent_main_slider .item img").each(function () {

            //console.log(jQuery(this).attr('data-name'));

            var name = jQuery(this).attr('data-name');

            //alert(jQuery(this).attr('data-name'));

            jQuery(this).attr('src', 'images/mobile-images/' + name);

        });



        /*Gallery modal Images*/

        jQuery("#myproperty_modal .item img").each(function () {

            //console.log(jQuery(this).attr('data-name'));

            var name = jQuery(this).attr('data-name');

            jQuery(this).attr('src', 'images/thumb/' + name);

        });



        /* Accent Modal images */

        jQuery("#myaccent_modal .item img").each(function () {

            //console.log(jQuery(this).attr('data-name'));

            var name = jQuery(this).attr('data-name');

            jQuery(this).attr('src', 'images/mobile-images/' + name);

        });



    }



    jQuery('#top_share').click(function () {

        jQuery('#share_buttons').fadeToggle();

    })

    jQuery(document).mouseup(function (e) {

        var popup = jQuery("#share_buttons");

        if (!jQuery('#top_share').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {

            popup.hide();

        }

    });

    jQuery('.content-load').show();

});





/***********************************************************

 *

 * Property video section js :  Video stop and pause 

 *  when window scroll up or scroll down  

 *

 **********************************************************/



//addds an image at the end of the video so that it is not a black space

var video = document.getElementById('my-video');

var wrapper = document.getElementById('wrapper');

/*var image = document.getElementById('image_background');*/

video.addEventListener('ended', function () {

    video.style.display = 'none';

    image.style.display = 'inline';

}, false);



//play & pause buttons

window.onload = function () {

    var video = document.getElementById("my-video");

/* var playButton = document.getElementById("play-pause");*/

};

//play when video is visible

var videos = document.getElementsByTagName("video"), fraction = 0.8;





function checkScroll() {

    for (var i = 0; i < videos.length; i++) {

        var video = videos[i];

        var x = 0,

        y = 0,

        w = video.offsetWidth,

        h = video.offsetHeight,

        r, //right

        b, //bottom

        visibleX, visibleY, visible,

        parent;



        parent = video;

        while (parent && parent !== document.body) {

            x += parent.offsetLeft;

            y += parent.offsetTop;

            parent = parent.offsetParent;

        }



        r = x + w;

        b = y + h;



        visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));

        visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

        visible = visibleX * visibleY / (w * h);

        var playButton = document.getElementById("play-pause");

        if (visible > fraction) {

            // var vimg = document.getElementById('video_img');

            //vimg.style.display = 'none';

            video.play();





        } else {

            video.pause();

        }

    }

}

window.addEventListener('scroll', checkScroll, false);

window.addEventListener('resize', checkScroll, false);



//check at least once so you don't have to wait for scrolling for the video to start

window.addEventListener('load', checkScroll, false);

checkScroll();

/*   vimeo  */



/* Top panel video and vimeo video js for stop video on scroll  */

var iframe = document.getElementById('vimeo');

var vimfraction = 0.6;

if(iframe != null){

    var player = $f(iframe);

    jQuery('.playpause').click(function() {

        if(jQuery(this).hasClass('start')){

            player.api('play'); 

            jQuery(this).hide();

            //jQuery(".playpause").removeClass('start');

            //jQuery(".playpause").addClass('pause');

        }else{

            player.api("pause");

           // jQuery(".playpause").removeClass('pause');

           // jQuery(".playpause").addClass('start');

        }

    })

}



jQuery(function() {

    var iframe = jQuery('#vimeo')[0];

    if(iframe != null){

        

 

    var player = $f(iframe);

    var status = jQuery('.status');



    // When the player is ready, add listeners for pause, finish, and playProgress

    player.addEvent('ready', function() {

        player.addEvent('pause', onPause);

        player.addEvent('play',onPlay);

       // player.addEvent('finish', onFinish);

       // player.addEvent('playProgress', onPlayProgress);

    });



    // Call the API when a button is pressed

    jQuery('button').bind('click', function() {

        player.api(jQuery(this).text().toLowerCase());

    });

    function onPlay(id){

       // jQuery(".playpause").removeClass('start');

       // jQuery(".playpause").addClass('pause');

         jQuery('.playpause').hide();

    }

    function onPause(id) {

        // jQuery(".playpause").removeClass('pause');

        // jQuery(".playpause").addClass('start');

         jQuery('.playpause').show();

    }

}

});





var j=0;

function checkVimeo() {

if(iframe != null){

    var video = iframe;

    var x = 0,

    y = 0,

    w = video.offsetWidth,

    h = video.offsetHeight,

    r, //right

    b, //bottom

    visibleX, visibleY, visible,

    parent;



    parent = video;

    while (parent && parent !== document.body) {

        x += parent.offsetLeft;

        y += parent.offsetTop;

        parent = parent.offsetParent;

    }



    r = x + w;

    b = y + h;



    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));

    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

    visible = visibleX * visibleY / (w * h);

    //console.log(visible);

    if (visible > vimfraction) {

      //  player.api("play");

    } else {

        player.api("pause");

    // console.log("pause");

    }

}

}

window.addEventListener('scroll', checkVimeo, false);

window.addEventListener('resize', checkVimeo, false);



//check at least once so you don't have to wait for scrolling for the video to start

window.addEventListener('load', checkVimeo, false);

checkVimeo();





function updateFloorPlanView() {



  /*  if (fpViewState == 1) {

        jQuery('#large-view1').hide();

        jQuery('#side-view1').show();

        jQuery('#large-view2').hide();

        jQuery('#side-view2').show();

        jQuery('#large-view3').hide();

        jQuery('#side-view3').show();

        jQuery('#large-view4').hide();

        jQuery('#side-view4').show();



    } else {



        jQuery('#large-view1').show();

        jQuery('#side-view1').hide();

        jQuery('#large-view2').show();

        jQuery('#side-view2').hide();

        jQuery('#large-view3').show();

        jQuery('#side-view3').hide();

        jQuery('#large-view4').show();

        jQuery('#side-view5').hide();







    }*/

}



jQuery(window).scroll(function(){

    scroll = jQuery(window).scrollTop();



    if (scroll >= 400){

        jQuery("#carousel").carousel("pause");

    }else{

        jQuery("#carousel").carousel("cycle");

    }

});

