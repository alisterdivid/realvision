<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Real Vision
 * @since Real Vision
 */
get_header(); ?>
<!--  Container start -->
<div class="content-white content-load" id="section6">
    <!-- Open Hour and date section -->
    <!-- open hour and date section end here -->
    <!--More information section start -->
    <section class="more-info text-center"><img
                src="<?php echo get_template_directory_uri(); ?>/images/home-info-icon-panel.png" title="Property video"
                alt="Property video">
		<?php if ( is_active_sidebar( 'detail_section_text' ) ) : ?>
			<?php dynamic_sidebar( 'detail_section_text' ); ?>
		<?php endif; ?>
        <div class="small-line"></div>
    </section>
    <!--More information section end-->
    <!-- Start  -->
    <section id="section1">
		<?php
		$detail_icons = get_posts( array( 'name' => 'detail-icons' ) );
		if ( $detail_icons ) {
			echo $detail_icons[0]->post_content;
		}
		?>
    </section>
    <!-- End  -->
    <section>
		<?php
		$detail_tabs = get_posts( array( 'name' => 'detail-tabs' ) );
		if ( $detail_tabs ) {
			echo $detail_tabs[0]->post_content;
		}
		?>
    </section>
    <!-- /#section6 -->
    <!-- video and property section start-->
    <!--    <section id="section1">-->
    <!--		--><?php
	//		$video_options = get_posts( array( 'name' => 'video-options' ) );
	//		if ( $video_options ) {
	//			echo $video_options[0]->post_content;
	//		}
	//		?>
    <!--    </section>-->
    <!-- /#section1 -->
    <!-- #section3 -->
    <section id="section3" class="padding_top_nav">
		<?php
		$experience = get_posts( array( 'name' => '3d-experience' ) );
		if ( $experience ) {
			echo $experience[0]->post_content;
		}
		?>
    </section>
    <!--/#section3 -->
    <!-- #section2 -->
    <section id="section2" class="padding_top_nav">
        <div class="section-header text-center"><img
                    src="<?php echo get_template_directory_uri(); ?>/images/photo-icon-panel.png" title="Property video"
                    alt="Property video">
            <h2>Property Photos</h2>
        </div>
        <!-- Photo panel section start -->
        <div id="photo-panel-scroll"></div>
        <!-- This div is only for scrolling purpose (due to offset issue) -->

        <div class="container-fluid" id="section-slider">
            <div class="row">
                <div style="position:relative">

                    <!-- Photo panel large image slide section -->

                    <div id="sync1" class="big-images"><!--data-slider-id="1" owl-main-->

						<?php

						$i = 1;

						//$args = array( 'post_type' => 'property_photos' ) ;
						$args = array( 'post_type' => 'property_photos', 'posts_per_page' => - 1, 'order' => 'ASC' );


						$the_query = new WP_Query( $args );

						if ( $the_query->have_posts() ) {
							while ( $the_query->have_posts() ) : $the_query->the_post();

								$thumb_image = get_field( 'property_photo_thumb_image' );

								$main_image = get_field( 'property_photo_main_image' );

								?>
                                <div class="item img-<?php echo $i; ?>"><img alt="" title="<?php the_title() ?>"
                                                                             data-name="photoSlide1"
                                                                             data-src-sm="<?php echo $main_image['url']; ?>"

                                                                             data-src="<?php echo $main_image['url']; ?>"
                                                                             class="owl-lazy">
                                    <div class="overly"></div>
                                    <div class="carousel-caption">
                                        <h3>
											<?php the_title() ?>
                                        </h3>
                                        <p></p>
                                        <div class="info-close"></div>
                                    </div>
                                </div>
								<?php

								$i ++;

							endwhile;
						}

						?>
                    </div>

                    <!-- Photo panel large image slide section end -->

                    <!-- Photo panel control section start -->

                    <div class="main-slide-control">
<!--                        <button id="showtooltip" type="button" data-toggle="tooltip" data-placement="top" title="Info"-->
<!--                                data-original-title=""></button>-->
<!--                        <button id="playslide" class="play" type="button" data-toggle="tooltip" data-placement="top"-->
<!--                                title="play" data-original-title=""></button>-->
                        <button id="pauseslide" class="stop" type="button" data-toggle="tooltip" data-placement="top"
                                title="stop" data-original-title=""></button>
                        <a href="#property_gallery" data-slide-to="12" id="slide-status"> <span data-toggle="tooltip"
                                                                                                data-placement="top"
                                                                                                title="Full Screen"

                                                                                                data-original-title="">
          <button id="fullscreen" type="button" data-toggle="modal"

                  data-target="#myproperty_modal"> </button>
          </span> </a></div>

                    <!-- Photo panel control section end -->

                    <!-- Photo panel Dropdown start  -->

                    <div class="dropdown slider-dropdown text-left">
                        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"
                                aria-expanded="true"><span class="slidetitle"></span> <span class="num"></span>

                            <!--                                    <span class="caret pull-right"></span>-->

                        </button>
                        <ul class="dropdown-menu">
                        </ul>
                    </div>

                    <!-- Photo panel Dropdown end  -->

                </div>

                <!-- Photo panel Thumb section start-->

                <div id="sync2" class="thumbs">
					<?php

					$i = 1;

					//$args = array( 'post_type' => 'property_photos' ) ;

					$args = array( 'post_type' => 'property_photos', 'posts_per_page' => - 1, 'order' => 'ASC' );

					$the_query = new WP_Query( $args );

					if ( $the_query->have_posts() ) {
						while ( $the_query->have_posts() ) : $the_query->the_post();

							$thumb_image = get_field( 'property_photo_thumb_image' );

							$main_image = get_field( 'property_photo_main_image' ); ?>
                            <div class="item imgThumb-<?php echo $i; ?>"><img src="<?php echo $main_image['url']; ?>">
                                <div class="slide-name">
									<?php the_title() ?>
                                </div>
                            </div>
							<?php

							$i ++;

						endwhile;
					}

					?>
                </div>

                <!-- Photo panel thumb section end -->

            </div>
        </div>
    </section>
    <!-- /#section2 -->

    <!-- #section4  -->

    <!--    <section class="padding_top_nav">-->
    <!---->
    <!--		--><?php
	//
	//		$floor_plan_tour = get_posts( array( 'name' => 'floor-plan-tour' ) );
	//
	//		if ( $floor_plan_tour ) {
	//
	//			echo $floor_plan_tour[0]->post_content;
	//
	//		}
	//		?>
    <!---->
    <!---->
    <!--    </section>-->

    <!-- /#section4 -->

    <!-- #section5 -->

    <section class="padding_top_nav">
		<?php

		$property_location = get_posts( array( 'name' => 'property-location' ) );

		if ( $property_location ) {

			echo $property_location[0]->post_content;

		}

		?>
    </section>
    <section id="section7" class="padding_top_nav">

        <!-- Agent Information and Contact form section -->

        <section class="container-fluid contact-section">
            <div class="row items-container ">
                <div class="col-xs-12">
                    <div class="row">

                        <!-- Agent section -->

						<?php

						$agent_section = get_posts( array( 'name' => 'agent-section' ) );

						if ( $agent_section ) {

							echo $agent_section[0]->post_content;

						}

						?>

                        <!-- Contact form section -->

                        <div class="col-xs-12 col-sm-5 col-md-4 contact-form">
                            <h2>Contact Us</h2>
							<?php

							echo do_shortcode( '[contact-form-7 id="63" title="Contact us"]' );

							?>
                        </div>

                        <!-- Contact form section end -->

                    </div>
                </div>
            </div>
        </section>

        <!-- Brochure, email, Request information and Property social share links section  -->

		<?php

		$mail_and_request = get_posts( array( 'name' => 'email-me-a-tour-and-request-information' ) );

		if ( $mail_and_request ) {

			echo $mail_and_request[0]->post_content;

		}

		?>
</div>

<!-- Container section end -->

<?php get_footer(); ?>
<style>
    p.pera {
        font: inherit !important;
        font-size: 18px !important;
    }
</style>
