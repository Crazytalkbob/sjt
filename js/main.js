var currentPerson = 0;

// Variables for countdown timer
var endDate = 1533735900000,
    numMilliseconds = [
        ['days', 1000 * 60 * 60 * 24],
        ['hours', 1000 * 60 * 60],
        ['minutes', 1000 * 60],
        ['seconds', 1000]
    ];


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

    function updateTimer() {
        var time = endDate - Date.parse(new Date()),
            timerObj = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        if (time < 0) {
            clearInterval(updateTimer);
            return;
        }
        numMilliseconds.forEach(function(val) {
            while (time >= val[1]) {
                timerObj[val[0]] += 1;
                time -= val[1];
            }
        });

        $('#days').html(timerObj.days);
        $('#hours').html(timerObj.hours);
        $('#minutes').html(timerObj.minutes);
        $('#seconds').html(timerObj.seconds);
    }

    updateTimer();
    var countdownInterval = setInterval(updateTimer, 1000);

});
