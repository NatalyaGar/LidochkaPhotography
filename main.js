// Sticky navbar
// =========================
$(document).ready(function() {
  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop) {
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    } else {
      sticky.removeClass("is-sticky");
      stickyWrapper.height("auto");
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $("<div>").addClass("sticky-wrapper"); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass("sticky");

    // Scroll & resize events
    $(window).on("scroll.sticky-onscroll resize.sticky-onscroll", function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });

  $(" .submit").click(function(event) {
    console.log("Clicked button");

    var firstName = $(" #firstName").val();
    var email = $(" #email").val();
    var message = $(" #message").val();
    var statusElm = $("#status");
    statusElm.empty();

    if (firstName.length >= 2) {
      statusElm.append("<div>First name is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append(
        "<div>First name is not valid. Required. Please fill.</div>"
      );
    }

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Email is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Email is not valid. Required. Please fill.</div>");
    }

    if (message.length >= 2) {
      statusElm.append("<div>Message is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append(
        "<div>Message is not valid. Required. Please fill.</div>"
      );
    }
  });
});
