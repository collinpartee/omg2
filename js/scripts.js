// for sweethut

function getMousePosition(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    console.log("mousemove: ", event);

    $(".sh-image").css("z-index", "0");

    if (mouseX > imageLeft && mouseX < imageRight && mouseY < imageTop) {

        $(".third").css("z-index", "1");

    } else if (mouseX < imageLeft && mouseY < imageTop) {

        $(".third").css("z-index", "1");

    } else if (mouseX < imageLeft && mouseY > imageTop && mouseY < imageBottom) {

        $(".main").css("z-index", "1");

    } else if (mouseX < imageLeft && mouseY > imageBottom) {

        $(".second").css("z-index", "1");

    } else if (mouseX > imageLeft && mouseX < imageRight && mouseY > imageBottom) {

        $(".second").css("z-index", "1");

    } else if (mouseX > imageRight && mouseY > imageBottom) {

        $(".second").css("z-index", "1");

    } else if (mouseX > imageRight && mouseY > imageTop && mouseY < imageBottom) {

        $(".main").css("z-index", "1");

    } else if (mouseX > imageRight && mouseY < imageTop) {

        $(".third").css("z-index", "1");

    } else {

        $(".main").css("z-index", "1");

    }
}


var imageTop = $(".sh-image").offset().top;
var imageLeft = $(".sh-image").offset().left;
var imageBottom = imageTop + $(".sh-image").height();
var imageRight = imageLeft + $(".sh-image").width();


// $(window).mousemove(getMousePosition);

var moveImage = function () {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#top-image").mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('#top-image').css("background-position", newvalueX + "px     " + newvalueY + "px");
    });
}

moveImage();



var animateStat = function(name) {
    $('#'+ name).prop('Counter', 0).animate({
            Counter: $('#'+ name).text()
        }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $('#'+ name).text(Math.ceil(now));
                }
            });
};


$('.stat').viewportChecker({
    // classToAdd: 'animated-stat',
    callbackFunction: function (elem, action) {
        console.log(elem[0].id);
        if(typeof animateStat == 'function') {
            animateStat(elem[0].id);
        }
    }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

$('#run-away').hover(function()
{
    console.log(event.clientX);
    // $(this).css('top', (getRandomInt(-1, 1) + event.clientX) + 'px').css('left', (getRandomInt(-1, 1)+ event.clientY) + 'px');
});
