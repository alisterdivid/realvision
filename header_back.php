<!DOCTYPE html>
<html lang="en">
<!-- Mirrored from spws.homevisit.com/hvid/106988 by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 05 Sep 2016 12:41:26 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, user-scalable=no">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Realvision:<?php echo get_bloginfo('name');?></title>
<!-- Bootstrap -->
<base >
<link rel="shortcut icon" href="<?php echo get_template_directory_uri();?>/images/favicon-icon.png" type="image/x-icon">
<link rel="icon" href="<?php echo get_template_directory_uri();?>/images/favicon-icon.png" type="image/x-icon">
<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/reset.css">
<!-- CSS reset -->
<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/style.css">
<!-- Resource style -->
<link href="<?php echo get_template_directory_uri();?>/css/bootstrap.min.css" rel="stylesheet" />
<link href="<?php echo get_template_directory_uri();?>/css/build.css" rel="stylesheet"/>
<!-- Owl Carousel -->
<link href="<?php echo get_template_directory_uri();?>/css/owl.carousel.css" rel="stylesheet"/>
<!-- Normalize Css for reset -->
<link href="<?php echo get_template_directory_uri();?>/css/normalize.css" rel="stylesheet"/>
<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/jquery.fancybox.css"/>
<link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900" rel="stylesheet">
<!-- <link rel="stylesheet" href="css/font-awesome.css"/> -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
          <script src="js/html5shiv.min.js"></script>
          <script src="js/respond.min.js"></script>
        <![endif]-->
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="<?php echo get_template_directory_uri();?>/js/jquery.min.js"></script><!--1.11.2Version-->
<!--   <script src="js/jquery.lazyload.js"></script>-->
<!-- page loader js  -->
<script>
function switchVisible() {
	if (document.getElementById('side-view1')) {
			if (document.getElementById('side-view1').style.display == 'none') {
				document.getElementById('side-view1').style.display = 'block';
				document.getElementById('largeview1').style.display = 'none';						
			}
			else {
				document.getElementById('side-view1').style.display = 'none';
				document.getElementById('largeview1').style.display = 'block';
			}
	}

}
function switchVisible2() {
	if (document.getElementById('side-view2')) {
		if (document.getElementById('side-view2').style.display == 'none') {
			document.getElementById('side-view2').style.display = 'block';
			document.getElementById('largeview2').style.display = 'none';						
		}
		else {
			document.getElementById('side-view2').style.display = 'none';
			document.getElementById('largeview2').style.display = 'block';
		}
	}
}
function switchVisible3() {
	if (document.getElementById('side-view3')) {
		if (document.getElementById('side-view3').style.display == 'none') {
			document.getElementById('side-view3').style.display = 'block';
			document.getElementById('largeview3').style.display = 'none';						
		}
		else {
			document.getElementById('side-view3').style.display = 'none';
			document.getElementById('largeview3').style.display = 'block';
		}
	}
}

function switchVisible4() {
	if (document.getElementById('sideview4')) {
		if (document.getElementById('sideview4').style.display == 'none') {
			document.getElementById('sideview4').style.display = 'block';
			document.getElementById('largeview4').style.display = 'none';						
		}
		else {
			document.getElementById('sideview4').style.display = 'none';
			document.getElementById('largeview4').style.display = 'block';
		}
	}
}

jQuery(window).ready(function () {
	// FADE OUT YOUR OVERLAYING DIV
	jQuery('body').css('display', 'block');
	setTimeout(function () {
		jQuery('html').css('overflow-y', 'auto');
		jQuery('#loading-overlay').fadeOut();

	}, 5000);
	/* Set second after how many second slideshow is autoplay */
	setTimeout(function () {
		jQuery("#carousel").carousel("cycle");
	}, 5000);

});
</script>
<link href="<?php echo get_template_directory_uri();?>/css/style.css" rel="stylesheet">
<link href="<?php echo get_template_directory_uri();?>/css/photoPanel.css" rel="stylesheet">
<link href="<?php echo get_template_directory_uri();?>/style.css" rel="stylesheet">
<script language="Javascript">
if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/iPod/i))) {
	// do nothing
} else {
	theWidth = screen.width * .80;
	theHeight = screen.height * .90;
	window.resizeTo(theWidth, theHeight);
	window.focus();
}
jQuery(document).ready(function($) {
	jQuery('#menu-main-menu li:eq(4)').after('<li class="hidden-xs menu-border"></li>');  
});
</script>
<?php wp_head(); ?>
</head>
<body>
<!--loading page  start here-->
<div class="spinner-wrapper">
  <div id="loading-overlay" class="loading-overlay">
    <div id="loader" >
      <div class="address-loader">
        <?php if ( is_active_sidebar( 'loader_text' ) ) : ?>
        <?php dynamic_sidebar( 'loader_text' ); ?>
        <?php endif; ?>
      </div>
      <h1 class="h1_white"><img src="<?php echo get_template_directory_uri();?>/images/logo-video-new.png" alt="" /></h1>
      <div class="loader7">
        <div class="loader7-bounce1"></div>
        <div class="loader7-bounce2"></div>
        <div class="loader7-bounce3"></div>
      </div>
    </div>
  </div>
</div>
<!--loading page  start end--> 
<!--Header part start here-->
<header class="clearfix main_header" id="header_section">
  <div class="container-fluid top-fluid header_section">
    <div class="header-top" id="sticky_header"> 
      <!-- Top menu start -->
      <nav class="navbar navbar-default" id="nav">
        <div class="container-fluid"> 
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-style="fast" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" id="menu-top"> </button>
            <a class="logo h1_logo"><?php echo get_bloginfo('name');?><!--90 De Vere Gardens, North York, ON M5M 3G2--></a> </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <?php
			  wp_nav_menu( array(
			  'menu'   => 'Main Menu',
			   'container' => '',
			   'menu_class' => 'nav navbar-nav navbar-right',
			   'link_after' => '<i class="fa fa-angle-right fa-2x  pull-right"></i>',
			  ) );
			  ?>
          </div>
          <!-- /.navbar-collapse --> 
        </div>
        <!-- /.container-fluid --> 
        <!--<div class="container-fluid"><span id="monitor" style="display: none;"></span></div>--> 
      </nav>
      <!-- Top menu End --> 
    </div>
    <!-- /.header-top --> 
    <!-- Top Share Property section start -->
    <div class="top_share hidden-xs text-center" id="home-custom">
      <?php if ( is_active_sidebar( 'sidebar_share' ) ) : ?>
      <?php dynamic_sidebar( 'sidebar_share' ); ?>
      <?php endif; ?>
    </div>
    <!-- Top Share Property section end --> 
    <!-- Top panel image section start -->
    <div class="clearfix mobile-bg-image"> </div>
    <!-- Top panel image section end --> 
    <!-- Top panel Text and icon section start -->
    <div class="header-bottom" id="header-bottom">
      <div class="text-center">
        <div>
          <h1><span class="home-no">1315 Wharf St</span></h1>
          <h2>Pickering, ON L1W1A5</h2>
          <ul class="list-inline">
            <li><a href="#photo-panel-scroll" id="hbl_1" class="hd-icon"><img src="<?php echo get_template_directory_uri();?>/images/photo-icon-title.png" alt="photoicon" class="hd-icon-img" /><br>
              <br>
              <span>photos</span></a></li>
            <li><a href="#section-video" id="hbl_2" class="hd-icon"><img src="<?php echo get_template_directory_uri();?>/images/video-icon-title.png" alt="videoicon" class="hd-icon-img"/><br>
              <br>
              <span>video</span></a></li>
            <li><a href="#" id="hbl_4" class="hd-icon"><img src="<?php echo get_template_directory_uri();?>/images/3d-icon-title.png" alt="3dicon" class="hd-icon-img"/><br><br><span>3d</span></a></li>
             <li><a href="#floor_plan" id="hbl_4" class="hd-icon"><img src="<?php echo get_template_directory_uri();?>/images/floor-icon-title.png" alt="3dicon" class="hd-icon-img"/><br><br><span>floorplan</span></a></li>-->
            
          </ul>
        </div>
      </div>
    </div>
    <!-- Top panel Text and icon section start --> 
    <!-- scrollTop section start -->
    <div class="scroll-more text-center" id="scrollTop">
      <p> more <a href="#" ><i class="fa fa-angle-down fa-2x"></i></a> </p>
    </div>
    <!-- scrollTop  section end --> 
  </div>
</header>
<!--Header part ends here--> 
<!-- Top panel video section start -->
<div id="video-wrap" class="hidden-xs ">
  <div class="vid_overlay"></div>
  <video poster="<?php echo get_template_directory_uri();?>/images/top-video-bg.jpg" id="my-video" preload="none" autobuffer="none" autoplay loop muted metadata="true" automatic="true">
    <source src="<?php echo get_template_directory_uri();?>/video/1315_wharf_st.mp4" type="video/mp4">
  </video>
</div>
<!-- Top panel video section end --> 