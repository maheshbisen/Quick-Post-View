<?php
	if (!defined('WP_PLUGIN_URL')) {
		@require_once( realpath('../../../').'/wp-config.php' );
	}
	$postEJP = get_post($_GET["p"]); 
	//$title = $postEJP->post_title;
	//echo $title;
	echo '<br/>';
	echo $postEJP->post_content; 
?>