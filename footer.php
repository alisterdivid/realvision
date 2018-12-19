<!-- Footer section start -->



<footer class="clearfix hidden" id="footer">
  
  <div class="container" id="bottom-footer">

    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 remove-padding">

      <?php if ( is_active_sidebar( 'footer_share' ) ) : ?>

      <?php dynamic_sidebar( 'footer_share' ); ?>

      <?php endif; ?>

      <!-- .footer-left --> 

    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 remove-padding">

      <div class="footer-right">

        <div class="text-center">

          <h1 class="h1_white"><img id="loading-logo" src="<?php echo get_template_directory_uri();?>/images/realvison.png" height="100px" width="330px" alt="Real Vision" title="Real Vision" /></h1>

        </div>

      </div>

      <!-- .footer-right --> 

    </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 remove-padding">
      </div>
    <div style="color: #000;clear: both;font-size: 16px;font-family: 'Lato', sans-serif;text-align: center;font-weight: 700;position: relative; top: 20px;">© <?php echo date('Y');?> realvision home marketing solutions.</div>
    <div class="clearfix">
      <div class="col-lg-12 col-md-12 col-sm-12 footer-left pull-left remove-padding"> </div>

    </div>

  </div>
  
</footer>

<!-- Footer section end --> 



<!--  Photo panel Full screen lightbox model -->

<div class="modal fade" id="myproperty_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

  <div class="vertical-alignment-helper">

    <div class="modal-dialog vertical-align-center"> 

      <!-- Modal content-->

      <div class="modal-content">

        <div class="modal-body">

          <button type="button" class="close" data-dismiss="modal"> <img src="<?php echo get_template_directory_uri();?>/images/close-modal.png"> </button>

          <div data-interval="false" id="property_gallery" class="carousel slide carousel-stats-property  carousel-fade" data-ride="carousel"> 

            <!-- Wrapper for slides -->

            <div class="carousel-inner" role="listbox">

              <?php

                                       $i=0;

                                       $args = array( 'post_type' => 'property_photos' ) ;

                                        $the_query = new WP_Query( $args );

                                        if($the_query->have_posts()) while ($the_query->have_posts()) : $the_query->the_post();

                                            $thumb_image = get_field('property_photo_thumb_image');

                                            $main_image = get_field('property_photo_main_image');

                                            $class_first = "item";

                                            if($i==0){

                                               $class_first = "item active"; 

                                            }

                                               ?>

              }

              <div class="<?php echo $class_first;?>"> <img data-xl="<?php echo $main_image['url'];?>" data-name="photoSlide1" title="<?php the_title()?>">

                <button id="showtooltip" class="info-property" type="button" type="button"

                                                        data-toggle="tooltip" data-placement="top" title="" data-original-title="Info">

                </button>

              </div>

              <?php       

                                            $i++;

                                        endwhile;    

                                      ?>

            </div>

            <!-- Left and right controls --> 

            

          </div>

          <div class="image-nav center-block text-center"> Section Titling Dolor sit <br>

            <div id="carousel-property-stats">Images 1 </div>

          </div>

          <a class="pull-left left-btn" role="button" href="#property_gallery" role="button" data-slide="prev"> <i class="fa fa-angle-left fa-3x"></i> </a> <a class="pull-right right-btn" role="button" href="#property_gallery" role="button" data-slide="next"> <i class="fa fa-angle-right fa-3x"></i> </a> </div>

      </div>

    </div>

  </div>

</div>



<!-- Email Me a Tour Modal start --> 

<!-- Modal -->

<div class="modal fade" id="Email-modal" role="dialog">

  <div class="vertical-alignment-helper">

    <div class="modal-dialog vertical-align-center"> 

      <!-- Modal content-->

      <div class="modal-content">

        <div class="modal-header">

          <button type="button" class="close" data-dismiss="modal" id="emailTourFormClose"> <img src="<?php echo get_template_directory_uri();?>/images/close-modal.png"> </button>

          <h2 class="modal-title">Email this Virtual Tour</h2>

          <h5>Send this RealVision Virtual Tour to the email address below.</h5>

        </div>

        <div class="modal-body">

          <div class="container-fluid">

            <?php

                                echo do_shortcode( '[contact-form-7 id="67" title="Email me a tour"]' );

                                ?>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>

<!-- Email Me a Tour Modal End--> 



<!-- Request info Modal start --> 

<!-- Modal -->

<div class="modal fade" id="request-modal" role="dialog">

  <div class="vertical-alignment-helper">

    <div class="modal-dialog vertical-align-center"> 

      <!-- Modal content-->

      <div class="modal-content">

        <div class="modal-header">

          <button type="button" class="close" data-dismiss="modal" id="requestInfoClose"> <img src="<?php echo get_template_directory_uri();?>/images/close-modal.png"> </button>

          <h2 class="modal-title">Request Information</h2>

          <h5>To contact the listing agent to receive more information about this listing. Simply fill out the form below.</h5>

        </div>

        <div class="modal-body">

          <div class="container-fluid">

            <?php

                                   echo do_shortcode( '[contact-form-7 id="68" title="Request Information"]' );

                                 ?>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>

<!-- Request info  Modal End--> 



<!--  Brochure Modal start --> 

<!-- Modal -->

<div class="modal fade" id="brochure" role="dialog">

  <div class="vertical-alignment-helper">

    <div class="modal-dialog vertical-align-center"> 

      <!-- Modal content-->

      <div class="modal-content">

        <button type="button" class="close" data-dismiss="modal"> <img src="<?php echo get_template_directory_uri();?>/images/close-modal.png" /> </button>

        <div class="modal-body">

          <embed id="pdf-attachment" src="#"> 

        </div>

      </div>

    </div>

  </div>

</div>

<!-- Brochure Modal  End--> 



<a href="#" class="scrollup" style="display: none;"> <i class="fa fa-chevron-up scroll-arrow"></i> </a> 

<!--a href="#bottom-footer" class="scrollup1" style="height:45px; display: none; top:500px;">

           <i class="fa fa-chevron-down scroll-arrow1"></i>

        </a-->

<style>

		.scrollup1 {

    width: 50px;

    height: 50px;

    position: fixed;

    bottom: 25%;

    right: 20px;

    display: none;

    background: #4178E1;

    z-index: 9999;

    border-radius: 50%;

    color: #FFF;

}

.scroll-arrow1 {

    position: absolute;

    top: 12px;

    left: 15px;

    font-size: 20px;

    transition: 0.3s;

    -webkit-transition: 0.3s;

    -moz-transition: 0.3s;

    -o-transition: 0.3s;

}

		</style>

<script src="<?php echo get_template_directory_uri();?>/js/bootstrap.min.js"></script> 

<script>

            /* js for Photo panel slide name character length */

            jQuery(document).ready(function () {

                jQuery("#sync2 .slide-name").each(function () {

                    jQuery(this).text(jQuery(this).text().substring(0, 23));



                });

            });

        </script> 

<script src="<?php echo get_template_directory_uri();?>/js/jquery.sticky.js"></script><!--sticky header js--> 

<script src="<?php echo get_template_directory_uri();?>/js/jquery.fullscreen.min.js"></script><!-- fullscreen plugin --> 

<script src="<?php echo get_template_directory_uri();?>/js/owl.carousel.min.js" type="text/javascript"></script> 



<!--Agentlisting js and photogallery--> 

<script src="<?php echo get_template_directory_uri();?>/js/plan.js"></script> 

<!--  vimeo player js --> 

<script src="<?php echo get_template_directory_uri();?>/js/froogaloop2.min.js"></script> 

<script src="<?php echo get_template_directory_uri();?>/js/jquery.fancybox.js"></script> 

<script src="<?php echo get_template_directory_uri();?>/js/photonew.js"></script> 

<script src="<?php echo get_template_directory_uri();?>/js/custom.js"></script> 

<script src="<?php echo get_template_directory_uri();?>/js/custom2.js"></script> 

<script src="<?php echo get_template_directory_uri();?>/js/ie-photopanel.js"></script> 

<!-- Script for init google map --> 

<!--<script src="<?php echo get_template_directory_uri();?>/js/modernizr.js"></script> <!-- Modernizr --> 

<script src="<?php echo get_template_directory_uri();?>/js/masonry.pkgd.min.js"></script> 

<script src="<?php echo get_template_directory_uri();?>/js/jquery.flexslider-min.js"></script> 

<script src="<?php echo get_template_directory_uri();?>/js/main.js"></script> <!-- Resource jQuery --> 


<script type="text/javascript">
            function emailTourForm(fMLSID) {
                otLogEvent('EMAIL TOUR SUBMIT');
                var postData = jQuery("#emailTourForm").serialize();
                jQuery.ajax({
                    'url': 'emailTour.cshtml',
                    'type': 'post',
                    'data': postData,
                    'dataType': 'html',
                    success: function (data) {
                        //var data    =   $.parseJSON(data);
                        alert("Your tour has been sent.");
                        jQuery("#emailTourFormClose").trigger("click");
                         //$("#obCommunityLocation").html(data);
                        //$("#save-search").fadeOut(1000).hide();
                        //alert("loaded");
                    }
                });
            }
            function contactUsForm(fMLSID) {
                otLogEvent('CONTACT FORM SUBMIT');
                var postData = jQuery("#contactusform").serialize();
                jQuery.ajax({
                    'url': 'contact-us.cshtml',
                    'type': 'post',
                    'data': postData,
                    'dataType': 'html',
                    success: function (data) {
                        //var data    =   $.parseJSON(data);
                        alert("Your Request Form Has Been Sent.");
                        //$("#obCommunityLocation").html(data);
                        //$("#save-search").fadeOut(1000).hide();
                        //alert("loaded");
                    }
                });
            }
            function requestInfoForm(fMLSID) {
                otLogEvent('REQUEST INFO SUBMIT');
                var postData = jQuery("#requestInfoForm").serialize();
                jQuery.ajax({
                    'url': 'contact-us.cshtml',
                    'type': 'post',
                    'data': postData,
                    'dataType': 'html',
                    success: function (data) {
                        //var data    =   $.parseJSON(data);
                        alert("Your Request Form Has Been Sent.");
                        jQuery("#requestInfoClose").trigger("click");
                        //$("#obCommunityLocation").html(data);
                        //$("#save-search").fadeOut(1000).hide();
                        //alert("loaded");
                    }
                });
            }
            function initMap() {
                var myLatLng = {lat: 43.816277, lng: -79.080006};
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 17,
                    center: myLatLng,
                    zoomControl: true,
                    scaleControl: true,
                    scrollwheel: false
                });
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: '1315 Wharf St Pickering, ON L1W1A5 CANADA'
                });
            }
            jQuery(document).ready(function () {           
               setTimeout(function(){
                    var AgentBlockH = jQuery(".agent_Blockheight").outerHeight();
                    jQuery(".Property_logo_height").css('height',AgentBlockH);

                    //var addresHeight=jQuery(".property-address").outerHeight();
     			    //jQuery(".broker-logo-contact").css('height',addresHeight);

                },100);
               	/*var w = jQuery(window).height();
            	//alert(w);
            	$('#section7').css('height', w);*/
				
				
				// Start: Code Added By Hitesh
				 jQuery('#iframe_Google_Street_View').addClass('scrolloff'); // set the pointer events to none on doc ready
				jQuery('#Google_Street_View').on('click', function () {
					jQuery('#iframe_Google_Street_View').removeClass('scrolloff'); // set the pointer events true on click
				});
				// you want to disable pointer events when the mouse leave the canvas area;
				jQuery("#iframe_Google_Street_View").mouseleave(function () {
					jQuery('#iframe_Google_Street_View').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
				});
				
				 jQuery('#iframe_Bing_Maps').addClass('scrolloff'); // set the pointer events to none on doc ready
				jQuery('#Bing_Maps').on('click', function () {
					jQuery('#iframe_Bing_Maps').removeClass('scrolloff'); // set the pointer events true on click
				});
				// you want to disable pointer events when the mouse leave the canvas area;
				jQuery("#iframe_Bing_Maps").mouseleave(function () {
					jQuery('#iframe_Bing_Maps').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
				});
				
				jQuery(".imgThumb-1").trigger("click");
				
            });
        </script> 
        

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD2_haaT_CVI1yV566xMHcMTXwwevqaTJE&callback=initMap"

    async defer></script> 



<!--<script async defer src="https://maps.googleapis.com/maps/api/js?signed_in=false&amp;callback=initMap"></script>-->

<?php wp_footer(); ?>

<style>
.marker:hover{
 height:25px !important;
 width:30px !important;	
}
</style>
<script>
jQuery(document).ready(function($){
  jQuery("#sync2 .owl-item:eq(1)").click();

})

</script>

</body></html>