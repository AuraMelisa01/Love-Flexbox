/*
 * Archivo principal de funcionalidad de JS
 */


$('.home_s').on('click', function(e) {
    e.preventDefault();
    var strAncla = '#' + $(this).data('home');
    $('html,body').animate({ scrollTop: $(strAncla).offset().top }, 2000);
});
$('.services_s').on('click', function(e) {
    e.preventDefault();
    var strAncla = '#' + $(this).data('services');
    $('html,body').animate({ scrollTop: $(strAncla).offset().top }, 2000);
});
$('.work_s').on('click', function(e) {
    e.preventDefault();
    var strAncla = '#' + $(this).data('work');
    $('html,body').animate({ scrollTop: $(strAncla).offset().top }, 2000);
});
$('.projets_s').on('click', function(e) {
    e.preventDefault();
    var strAncla = '#' + $(this).data('projets');
    $('html,body').animate({ scrollTop: $(strAncla).offset().top }, 2000);
});