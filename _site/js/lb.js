$(function() {
    $(".container").hide();
    $(".container").fadeIn('5000');
    $(".showcase-wrapper").hide();
    $(".showcase-wrapper").fadeIn("slow");
    $('.project-box').click(function() {
        $(this).find('.post').slideToggle();
    });
});
