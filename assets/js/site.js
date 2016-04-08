jQuery(document).ready(function($){
         $(window).scroll(function() {
if ($(this).scrollTop() > 200){  
    $('#header').addClass("sticky");
  }
  else{
    $('#header').removeClass("sticky");
  }
  
	jQuery('#menu-header_menu > li.menu-item-has-children').after().prepend('<span class="open-sub-menu"></span>');
	jQuery('.open-sub-menu').click(function($){
		if(jQuery(window).width() < 768){
			jQuery(this).toggleClass('active');
			jQuery(this).parent('li.menu-item-has-children').children('.sub-menu').slideToggle(500).addClass('visibility-visible');
			jQuery(this).parent('li.menu-item-has-children').siblings('li.menu-item-has-children').children('.sub-menu').slideUp(500);
			jQuery(this).parent('li.menu-item-has-children').siblings('li.menu-item-has-children').children('.open-sub-menu').removeClass('active');
		}
});

