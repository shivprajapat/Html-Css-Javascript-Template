// style switcher

const styleSwitcherToggle = () => {
  const switcherToggler = document.querySelector(".js-style-switcher-toggler");
  const switcher = document.querySelector(".js-style-switcher");

  switcherToggler.addEventListener("click", function () {
    switcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
  });
};
styleSwitcherToggle();
// theme color

const themeColor = () => {
  const hueSlider = document.querySelector(".js-hue-slider");
  const html = document.querySelector("html");

  const setHue = (value) => {
    html.style.setProperty("--hue", value);
    document.querySelector(".js-hue").innerHTML = value;
  };
  hueSlider.addEventListener("input", function () {
    setHue(this.value);
    // set the user's preference in local storage
    localStorage.setItem("--hue", this.value);
  });
  const slider = (value) => {
    hueSlider.value = value;
  };
  // check for saved user preference, if any, on load of the website
  if (localStorage.getItem("--hue") !== null) {
    setHue(localStorage.getItem("--hue"));
    slider(localStorage.getItem("--hue"));
  } else {
    // default color is value
    const hue = getComputedStyle(html).getPropertyValue("--hue");
    setHue(hue);
    console.log(hue);

    slider(hue.split(" ").join(""));
  }
};

themeColor();

// theme light and dark mode

const themeLightDark = () => {
  const darkModeCheckbox = document.querySelector(".js-dark-mode");

  const themeMode = () => {
    if (localStorage.getItem("theme-dark") == "false") {
      document.body.classList.remove("t-dark");
    } else {
      document.body.classList.add("t-dark");
    }
  };
  darkModeCheckbox.addEventListener("click", function () {
    localStorage.setItem("theme-dark", this.checked);
    themeMode();
  });
  //   check for saved user preference, if any, on load of the website

  if (localStorage.getItem("theme-dark") !== null) {
    themeMode();
  }
  if (document.body.classList.contains("t-dark")) {
    darkModeCheckbox.checked = true;
  }
};
themeLightDark();

// navigator

const navigator = () => {
  const navToggler = document.querySelector(".js-nav-toggler");
  const nav = document.querySelector(".js-nav");
  const navItems = nav.querySelectorAll("li");

  const navToggle = () => {
    nav.classList.toggle("open");
    navToggler.classList.toggle("active");
  };
  navToggler.addEventListener("click", navToggle);
  navItems.forEach((li) => {
    li.querySelector("a").addEventListener("click", () => {
      if (window.innerWidth <= 767) {
        navToggle();
      }
    });
  });
};
navigator();