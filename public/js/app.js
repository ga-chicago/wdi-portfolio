console.log("hello ya dingus")

$('.downArrow').click(function() {
    $('html, body').animate({
        scrollTop: $('#1').offset().top
    }, 2000);
});

$('.downArrow2').click(function() {
    $('html, body').animate({
        scrollTop: $('#2').offset().top
    }, 2000);
});