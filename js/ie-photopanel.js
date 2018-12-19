jQuery(document).ready(function () {
/* js for add 1px width in photopanel thumb panel only in firefox browser */	
function firefox(){
	 setTimeout(function() {
            if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
	{
		jQuery('#sync2 .owl-stage').width(jQuery('#sync2 .owl-stage').width() + 1);
		 //Do Firefox-related activities
	}
   
        },1000);
	
}
firefox();
    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0) 
            return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./)) 
            return 11;
        else
            return 0; //It is not IE
    }
    if (GetIEVersion() > 0) {
		
        var imgwidth = jQuery('#sync1 .owl-item .item img').height();
        jQuery('#sync1 .owl-stage-outer').height(imgwidth);
    }
    else {
    }
    jQuery(window).resize(function() {
		firefox();
        if (GetIEVersion() > 0) {
			setTimeout(function(){
				var imgwidth = jQuery('#sync1 .owl-item .item img').height();
				jQuery('#sync1 .owl-stage-outer').height(imgwidth);
			}, 500);
        }
    });
});
