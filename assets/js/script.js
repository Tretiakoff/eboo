$(function () {
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