// for sweethut

function getMousePosition(event){
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    console.log("mousemove: ", event);

    $(".sh-image").css("z-index","0");

    if(mouseX >imageLeft && mouseX <imageRight && mouseY <imageTop){

        $(".third").css("z-index","1");

    } else if(mouseX <imageLeft && mouseY <imageTop){

        $(".third").css("z-index","1");

    } else if(mouseX <imageLeft && mouseY >imageTop && mouseY <imageBottom){

        $(".main").css("z-index","1");

    } else if(mouseX <imageLeft && mouseY >imageBottom){

        $(".second").css("z-index","1");

    } else if(mouseX >imageLeft && mouseX <imageRight && mouseY >imageBottom){

        $(".second").css("z-index","1");

    } else if(mouseX >imageRight && mouseY >imageBottom){

        $(".second").css("z-index","1");

    } else if(mouseX >imageRight && mouseY >imageTop && mouseY <imageBottom){

        $(".main").css("z-index","1");

    } else if(mouseX >imageRight && mouseY <imageTop){

        $(".third").css("z-index","1");

    } else{

        $(".main").css("z-index","1");

    }
}


var imageTop = $(".sh-image").offset().top;
var imageLeft = $(".sh-image").offset().left;
var imageBottom = imageTop + $(".sh-image").height();
var imageRight = imageLeft + $(".sh-image").width();


$(window).mousemove(getMousePosition);