$(document).ready(function() {
    var carousel = $('#carousel'),
        threshold = 150,
        slideWidth = 500,
        dragStart,
        dragEnd;
    //step1  push verb
    $('#next').click(function() {
        shiftSlide(-1);

    });
    $('#prev').click(function() {
        shiftSlide(1);

    });
    carousel.on('mousedown', function(e) {
            if (carousel.hasClass('transition')) return;

            dragStart = e.pageX;
            $(this).on('mousemove', function(e) {
                // console.log(this);
                dragEnd = e.pageX;

                $(this).css('transform', 'translateX(' + dragPos() + 'px)')
                console.log(dragStart, 'dragStart')
                console.log(dragEnd, 'dragEnd')
            });

            $(document).on('mouseup', function() {
                if (dragPos() > threshold) { return shiftSlide(1) }
                if (dragPos() < -threshold) { return shiftSlide(-1) }
                shiftSlide(0);
            })

        })
        //dragposition
    function dragPos() {
        return dragEnd - dragStart;
    }
    // shiftSlide 
    function shiftSlide(direction) {
        if (carousel.hasClass('transition')) return;
        dragEnd = dragStart;
        $(document).off('mouseup')

        carousel.off('mousemove')
            .addClass('transition')
            .css('transform', 'translateX(' + (direction * slideWidth) + 'px)');
        setTimeout(() => {
            if (direction === 1) {
                $('.slide:first').before($('.slide:last'));
            } else if (direction === -1) {
                $('.slide:last').after($('.slide:last'));
            }
            carousel.removeClass('transition')
            carousel.css('transform', 'translateX(0px)');


        }, 700);

    }
});