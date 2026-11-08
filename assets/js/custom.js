(function($) {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");

  if (toggle && menu) {
    toggle.addEventListener("click", function(e) {
      menu.classList.toggle("open");
    });
  }

  if (close && menu) {
    close.addEventListener("click", function(e) {
      menu.classList.remove("open");
    });
  }

  // Close menu after clicking a link on smaller screens (< 846px)
  $(".main-menu a").on("click", function() {
    if ($(window).width() < 846 && menu) {
      menu.classList.remove("open");
    }
  });

  $(".hover").mouseleave(function() {
    $(this).removeClass("hover");
  });

  $(".isotope-wrapper").each(function() {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function() {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(this).on("change", filter);
    filter();
  });
})(jQuery);
