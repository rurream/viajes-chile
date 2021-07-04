$(document).ready(function() {
    $('.nav-item .nav-link').on('click', function (e) {
        $('.nav-link.active').removeClass("active");
        $(this).addClass('active');
   });
});