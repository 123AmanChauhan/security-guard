function counter() {
    var count = setInterval(function () {
        var c = parseInt($(".wrap8 .counter").text());
        $(".wrap8 .counter").text((++c).toString());
        if (c == 95000) {
            clearInterval(count)
        }
    }, 60)
}
counter();

function counter1() {
    var count = setInterval(function () {
        var c = parseInt($(".wrap8 .counter1").text());
        $(".wrap8 .counter1").text((++c).toString());
        if (c == 5000) {
            clearInterval(count)
        }
    }, 60)
}
counter1();
function counter2() {
    var count = setInterval(function () {
        var c = parseInt($(".wrap8 .counter2").text());
        $(".wrap8 .counter2").text((++c).toString());
        if (c == 460) {
            clearInterval(count)
        }
    }, 60)
}
counter2();
function counter3() {
    var count = setInterval(function () {
        var c = parseInt($(".wrap8 .counter3").text());
        $(".wrap8 .counter3").text((++c).toString());
        if (c == 460) {
            clearInterval(count)
        }
    }, 60)
}
counter3();