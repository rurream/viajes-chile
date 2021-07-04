$(document).ready(function() {

    // Destacar link de navegación activos
    $('.nav-item .nav-link').on('click', function (e) {
        $('.nav-link.active').removeClass("active");
        $(this).addClass('active');
   });
});


// TypeForm
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