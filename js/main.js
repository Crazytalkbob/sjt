var currentPerson = 0;

$(document).ready(function() {
    $('#mobile-menu').click(function() {
        $('.navbar-content').toggleClass('active');
        $('#mobile-menu').toggleClass('active');
    });

    $('.navbar-content li a').click(function() {
        $('.navbar-content').toggleClass('active');
        $('#mobile-menu').toggleClass('active');
    });

    $('.people-arrow').click(function() {

        var dir = $(this).data('direction');

        if (currentPerson < 300 && dir === 'right') {
            currentPerson += 100;
            if (currentPerson === 300) {
                $('.right-arrow').removeClass('active');
            }
            if (currentPerson === 100) {
                $('.left-arrow').addClass('active');
            }
        } else if (currentPerson > 0 && dir === 'left') {
            currentPerson -= 100;
            if (currentPerson === 0) {
                $('.left-arrow').removeClass('active');
            }
            if (currentPerson === 200) {
                $('.right-arrow').addClass('active');
            }
        }

        $('.people-container').css('left', '-' + currentPerson + '%');

    });
});
