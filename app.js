var shareSocials = $("#myPopup");
var toggle1 = false;
var toggle2 = false;

$(document).ready(function () {
  toggle = false;
  $(".share-icon").click(function (e) {
    if (!toggle) {
      shareSocials.addClass("show");
      shareSocials.removeClass("hide");
      toggle = true;
    } else {
      shareSocials.addClass("hide");
      shareSocials.removeClass("show");
      toggle = false;
    }
  });
  $(".popuptext").click(function (e) {
    if (!toggle) {
      shareSocials.addClass("show");
      shareSocials.removeClass("hide");
      toggle = true;
    } else {
      shareSocials.addClass("hide");
      shareSocials.removeClass("show");
      toggle = false;
    }
  });
});
