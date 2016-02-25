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
});