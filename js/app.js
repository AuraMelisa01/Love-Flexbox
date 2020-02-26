$('.home').on('click', function(e) {
    e.preventDefault();
    var strAncla = '#' + $(this).data('home');
    $('html,body').animate({ scrollTop: $(strAncla).offset().top }, 500);
});
$('.services').on('click', function(e) {
    e.preventDefault();
    var strAncla = '#' + $(this).data('services');
    $('html,body').animate({ scrollTop: $(strAncla).offset().top }, 500);
});
$('.work').on('click', function(e) {
    e.preventDefault();
    var strAncla = '#' + $(this).data('work');
    $('html,body').animate({ scrollTop: $(strAncla).offset().top }, 500);
});
$('.projets').on('click', function(e) {
    e.preventDefault();
    var strAncla = '#' + $(this).data('projets');
    $('html,body').animate({ scrollTop: $(strAncla).offset().top }, 500);
});