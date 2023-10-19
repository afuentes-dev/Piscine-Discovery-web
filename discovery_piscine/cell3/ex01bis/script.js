const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

function fn_increase() {
    const currentHeight = parseInt($('.balloon').css('height'));

    if (currentHeight < 420) {
        $('.balloon').css('width', '+=10');
        $('.balloon').css('height', '+=10');
        $('.balloon').css('backgroundColor', colors[colorIndex]);
        colorIndex = (colorIndex + 1) % colors.length;
        if (currentHeight < 410) {
            $('.balloon').css('backgroundColor', colors[colorIndex]);
            colorIndex = (colorIndex + 1) % colors.length;
        }
    } else {
        $('.balloon').css('width', '200px');
        $('.balloon').css('height', '200px');
        $('.balloon').css('backgroundColor', colors[0]);
        colorIndex = 0;
    }
}

function fn_decrease() {
    const currentHeight = parseInt($('.balloon').css('height'));

    if (currentHeight > 200) {
        $('.balloon').css('width', '-=5');
        $('.balloon').css('height', '-=5');
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        $('.balloon').css('backgroundColor', colors[colorIndex]);
    }
}

$('.increase').on('click', fn_increase);
$('.decrease').on('click', fn_decrease);
