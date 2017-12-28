function htmlbodyHeightUpdate(){
    var height3 = $( window ).height()
    var height1 = $('.nav').height()+50
    height2 = $('.main').height()
    if(height2 > height3){
        $('html').height(Math.max(height1,height3,height2)+10);
        $('body').height(Math.max(height1,height3,height2)+10);
    }
    else
    {
        $('html').height(Math.max(height1,height3,height2));
        $('body').height(Math.max(height1,height3,height2));
    }
    
}
$(document).ready(function () {
    htmlbodyHeightUpdate()
    $( window ).resize(function() {
        htmlbodyHeightUpdate()
    });
    $( window ).scroll(function() {
        height2 = $('.main').height()
          htmlbodyHeightUpdate()
    });

    // perfect scrollbar
    // var navbar = new PerfectScrollbar('nav.navbar');
    // var articlesContainer = new PerfectScrollbar('#articles-container');
    // var rightArticlesContainer = new PerfectScrollbar('#right-articles-container');
    // var mainContainer = new PerfectScrollbar('.container.main');

    // window.onresize = function(){
    //     navbar.update();
    //     articlesContainer.update();
    //     rightArticlesContainer.update();
    //     mainContainer.update();
    // };

    /* Make the input width fixed until click outside */
    $("#search").on("click",function(){
        $(this).closest(".form-group").addClass("hover");
    });
    $("#search").on("blur",function(){
        $(this).closest(".form-group").removeClass("hover");
    });

    scrollFunction();
    // When the user scrolls down 20px from the top of the document, show the button
    $(".container.main").scroll(scrollFunction);

    $("#backToTop").on("click",topFunction);
});


function scrollFunction() {
    if ($(".container.main").scrollTop() > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $(".container.main").animate({scrollTop: 0}, 200);
}