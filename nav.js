const mobileMenu = document.querySelector(".m-menu");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active-menu-btn");
  mobileMenu.classList.toggle("slide-out");
  mobileMenu.classList.toggle("slide-in");
  if (mobileMenu.classList.contains("slide-out")) {
    setTimeout(() => {
      mobileMenu.classList.add("display-none");
    }, 1000);
  } else {
    mobileMenu.classList.remove("display-none");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 750) {
    mobileMenu.classList.add("slide-out");
    mobileMenu.classList.remove("slide-in");
    setTimeout(() => {
      mobileMenu.classList.add("display-none");
    }, 1000);
  }
});
