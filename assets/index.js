window.addEventListener("scroll", function () {
  let header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  if (scrollY > 100) {
    document.querySelector("scroll-up-btn").classList.add("show");
  } else {
    document.querySelector("scroll-up-btn").classList.remove("show");
  }
});
