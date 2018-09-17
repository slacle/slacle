$(document).ready(function(){

    $('nav a').on('click', function(e)  {
    	
    	// don't follow link
    	e.preventDefault();

    	// tab link to section ID
        var tabNumber = $(this).attr('href');
 
        // show and hide sections
        $('section' + '#' + tabNumber).fadeIn(10).siblings().hide();
 
        // toggle active class on tabs
        $(this).addClass('active').siblings().removeClass('active');
     });

});