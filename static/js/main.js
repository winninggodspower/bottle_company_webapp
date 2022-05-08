$(".nav-item").hover(
  function(){
      $(this).addClass('border-bottom');
      $(this).addClass('border-warning');
      $(this).addClass('border-3');
    },
  function(){
    if ($(this).text().toLowerCase().trim() != 'home') {
      console.log($(this).text().toLowerCase().trim());
      $(this).removeClass('border-bottom');
      $(this).removeClass('border-warning');
      $(this).removeClass('border-3');
    }
  });