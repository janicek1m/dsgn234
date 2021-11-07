var btn = $('.nav_btn');
var item = $('.item');


btn.on('click', function () {
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i ++) 
        sounds[i].pause();
    
    btn.removeClass('is-active');
    $(this).addClass('is-active');

    var num = $(this).attr("num");
    item.removeClass('is-active');
    $('[num="' + num + '"]').addClass('is-active');
    var audio = document.getElementById("audio" + num);
    audio.volume = 0.2;
    audio.play();
});
