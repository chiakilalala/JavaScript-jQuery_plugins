/* DOMContentLoaded 事件是在 DOM 結構被完整的讀取跟解析後就會被觸發，
不須等待外部資源讀取完成*/

var index = 0,
    amount = 0,
    translationComplete = true,
    moveOffset = 0;

document.addEventListener('DOMContentLoaded', function(e) {
    var carousel = document.getElementById('carousel');
    amount = document.getElementsByClassName('slide').length; //總長度
    moveOffset = parseInt(window.getComputedStyle(document.getElementById('carousel-container')).width, 10);
    document.getElementById('carousel').style.width = (amount * moveOffset) + 'px';
    for (var i = 0; i < amount; i++) {
        currTransl[i] = -moveOffset;
        document.getElementsByClassName("slide")[i].addEventListener("transitionend", transitionCompleted, true);
        document.getElementsByClassName("slide")[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);
        document.getElementsByClassName("slide")[i].addEventListener("oTransitionEnd", transitionCompleted, true);
        document.getElementsByClassName("slide")[i].addEventListener("MSTransitionEnd", transitionCompleted, true);

    }
    // add the last item to the start so that translateX(-moveOffset) works (In case the first click is the previous button)
    document.getElementById('carousel').insertBefore(document.getElementById('carousel').children[4], document.getElementById('carousel').children[0])
        // add click events to control arrows
    document.getElementById('prev').addEventListener('click', prev, true);
    document.getElementById('next').addEventListener('click', next, true);

});

function prev() {

}