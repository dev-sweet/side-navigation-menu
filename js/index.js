function click(){
    if($('#navSlide').hasClass('sideNav')){
        $('#navSlide').removeClass('sideNav');
        $('#navSlide').addClass('sideNavHide');
          
        $('#darkOverly').removeClass('showOverly');
        $('#darkOverly').addClass('hideOverly');

        $('.menu-title').addClass('d-none');
      }
      else{
          $('#navSlide').removeClass('sideNavHide');
          $('#navSlide').addClass('sideNav');
  
          $('#darkOverly').removeClass('hideOverly');
          $('#darkOverly').addClass('showOverly');
        
          $('.menu-title').removeClass('d-none');
      }
}


$('#navIcon').click(function(){
   click();

})

$('#darkOverly').click(function(){
   click();

})