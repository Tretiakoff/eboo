$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    function smoothScroll(page) {
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, 750);

        event.preventDefault();
    }

    document.querySelectorAll('.sign-up')[0].onclick = function () {
        smoothScroll('#register');
    };

    document.querySelectorAll('.register')[0].onclick = function () {
        smoothScroll('#register');
    };

    document.querySelectorAll('.more')[0].onclick = function () {
        smoothScroll('#project');
    };

    document.querySelectorAll('.next')[0].onclick = function () {
        smoothScroll('#project');
    };

    document.querySelectorAll('.google-play')[0].onclick = function () {
        window.open('https://play.google.com/store?hl=fr', '_blank');
    };

    document.querySelectorAll('.app-store')[0].onclick = function () {
        window.open('https://itunes.apple.com/fr/app/apple-store/id375380948?mt=8', '_blank');
    };
});