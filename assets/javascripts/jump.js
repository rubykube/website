
$(document).ready(function() {
    $('.js-scrollTo').on('click', function(e) {
        e.preventDefault()

        if (location.pathname.match(/blog\//) == "blog/"){
        let page = $(this).attr('href');
        location.href = '../../' + page;
        } else if (location.pathname.match(/blog/) == "blog"){
        let page = $(this).attr('href');
        location.href = '../' + page;
        } else {
        let page = $(this).attr('href')
        $('html, body').animate({ scrollTop: page ? $(page).offset().top : 0}, 300)

        if (page) {
            window.location.hash = page
        }
        }
    })
})