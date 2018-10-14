$(function() {
    $('.watchLaterThumb').hover(function(){ //Open on hover
        $('#overlay').css('display', 'block');
    },
    function(){ //Close when not hovered
        $('#overlay').css('display', 'none');
    });

    $('.gitPicWatchLater').click(function () {
      window.open('https://github.com/DavidG636/Youtube-Watch-Later-Player', '_blank');
    });

    $('.webPicWatchLater').click(function () {
      window.open('https://davidg636.github.io/Youtube-Watch-Later-Player/', '_blank');
    });

    $('.gitPicCase').click(function () {
      window.open('https://github.com/DavidG636/Case', '_blank');
    });

    $('.webPicCase').click(function () {
      window.open('https://davidg636.github.io/Case/', '_blank');
    });
});
