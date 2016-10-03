var nav_clicker = function () {
    $('#resumeLink').click(function () {
        $("div.active").removeClass('active');
        $(".resume").addClass('active');
        $('li.active-tab').removeClass('active-tab');
        $('#resumeLink').addClass('active-tab');
    });
    $('#portfolioLink').click(function () {
        $("div.active").removeClass('active');
        $(".portfolio").addClass('active');
        $('li.active-tab').removeClass('active-tab');
        $('#portfolioLink').addClass('active-tab');
    });
    $('#homeLink').click(function () {
        $("div.active").removeClass('active');
        $(".home").addClass('active');
        $('li.active-tab').removeClass('active-tab');
        $('#homeLink').addClass('active-tab');
    });
};

var image_hider = function (className) {
    if ($("." + className + " div img").length > 6) {
        var htmlClass = "." + className;
        for (i = 0; i <= $(htmlClass + " div img").length; i++){
            if (i > 6){
                $(htmlClass + " div:nth-child(" + i + ")").addClass('inactive');
            };
        };
        $(htmlClass + " div.image-counter").text("+ " + ($(htmlClass + " div img").length - 6) + " more")
    };
};

var lightbox = function(className){
    $("." + className + " div").click(function(){
        $(this).addClass("lightbox-active");
    });
    var toggleNext = function(){
        var currentImage = $('.lightbox-active');
        var nextImage = currentImage.next();
        currentImage.removeClass("lightbox-active");
        nextImage.addClass("lightbox-active");
        if(!nextImage.length){
            $('.lightbox-active').removeClass('lightbox-active');
        }
    }
    var togglePrev = function(){
        var currentImage = $('.lightbox-active');
        var prevImage = currentImage.prev();
        currentImage.removeClass("lightbox-active");
        prevImage.addClass('lightbox-active');
        if(!prevImage.length){
            $('.lightbox-active').removeClass('lightbox-active');
        }
    }
    $('.' + className + ' div img').click(function(){
        toggleNext();
    }) 
    $(document).on('keydown',function(event){
        if(event.which === 27){
            $('.lightbox-active').removeClass('lightbox-active');
        }else if ((event.which === 39) || (event.which === 68)){
            toggleNext();
        }else if((event.which === 37) || (event.which === 65)){
            togglePrev();
        };
    });
};
var main = function () {
    nav_clicker();
    image_hider("YWCA");
    lightbox("YWCA");
};
$(document).ready(main);
