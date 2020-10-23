var index = 0,
    amount = 0,
    currTransl = [],
    translationComplete = true,
    moveOffset = 0;

var transitionCompleted = function() {
        translationComplete = true;
    }
    /*DOMContentLoaded全部建立之後在仔入*/
document.addEventListener("DOMContentLoaded", function(event) {
    var carousel = document.getElementById('carousel');

    amount = document.getElementsByClassName("slide").length; /*全部幻燈片數目 */
    // 取得全部容器寬度
    moveOffset = parseInt(window.getComputedStyle(document.getElementById('carousel-container')).width, 10);
    // 計算幻燈片寬度
    document.getElementById('carousel').style.width = (amount * moveOffset) + 'px';
    // 避免點擊時干擾轉換
    for (var i = 0; i < amount; i++) {
        currTransl[i] = -moveOffset;
        document.getElementsByClassName("slide")[i].addEventListener("transitionend", transitionCompleted, true);
        document.getElementsByClassName("slide")[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);
        document.getElementsByClassName("slide")[i].addEventListener("oTransitionEnd", transitionCompleted, true);
        document.getElementsByClassName("slide")[i].addEventListener("MSTransitionEnd", transitionCompleted, true);
    }
    // 第一個輪播接續到最後一個 論播以 translateX(-moveOffset) 功能進行就能連續 (如果 第一次點擊 是 previous button)
    document.getElementById('carousel').insertBefore(document.getElementById('carousel').children[4], document.getElementById('carousel').children[0])
        //按鈕點擊動作
    document.getElementById('prev').addEventListener('click', prev, true);
    document.getElementById('next').addEventListener('click', next, true);
});

function prev() {
    if (translationComplete === true) {
        translationComplete = false;
        index--;
        if (index == -1) {
            index = amount - 1;
        }
        var outerIndex = (index) % amount;
        for (var i = 0; i < amount; i++) {
            var slide = document.getElementsByClassName("slide")[i];
            slide.style.opacity = '1';
            slide.style.transform = 'translateX(' + (currTransl[i] + moveOffset) + 'px)';
            currTransl[i] = currTransl[i] + moveOffset;
        }
        var outerSlide = document.getElementsByClassName("slide")[outerIndex];
        outerSlide.style.transform = 'translateX(' + (currTransl[outerIndex] - (moveOffset * amount)) + 'px)';
        outerSlide.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex] - moveOffset * (amount);
    }
}

function next() {
    if (translationComplete === true) {
        translationComplete = false;
        var outerIndex = (index) % amount;
        index++;
        for (var i = 0; i < amount; i++) {
            var slide = document.getElementsByClassName("slide")[i];
            slide.style.opacity = '1';
            slide.style.transform = 'translateX(' + (currTransl[i] - moveOffset) + 'px)';
            currTransl[i] = currTransl[i] - moveOffset;
        }
        var outerSlide = document.getElementsByClassName("slide")[outerIndex];
        outerSlide.style.transform = 'translateX(' + (currTransl[outerIndex] + (moveOffset * amount)) + 'px)';
        outerSlide.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex] + moveOffset * (amount);
    }
}