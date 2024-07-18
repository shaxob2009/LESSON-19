const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);
window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
$(".carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  // dots: false,
  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$(".carousel1").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  // dots: false,
  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
