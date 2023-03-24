$(document).ready(function () {

  $('.j-hamburger').on('click', function () {
    $('.j-main-menu').toggleClass('is-open');

  });


  //Accordion//

  let prevAccordionBtn = undefined;

  $('.j-accordion-btn').on('click',function () {

    if (prevAccordionBtn === this) {
      $(this).next().slideToggle();
    } else {
      $(prevAccordionBtn).next().slideUp();
      $(this).next().slideDown();
      prevAccordionBtn = this;
    }

  })



  //Табы//

  $('.j-contacts-name').on('click',function () {
    let index = $(this).index('.j-contacts-name');

    $('.j-contacts-name').removeClass('active');
    $(this).addClass('active');

    $('.j-contacts-item').removeClass('active');
    $('.j-contacts-item').eq(index).addClass('active');

  })

})
