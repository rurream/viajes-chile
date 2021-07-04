$(document).ready(function() {
    $('.nav-item .nav-link').on('click', function (e) {
        $('.nav-link.active').removeClass("active");
        $(this).addClass('active');
   });
});

// $(".navbar-nav .nav-item a").on("click", function (e) {
//     e.preventDefault();
//     const href = $(this).attr("href");
//     $("html, body").animate({ scrollTop: $(href).offset().top }, 1800);
//   });

(function () {
    var qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "typef_orm",
      b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
      js = ce.call(d, "script");
      js.id = id;
      js.src = b + "embed.js";
      q = gt.call(d, "script")[0];
      q.parentNode.insertBefore(js, q);
    }
  })();