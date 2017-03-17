<?php
/* 
Plugin Name: WP-Easy-Js-Popup
Plugin URI: http://www.masiwebsol.com/pluginss
Description: Displays your post content in in-line popup with customised scroller
Version: 1.0.0
Author: Mahesh Bisen
Author URI: http://www.masiwebsol.com
License: GPL
*/

// Add Popup to JS to head section
function easypop_head_scripts() {
    wp_enqueue_script ('jquery');
	wp_enqueue_script('easypop', WP_CONTENT_URL.'/plugins/easy-js-popup/js/easyjspopup.js', $deps = array('jquery'));
	wp_enqueue_style( 'easypopcss', WP_CONTENT_URL.'/plugins/easy-js-popup/css/easyjspopup.css' );
}
add_action('wp_enqueue_scripts', 'easypop_head_scripts');

function addPopupCont() {  ?>
<div id="popupEasy">
   <a id="popupEasyClose" href="javascript:;"><img alt="Close" title="Close" src="images/close.gif" /></a>
   <div id="EasyPopUpContent"><!--Ajax contest form will load here--></div>
 </div>    
  <div id="backgroundPopup"></div>
<?php
}
add_action('wp_footer', 'addPopupCont');


function excerpt_read_more_link($output) {
 global $post;
 return $output . '<a rel="'.WP_CONTENT_URL.'/plugins/easy-js-popup/loadPost.php?p='.$post->ID.',650px,610px" href="javascript:;" class="popUpLinks" > Read More...</a>';
}
add_filter('the_excerpt', 'excerpt_read_more_link');
add_filter('excerpt', 'excerpt_read_more_link');

?>