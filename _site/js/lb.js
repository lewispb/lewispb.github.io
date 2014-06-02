$(function() {
    $(".container").hide();
    $(".container").fadeIn('5000');
    $(".showcase-wrapper").hide();
    $(".showcase-wrapper").fadeIn("slow");
    $('.project-box').click(function() {
        $(this).find('.post').slideToggle();
    });
    $('a[href^="mailto:"]').each(function() {
        this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
        // Remove this line if you don't want to set the email address as link text:
        this.innerHTML = this.href.replace('mailto:', '');
    });
});
