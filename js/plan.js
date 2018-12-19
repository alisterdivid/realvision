jQuery.noConflict();

jQuery(document).ready(function () {



    /* Hide all floor plan side view on page */

    jQuery('#large-view1').hide();

    jQuery('#large-view2').hide();

    jQuery('#large-view3').hide();

    jQuery('#large-view4').hide();





    /* Set active marker image in floor plan image*/

    //jQuery('#side-view1 #pin1').attr('src', 'images/now-showing1.html');

    var id = jQuery('#side-view1 #pin1').attr('id');

    var image = jQuery('#side-view1 #pin1').attr('data');

    //var image = id + ".jpg";

    jQuery("#side-view1 .plan-inner").attr('src', image);





    //jQuery('#side-view2 #pin1').attr('src', 'images/now-showing1.html');

    var id = jQuery('#side-view2 #pin1').attr('id');

    var image = jQuery('#side-view2 #pin1').attr('data');

    jQuery("#side-view2 .plan-inner").attr('src', image);



    //jQuery('#side-view3 #pin1').attr('src', 'images/now-showing1.html');

    var id = jQuery('#side-view3 #pin1').attr('id');

    var image = jQuery('#side-view3 #pin1').attr('data');

    jQuery("#side-view3 .plan-inner").attr('src', image);



    //jQuery('#side-view4 #pin1').attr('src', 'images/now-showing1.html');

    var id = jQuery('#side-view4 #pin1').attr('id');

    var image = jQuery('#side-view4 #pin1').attr('data');

    jQuery("#side-view4 .plan-inner").attr('src', image);



    /****************************************************

    *

    * Plan Level One js

    *

    ****************************************************/

    /* Set active marker image in floor plan image*/

    //jQuery("#side-view1 .marker").hover(function (e) {
	
	jQuery("#side-view1 .marker").click(function (e) {

        e.preventDefault();

        jQuery("#side-view1 .marker").each(function () {

            if (jQuery(this).attr('src') == 'images/now-showing1.html') {

                //jQuery(this).removeAttr('src');

                //jQuery(this).attr('src', 'images/camera.html');

            }

        });

        var id = jQuery(this).attr('id');

        var image = jQuery(this).attr('data');



        //var image = id + ".jpg";

        //jQuery(this).attr('src', 'images/now-showing1.html');

        /*  

        var id=jQuery(this).attr('id');

        var image=id+".jpg";

        jQuery(".plan-inner").attr('src', 'images/'+ image).fadeTo("slow");

         

        */

        jQuery(".Home-image")

        .fadeOut(0, function () {

            jQuery("#side-view1 .plan-inner").attr('src', image);

        })

        .fadeIn(0);

    });



    jQuery("#large-view1 .marker").click(function (e) {

        jQuery("#large-view1 .marker").each(function () {

            if (jQuery(this).attr('src') == 'images/now-showing1.html') {

               //jQuery(this).removeAttr('src');

                //jQuery(this).attr('src', 'images/camera.html');



            }

        });

        //jQuery(this).attr('src', 'images/now-showing1.html');

    });



    //jQuery("#large-view1 .marker").hover(function (e) {
	
	jQuery("#large-view1 .marker").click(function (e) {

        jQuery("#large-view1 .marker").each(function () {

            if (jQuery(this).attr('src') == 'images/now-showing1.html') {

                //jQuery(this).removeAttr('src');

                //jQuery(this).attr('src', 'images/camera.html');



            }

        });

        //jQuery(this).attr('src', 'images/now-showing1.html');

    });

    /****************************************************

    *

    * Plan Level Two js

    *

    ****************************************************/





    //jQuery("#side-view2 .marker").hover(function (e) {

	jQuery("#side-view2 .marker").click(function (e) {

        e.preventDefault();

        jQuery("#side-view2 .marker").each(function () {

            if (jQuery(this).attr('src') == 'images/now-showing1.html') {

                //jQuery(this).removeAttr('src');

                //jQuery(this).attr('src', 'images/camera.html');

            }

        });

        var id = jQuery(this).attr('id');

        var image = jQuery(this).attr('data');



        //jQuery(this).attr('src', 'images/now-showing1.html');

        /*  

        var id=jQuery(this).attr('id');

        var image=id+".jpg";

        jQuery(".plan-inner").attr('src', 'images/'+ image).fadeTo("slow");

         

        */

        jQuery(".Home-image")

        .fadeOut(0, function () {

            jQuery("#side-view2 .plan-inner").attr('src', image);

        })

        .fadeIn(0);

    });



    jQuery("#large-view2 .marker").click(function (e) {

        jQuery("#large-view2 .marker").each(function () {

            if (jQuery(this).attr('src') == 'images/now-showing1.html') {

                //jQuery(this).removeAttr('src');

                //jQuery(this).attr('src', 'images/camera.html');



            }

        });

        //jQuery(this).attr('src', 'images/now-showing1.html');

    });

    //jQuery("#large-view2 .marker").hover(function (e) {
	
	jQuery("#large-view2 .marker").click(function (e) {

        jQuery("#large-view2 .marker").each(function () {

            if (jQuery(this).attr('src') == 'images/now-showing1.html') {

                //jQuery(this).removeAttr('src');

                //jQuery(this).attr('src', 'images/camera.html');



            }

        });

        //jQuery(this).attr('src', 'images/now-showing1.html');

    });

    /****************************************************

    *

    * Plan Level Three js

    *

    ****************************************************/



    /* Set active marker image in floor plan */

    //jQuery("#side-view3 .marker").hover(function (e) {
	jQuery("#side-view3 .marker").click(function (e) {


        e.preventDefault();

        jQuery("#side-view3 .marker").each(function () {

            if (jQuery(this).attr('src') == 'images/now-showing1.html') {

                //jQuery(this).removeAttr('src');

                //jQuery(this).attr('src', 'images/camera.html');

            }

        });

        var id = jQuery(this).attr('id');

        var image = jQuery(this).attr('data');



        //jQuery(this).attr('src', 'images/now-showing1.html');

        /*  

        var id=jQuery(this).attr('id');

        var image=id+".jpg";

        jQuery(".plan-inner").attr('src', 'images/'+ image).fadeTo("slow");

         

        */

        jQuery(".Home-image")

        .fadeOut(0, function () {

            jQuery("#side-view3 .plan-inner").attr('src', image);

        })

        .fadeIn(0);

    });



    jQuery("#large-view3 .marker").click(function (e) {

        jQuery("#large-view3 .marker").each(function () {

            if (jQuery(this).attr('src') == 'images/now-showing1.html') {

                //jQuery(this).removeAttr('src');

                //jQuery(this).attr('src', 'images/camera.html');



            }

        });

        //jQuery(this).attr('src', 'images/now-showing1.html');

    });

    //jQuery("#large-view3 .marker").hover(function (e) {
	
	jQuery("#large-view3 .marker").click(function (e) {

        jQuery("#large-view3 .marker").each(function () {

            if (jQuery(this).attr('src') == 'images/now-showing1.html') {

                //jQuery(this).removeAttr('src');

                //jQuery(this).attr('src', 'images/camera.html');



            }

        });

        //jQuery(this).attr('src', 'images/now-showing1.html');

    });

    /****************************************************

    *

    * Plan Level Four js

    *

    ****************************************************/





    /* Set active marker image in floor plan */

    //jQuery("#side-view4 .marker").hover(function (e) {

	jQuery("#side-view4 .marker").click(function (e) {


        e.preventDefault();

        jQuery("#side-view4 .marker").each(function () {

            if (jQuery(this).attr('src') == 'images/now-showing1.html') {

                //jQuery(this).removeAttr('src');

                //jQuery(this).attr('src', 'images/camera.html');

            }

        });

        var id = jQuery(this).attr('id');

        var image = jQuery(this).attr('data');



        //jQuery(this).attr('src', 'images/now-showing1.html');

        /*  

        var id=jQuery(this).attr('id');

        var image=id+".jpg";

        jQuery(".plan-inner").attr('src', 'images/'+ image).fadeTo("slow");

         

        */

        jQuery(".Home-image")

        .fadeOut(0, function () {

            jQuery("#side-view4 .plan-inner").attr('src', image);

        })

        .fadeIn(0);

    });



    jQuery("#large-view4 .marker").click(function (e) {

        jQuery("#large-view4 .marker").each(function () {

            if (jQuery(this).attr('src') == 'images/now-showing1.html') {

                //jQuery(this).removeAttr('src');

                //jQuery(this).attr('src', 'images/camera.html');



            }

        });

        //jQuery(this).attr('src', 'images/now-showing1.html');

    });

    //jQuery("#large-view4 .marker").hover(function (e) {
	
	jQuery("#large-view4 .marker").click(function (e) {

        jQuery("#large-view4 .marker").each(function () {

            if (jQuery(this).attr('src') == 'images/now-showing1.html') {

                //jQuery(this).removeAttr('src');

                //jQuery(this).attr('src', 'images/camera.html');



            }

        });

        //jQuery(this).attr('src', 'images/now-showing1.html');

    });

});

