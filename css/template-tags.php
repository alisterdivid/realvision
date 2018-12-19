<?php
/**
 * Custom template tags for Enigma
 *
 * @package WordPress
 * @subpackage Enigma
 * @since Enigma 1.6
 */

/*-----------------------------------------------------------------------------------*/
/*	1. Comments Navigation
/*-----------------------------------------------------------------------------------*/

if ( ! function_exists( 'tdenigma_comment_nav' ) ) :
function tdenigma_comment_nav() {
	if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) :
	?>
	<nav class="navigation comment-navigation" role="navigation">
		<h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', 'tdenigma' ); ?></h2>
		<div class="nav-links">
			<?php
				if ( $prev_link = get_previous_comments_link( esc_html__( 'Older Comments', 'tdenigma' ) ) ) :
					printf( '<div class="nav-previous">%s</div>', $prev_link );
				endif;

				if ( $next_link = get_next_comments_link( esc_html__( 'Newer Comments', 'tdenigma' ) ) ) :
					printf( '<div class="nav-next">%s</div>', $next_link );
				endif;
			?>
		</div>
	</nav>
	<?php
	endif;
}
endif;

/*-----------------------------------------------------------------------------------*/
/*	2. Entry Title Meta
/*-----------------------------------------------------------------------------------*/

if ( ! function_exists( 'tdenigma_entrytitle_meta' ) ) :
	function tdenigma_entrytitle_meta() {
		printf('<ul class="entry-meta bottom-line">');
		printf('<li class="entry-date-single">');
		printf(''. the_time('j F, Y') .'');
		printf('</li>');
		printf( '<li class="entry-author"><span class="author vcard"><a class="url fn n" href="%2$s">%3$s</a></span></li>',
		esc_html_x( 'Author', 'Used before post author name.', 'tdenigma' ),esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),get_the_author());
		$categories_list = get_the_category_list( esc_html_x( ', ', 'Used between list items, there is a space after the comma.', 'tdenigma' ) );
			printf( '<span class="entry-category"><span class="screen-reader-text">%1$s </span>%2$s</span>',esc_html__( 'Categories', 'tdenigma' ),$categories_list);
		printf('<li class="entry-comments">');
		printf('<a href="'. get_comments_link() .'">');
		printf( esc_html(_nx( 'One comment', '%1$s comments', get_comments_number(), 'comments title', 'tdenigma' )), number_format_i18n( get_comments_number() ));
		printf('</a></li>');
		printf('</ul>');
	}
endif;

/*-----------------------------------------------------------------------------------*/
/*	3. Entry Footer Meta
/*-----------------------------------------------------------------------------------*/

if ( ! function_exists( 'tdenigma_entry_meta' ) ) :
function tdenigma_entry_meta() {
	printf('<div class="row mt-30">');
    printf('<div class="col-md-8">');
	printf('<div class="entry-tags">');
	printf(''. the_tags( '<h6>'. esc_html__('Tags:','tdenigma') .'</h6> ', ', ' ).'');
	printf('</div>');
	printf('</div>');
	printf('<div class="col-md-4 clearfix">');
	printf('<div class="entry-share">');
	printf('<h6>'. esc_html__('Share:','tdenigma') .'</h6>');
    printf('<div class="socials"><a href="http://twitter.com/home?status='. get_the_title() .'+'. get_the_permalink() .'"><i class="fa fa-twitter"></i></a><a href="http://www.facebook.com/share.php?u='. get_the_permalink() .'/&title='. get_the_title() .'"><i class="fa fa-facebook"></i></a><a href="https://plus.google.com/share?url='. get_the_permalink() .'"><i class="fa fa-google-plus"></i></a></div>');
    printf('</div>');    
	printf('</div>');     
}
endif;

/*-----------------------------------------------------------------------------------*/
/*	4. Post Thumbnail Meta
/*-----------------------------------------------------------------------------------*/

if ( ! function_exists( 'tdenigma_post_thumbnail' ) ) :
function tdenigma_post_thumbnail() {
	if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
		return;
	}
	if ( is_singular() ) :
	?>
	<div class="post-thumbnail">
		<?php the_post_thumbnail(); ?>
	</div>
	<?php else : ?>
	<a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true">
		<?php
			the_post_thumbnail( 'post-thumbnail', array( 'alt' => get_the_title() ) );
		?>
	</a>
	<?php endif; 
}
endif;

/*-----------------------------------------------------------------------------------*/
/*	5. Permalink Meta
/*-----------------------------------------------------------------------------------*/

if ( ! function_exists( 'tdenigma_get_link_url' ) ) :
function tdenigma_get_link_url() {
	$has_url = get_url_in_content( get_the_content() );
	return $has_url ? $has_url : apply_filters( 'tdenigma_permalink', get_permalink() );
}
endif;

/*-----------------------------------------------------------------------------------*/
/*	6. Excerpts Meta
/*-----------------------------------------------------------------------------------*/

if ( ! function_exists( 'tdenigma_excerpt_more' ) && ! is_admin() ) :
function tdenigma_excerpt_more( $more ) {
	$link = sprintf( '<a href="%1$s" class="more-link">%2$s</a>',
		esc_url( get_permalink( get_the_ID() ) ),
		sprintf( esc_html__( 'Continue reading %s', 'tdenigma' ), '<span class="screen-reader-text">' . get_the_title( get_the_ID() ) . '</span>' )
		);
	return ' &hellip; ' . $link;
}
add_filter( 'excerpt_more', 'tdenigma_excerpt_more' );
endif;

/*-----------------------------------------------------------------------------------*/
/*	7. Breadcrumbs Meta
/*-----------------------------------------------------------------------------------*/
 
if ( ! function_exists( 'tdenigma_breadcrumb' ) ) :
function tdenigma_breadcrumb () {
     
    $tdenigma_separator  = '&#47;';
    $tdenigma_id         = 'breadcrumb';
    $tdenigma_class      = 'breadcrumb';
    $tdenigma_home_title = esc_html__('Home','tdenigma');
	$tdenigma_parents ='';
    global $tdenigma_wp_query,$post;
    $tdenigma_category = get_the_category();
     
    echo '<ol id="' . esc_html($tdenigma_id) . '" class="' . esc_html($tdenigma_class) . '">';
    if ( !is_front_page() ) {
        echo '<li class="item-home"><a class="bread-link bread-home" href="' . get_home_url() . '" title="' . esc_html($tdenigma_home_title) . '">' . esc_html($tdenigma_home_title) . '</a></li>';
        if ( is_single() ) {
            echo '<li class="item-cat item-cat-' . esc_html($tdenigma_category[0]->term_id) . ' item-cat-' . esc_html($tdenigma_category[0]->category_nicename) . '"><a class="bread-cat bread-cat-' . esc_html($tdenigma_category[0]->term_id) . ' bread-cat-' . esc_html($tdenigma_category[0]->category_nicename) . '" href="' . esc_html(get_category_link($tdenigma_category[0]->term_id )) . '" title="' . esc_html($tdenigma_category[0]->cat_name) . '">' . esc_html($tdenigma_category[0]->cat_name) . '</a></li>';
            echo '<li class="item-current item-' . esc_html($post->ID) . '"><span class="bread-current bread-' . esc_html($post->ID) . '" title="' . esc_html(get_the_title()) . '">' . esc_html(get_the_title()) . '</span></li>';
        } else if ( is_category() ) {
            echo '<li class="item-current item-cat-' . esc_html($tdenigma_category[0]->term_id) . ' item-cat-' . esc_html($tdenigma_category[0]->category_nicename) . '"><span class="bread-current bread-cat-' . esc_html($tdenigma_category[0]->term_id) . ' bread-cat-' . esc_html($tdenigma_category[0]->category_nicename) . '">' . esc_html($tdenigma_category[0]->cat_name) . '</span></li>';
        } else if ( is_page() ) {
            if( $post->post_parent ){
                $tdenigma_anc = get_post_ancestors( $post->ID );
                $tdenigma_anc = array_reverse($tdenigma_anc);
                foreach ( $tdenigma_anc as $tdenigma_ancestor ) {
                    $tdenigma_parents .= '<li class="item-parent item-parent-' . $tdenigma_ancestor . '"><a class="bread-parent bread-parent-' . $tdenigma_ancestor . '" href="' . get_permalink($tdenigma_ancestor) . '" title="' . get_the_title($tdenigma_ancestor) . '">' . get_the_title($tdenigma_ancestor) . '</a></li>';
                }
                echo esc_url($tdenigma_parents);
                echo '<li class="item-current item-' . esc_html($post->ID) . '"><span title="' . esc_html(get_the_title()) . '"> ' . esc_html(get_the_title()) . '</span></li>';
            } else {
                echo '<li class="item-current item-' . esc_html($post->ID) . '"><span class="bread-current bread-' . esc_html($post->ID) . '"> ' . esc_html(get_the_title()) . '</span></li>';
            }
        } else if ( is_tag() ) {
            $tdenigma_term_id = get_query_var('tag_id');
            $tdenigma_taxonomy = 'post_tag';
            $tdenigma_args ='include=' . $tdenigma_term_id;
            $tdenigma_terms = get_terms( $tdenigma_taxonomy, $tdenigma_args );
            echo '<li class="item-current item-tag-' . esc_html($tdenigma_terms[0]->term_id) . ' item-tag-' . esc_html($tdenigma_terms[0]->slug) . '"><span class="bread-current bread-tag-' . esc_html($tdenigma_terms[0]->term_id) . ' bread-tag-' . esc_html($tdenigma_terms[0]->slug) . '">' . esc_html($tdenigma_terms[0]->name) . '</span></li>';
        } elseif ( is_day() ) {
            echo '<li class="item-year item-year-' . esc_html(get_the_time('Y')) . '"><a class="bread-year bread-year-' . esc_html(get_the_time('Y')) . '" href="' . esc_html(get_year_link( get_the_time('Y') )) . '" title="' . esc_html(get_the_time('Y')) . '">' . esc_html(get_the_time('Y')) .''. esc_html__('Archives','tdenigma') .'</a></li>';
            echo '<li class="item-month item-month-' . esc_html(get_the_time('m')) . '"><a class="bread-month bread-month-' . esc_html(get_the_time('m')) . '" href="' . esc_html(get_month_link( get_the_time('Y')), esc_html(get_the_time('m') )) . '" title="' . esc_html(get_the_time('M')) . '">' . esc_html(get_the_time('M')) . ' '. esc_html__('Archives','tdenigma') .'</a></li>';
            echo '<li class="item-current item-' . esc_html(get_the_time('j')) . '"><span class="bread-current bread-' . esc_html(get_the_time('j')) . '"> ' . esc_html(get_the_time('jS')) . ' ' . esc_html(get_the_time('M')) . ' '. esc_html__('Archives','tdenigma') .'</span></li>';
        } else if ( is_month() ) {
            echo '<li class="item-year item-year-' . esc_html(get_the_time('Y')) . '"><a class="bread-year bread-year-' . esc_html(get_the_time('Y')) . '" href="' . esc_html(get_year_link( get_the_time('Y') )) . '" title="' . esc_html(get_the_time('Y')) . '">' . esc_html(get_the_time('Y')) . ' '. esc_html__('Archives','tdenigma') .'</a></li>';
            echo '<li class="item-month item-month-' . esc_html(get_the_time('m')) . '"><span class="bread-month bread-month-' . esc_html(get_the_time('m')) . '" title="' . esc_html(get_the_time('M')) . '">' . esc_html(get_the_time('M')) . ' '. esc_html__('Archives','tdenigma') .'</span></li>';
        } else if ( is_year() ) {
            echo '<li class="item-current item-current-' . esc_html(get_the_time('Y')) . '"><span class="bread-current bread-current-' . esc_html(get_the_time('Y')) . '" title="' . esc_html(get_the_time('Y')) . '">' . esc_html(get_the_time('Y')) . ' '. esc_html__('Archives','tdenigma') .'</span></li>';
        } else if ( is_author() ) {
            global $author;
            $userdata = get_userdata( $author );
            echo '<li class="item-current item-current-' . esc_html($userdata->user_nicename) . '"><span class="bread-current bread-current-' . esc_html($userdata->user_nicename) . '" title="' . esc_html($userdata->display_name) . '">' . ''. esc_html__('Author:','tdenigma') .' ' . esc_html($userdata->display_name) . '</span></li>';
        } else if ( get_query_var('paged') ) {
            echo '<li class="item-current item-current-' . esc_html(get_query_var('paged')) . '"><span class="bread-current bread-current-' . esc_html(get_query_var('paged')) . '" title="'. esc_html__('Page','tdenigma') .' ' . esc_html(get_query_var('paged')) . '">'.esc_html__('Page','tdenigma') . ' ' . esc_html(get_query_var('paged')) . '</span></li>';
        } else if ( is_search() ) {
            echo '<li class="item-current item-current-' . esc_html(get_search_query()) . '"><span class="bread-current bread-current-' . esc_html(get_search_query()) . '" title="'. esc_html__('Search Results for :','tdenigma') .' ' . esc_html(get_search_query()) . '"> '. esc_html('Search results','tdenigma') .'</span></li>';
        } elseif ( is_404() ) {
            echo '<li>' . esc_html__('Error 404','tdenigma') . '</li>';
        }
    }
    echo '</ul>';
}
endif;

/*-----------------------------------------------------------------------------------*/
/*	8. Post Pagination Meta
/*-----------------------------------------------------------------------------------*/

if ( ! function_exists( 'tdenigma_post_nav' ) ) :
	function tdenigma_post_nav() {
		global $tdenigma_post;
		$previous = ( is_attachment() ) ? get_post( $tdenigma_post->post_parent ) : get_adjacent_post( false, '', true );
		$next     = get_adjacent_post( false, '', false );
		if ( ! $next && ! $previous )
			return;
		?>
    	<div class="post-navigation" role="navigation">
			<div class="post-left">
				<?php previous_post_link( '%link', __('<i class="fa-long-arrow-left fa"></i>') ); ?>
            </div>
			<div class="post-right">
				<?php next_post_link( '%link', __('<i class="fa-long-arrow-right fa"></i>') ); ?>
			</div>
		</div>
	<?php }
endif;

/*-----------------------------------------------------------------------------------*/
/*	9. Portfolio Pagination Meta
/*-----------------------------------------------------------------------------------*/

if ( ! function_exists( 'tdenigma_port_nav' ) ) :
	function tdenigma_port_nav() {
		global $tdenigma_post;
		$previous = ( is_attachment() ) ? get_post( $tdenigma_post->post_parent ) : get_adjacent_post( false, '', true );
		$next     = get_adjacent_post( false, '', false );
		if ( ! $next && ! $previous )
			return;
		?>
    	<div class="portfolio-navigation" role="navigation">
			<div class="portfolio-left">
				<?php previous_post_link( '%link', __('<i class="fa-angle-left fa fa-2x"></i>')); ?>
            </div>
			<div class="portfolio-right">
				<?php next_post_link( '%link', __('<i class="fa-angle-right fa fa-2x"></i>')); ?>
			</div>
		</div>
	<?php }
endif;