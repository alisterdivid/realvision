<?php

/**

 * Twenty Fifteen functions and definitions

 *

 * Set up the theme and provides some helper functions, which are used in the

 * theme as custom template tags. Others are attached to action and filter

 * hooks in WordPress to change core functionality.

 *

 * When using a child theme you can override certain functions (those wrapped

 * in a function_exists() call) by defining them first in your child theme's

 * functions.php file. The child theme's functions.php file is included before

 * the parent theme's file, so the child theme functions would be used.

 *

 * @link https://codex.wordpress.org/Theme_Development

 * @link https://codex.wordpress.org/Child_Themes

 *

 * Functions that are not pluggable (not wrapped in function_exists()) are

 * instead attached to a filter or action hook.

 *

 * For more information on hooks, actions, and filters,

 * {@link https://codex.wordpress.org/Plugin_API}

 *

 * @package WordPress

 * @subpackage realvision

 */

add_theme_support('post-thumbnails');

show_admin_bar( false );

ini_set('max_execution_time', 0);
ini_set('post_max_size', '1024M');
ini_set('upload_max_filesize', '1024M');


/* Register Widget */

function rvtheme_widget_init() {



	// Loader text widget

	register_sidebar( array(

		'name'          =>  __( 'Loader Text', 'realvision' ),

		'id'            => 'loader_text',

		'before_widget' => '',

		'after_widget'  => '',

		'before_title'  => '',

		'after_title'   => '',

	) );



    // Sidebar share widget

	register_sidebar( array(

		'name'          =>  __( 'Sidebar Share', 'realvision' ),

		'id'            => 'sidebar_share',

		'before_widget' => '',

		'after_widget'  => '',

		'before_title'  => '',

		'after_title'   => '',

	) );



   //  Detail section text

	register_sidebar( array(

		'name'          =>  __( 'Detail Section Text', 'realvision' ),

		'id'            => 'detail_section_text',

		'before_widget' => '',

		'after_widget'  => '',

		'before_title'  => '',

		'after_title'   => '',

	) );



	// Footer share widget

	register_sidebar( array(

		'name'          =>  __( 'Footer Share', 'realvision' ),

		'id'            => 'footer_share',

		'before_widget' => '',

		'after_widget'  => '',

		'before_title'  => '',

		'after_title'   => '',

	) );	



}

add_action( 'widgets_init', 'rvtheme_widget_init' );





function create_property_photos_post_type() {

  register_post_type( 'property_photos',

    array(

      'labels' => array(

        'name' => __( 'Property Photos' ),

        'singular_name' => __( 'Property Photo' ),

		'add_new_item' => __( 'Add New Property Photo' )

      ),

	  'supports' => array( 'title', 'editor', 'thumbnail', 'revisions' ),

      'public' => true,

      'has_archive' => true,

    )

  );

}

add_action( 'init', 'create_property_photos_post_type' );





/* Theme Customization*/

function rvtheme_header_callout( $wp_customize ) {

	$wp_customize->add_section( 'rvtheme-header-callout-section' , array(

	    'title'      => 'Header Callout',

	) );



	$wp_customize->add_setting('rvtheme-header-callout-title', array(

		'default' => '18 ANDRIANA CRESCENT, MARKHAM, ON L6B 0C8'

	));



   $wp_customize->add_control( new WP_Customize_Control($wp_customize, 'rvtheme-header-callout-title-control', array(

   		'label' => 'Title',

   		'section'	=> 'rvtheme-header-callout-section',

   		'settings' =>	'rvtheme-header-callout-title'

   	)));



}

add_action( 'customize_register', 'rvtheme_header_callout' );





