window.addEventListener("load",()=>{
  const preloader = document.querySelector('.preloader');
  preloader.classList.add("fade-out");
  setTimeout(() => {
    preloader.style.display = "none"
  // animate on scroll
  AOS.init();
}, 1000);
})
// header

const headerBg = () => {
  const header = document.querySelector(".js-header");
  window.addEventListener("scroll", function () {
    if (this.scrollY > 0) {
      header.classList.add("bg-reveal");
    } else {
      header.classList.remove("bg-reveal");
    }
  });
};
headerBg()
// .header
