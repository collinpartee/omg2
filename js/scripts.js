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
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pHeight = $('#run-away-container').height(),
    pWidth = $('#run-away-container').width(),
    child = $('#run-away'),
    cHeight = $('#run-away').height(),
    cWidth = $('#run-away').width();
    console.log('container width :', pWidth, 'height: ', pHeight);
    console.log('image width :', cWidth, 'height: ', cHeight);
    console.log('image width :', child);

$('#run-away').hover(function()
{
    var yValue = pWidth - (cWidth + 50),
    yValue2 = getRandomInt(0,yValue),
    xValue = (pHeight - cHeight)/4,
    xValue2 = getRandomInt(0, xValue);

    var usedVal = (yValue2%3) ? (yValue2 * -1) : yValue2; 
    var usedVal2 = (xValue2%3) ? (xValue2 * -1) : xValue2; 
    // console.log('y:', yValue2, yValue2 < (pWidth + cWidth));

    $(this).css('left', usedVal + 'px').css('top', usedVal2 + 'px');
});
