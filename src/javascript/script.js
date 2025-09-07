$(document).ready(function(){
  $('#mobile_btn').on('click',function(){
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x');
  });

  const section = $('section');
  const navItem = $('.nav-item');

  $(window).on('scroll',function(){
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    section.each(function(i){
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom){
        activeSectionIndex = i;
        return false;
      }
    })

    navItem.removeClass('active');
    $(navItem[activeSectionIndex]).addClass('active')
  });
});