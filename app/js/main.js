
$(window).on("load", function () {
    /*-----------Preloader---------------*/
    $(".preloader").fadeOut("slow");
});


$(document).ready(function () {
    /*----------Navbar Shrink-----------*/
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-Shrink");
        }
    });
    /*--------------Video Popup-----------------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "")
        }
        else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == '') {
                $("#player-1").attr("src,videoSrc")
            }
        }
    });


    /*----------------Features Carousel------------------*/
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                item: 1,
            },
            600: {
                item: 2,
            },
            1000: {
                item: 3,
            }
        }
    });

    /*----------------Screenshots Carousel------------------*/
    $('.screenshots-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                item: 1,
            },
            600: {
                item: 2,
            },
            1000: {
                item: 4,
            }
        }
    });

    /*----------------Testimonials Carousel------------------*/
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                item: 1,
            },
            600: {
                item: 2,
            },
            1000: {
                item: 3,
            }
        }
    });

    /*----------------Team Carousel------------------*/
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                item: 1,
            },
            600: {
                item: 2,
            },
            1000: {
                item: 3,
            }
        }
    });

    /*-----------------------Page Scrolling - ScrollIt-----------------------------*/
    $.scrollIt({
        topOffset: -50
    });

    /*--------------------Navbar Collapse---------------------------*/
    $(".nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    /*--------------------Toggle Theme - Light & Dark Mode------------*/
    function toggleTheme() {
        if (localStorage.getItem("shala-theme") !== null) {
            if (localStorage.getItem("shala-theme") == "dark") {
                $("body").addClass("dark");
            }
            else {
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();

    $(".toggle-theme").on("click", function () {
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")) {
            localStorage.setItem("shala-theme", "dark");
        }
        else {
            localStorage.setItem("shala-theme", "light");
        }
    });

    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }
});