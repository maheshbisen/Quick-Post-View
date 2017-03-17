//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(){
	//loads popup only if it is disabled
	if(popupStatus==0){
		jQuery("#backgroundPopup").css({
			"opacity": "0.5" //"0.7"
		});
		jQuery("#backgroundPopup").fadeIn("slow");
		jQuery("#popupEasy").fadeIn("slow");
		popupStatus = 1;
	}
}

//disabling popup with jQuery magic!
function disablePopup(){
	//disables popup only if it is enabled
	if(popupStatus==1){
		jQuery("#backgroundPopup").fadeOut("slow");
		jQuery("#popupEasy").fadeOut("slow");
		popupStatus = 0;
	}
}

//centering popup
function centerPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = jQuery("#popupEasy").height();
	var popupWidth = jQuery("#popupEasy").width();
	//centering
	//alert(windowHeight);
	jQuery("#popupEasy").css({
		"position": "absolute",
		"top": windowHeight/2-popupHeight/2,		
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	
	jQuery("#backgroundPopup").css({
		"height": windowHeight
	});
}


jQuery.fn.center = function () {     this.css("position","absolute"); this.css("top", ((jQuery(window).height() - this.outerHeight()) / 2) + jQuery(window).scrollTop() + "px"); this.css("left", ((jQuery(window).width() - this.outerWidth()) / 2) + jQuery(window).scrollLeft() + "px"); return this; } 

//CONTROLLING EVENTS IN jQuery
jQuery(document).ready(function(){
	
	//LOADING POPUP
	jQuery("a.popUpLinks").click(function(){										
		metaData = jQuery(this).attr('rel');
		metaData = metaData.split(',');
		popupURL = metaData[0];
		popupWidth = metaData[1];
		popupHeight = metaData[2];
	
		jQuery("#popupEasy").css("max-width",popupWidth).css("height",popupHeight);
	
		//centering with css
		centerPopup();

		//load popup
		loadPopup();
		
		//Pass popup page URL to load it through ajax
		jQuery('#EasyPopUpContent').load(popupURL);

	});
				
	//CLOSING POPUP
	//Click the x event!
	jQuery("#popupEasyClose").click(function(){
		jQuery('#EasyPopUpContent').load('wait.php');									
		disablePopup();
	});
		

	//Click out event!
	jQuery("#backgroundPopup").click(function(){
		jQuery('#EasyPopUpContent').load('wait.php');											 
		disablePopup();
		//location.reload();
	});
	
	//Press Escape event!
	jQuery(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
			//location.reload();
		}
	});

});