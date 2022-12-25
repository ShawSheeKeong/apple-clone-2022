var acc = document.getElementsByClassName("footer-h4-div");
var i;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const cart = document.querySelector(".cart");
const icon = document.querySelector(".menu-div");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  cart.classList.toggle("none");
  icon.classList.toggle("close");
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
              to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var limitFunc = function () {
  if (window.innerWidth > 880) {
    /*your functions for big screen*/
    window.location.reload(true);
    // window.location.href = "/#footer";
  }
};

window.addEventListener("resize", limitFunc);
window.addEventListener("onload", limitFunc);

//SCROLL_MAGIC
window.addEventListener("load", videoScroll);
window.addEventListener("scroll", videoScroll);
let allowPlay = true;

function videoScroll() {
  if (document.querySelectorAll("video[autoplay]").length > 0) {
    var windowHeight = window.innerHeight,
      videoEl = document.querySelectorAll("video[autoplay]");

    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
        videoHeight = thisVideoEl.clientHeight,
        videoClientRect = thisVideoEl.getBoundingClientRect().top;

      document
        .getElementById("before-event-video")
        .addEventListener("ended", function (e) {
          allowPlay = false;
        });

      if (
        allowPlay &&
        videoClientRect <= windowHeight - videoHeight * 0.5 &&
        videoClientRect >= 0 - videoHeight * 0.5
      ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
}
