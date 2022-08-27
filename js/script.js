// Redirect To HTTPS
// function redirectToHttps() {
//     var httpURL = window.location.hostname + window.location.pathname;
//     var httpsURL = "https://" + httpURL;
//     window.location = httpsURL;
// }
// redirectToHttps();
// End Redirect To HTTPS

// Element Background

// End Element Background


// Countdown
var countDownDate = new Date("2022-09-01T00:00:00").getTime();
function retime(time){
    var x = time;
    if(x < 10){
        x = '0' + x;
    }
    return x;
}
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = retime(days);
    document.getElementById('hours').innerHTML = retime(hours);
    document.getElementById('minutes').innerHTML = retime(minutes)
    document.getElementById('seconds').innerHTML = retime(seconds);
    
    if (distance < 0) {
        var httpURL = window.location.hostname + window.location.pathname;
        window.location = httpURL;
    }
}, 1000);
// End Countdown
