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
    var navbar = new PerfectScrollbar('nav.navbar');
    var articlesContainer = new PerfectScrollbar('#articles-container');
    var rightArticlesContainer = new PerfectScrollbar('#right-articles-container');

    /* Make the input width fixed until click outside */
    $("#search").on("click",function(){
        $(this).closest(".form-group").addClass("hover");
    });
    $("#search").on("blur",function(){
        $(this).closest(".form-group").removeClass("hover");
    });
});

