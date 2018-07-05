$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 75) {
       $(".header-section").addClass("scrolling");
        
      //Mobile Logo change 
      $('#mobileNavBar .mobile-Logo-Only').fadeIn();
      $('#mobileNavBar .mobile-Logo-Vessel').hide(); 
      
    } else {
       $(".header-section").removeClass("scrolling");
      
      //Mobile Logo Change
      $('#mobileNavBar .mobile-Logo-Only').hide();
      $('#mobileNavBar .mobile-Logo-Vessel').fadeIn(); 

    }
});