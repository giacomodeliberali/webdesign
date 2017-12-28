function htmlbodyHeightUpdate() {
    var height3 = $(window).height()
    var height1 = $('.nav').height() + 50
    height2 = $('.main').height()
    if (height2 > height3) {
        $('html').height(Math.max(height1, height3, height2) + 10);
        $('body').height(Math.max(height1, height3, height2) + 10);
    }
    else {
        $('html').height(Math.max(height1, height3, height2));
        $('body').height(Math.max(height1, height3, height2));
    }

}
$(document).ready(function () {
    htmlbodyHeightUpdate()
    $(window).resize(function () {
        htmlbodyHeightUpdate()
    });
    $(window).scroll(function () {
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
    $("#search").on("click", function () {
        $(this).closest(".form-group").addClass("hover");
    });
    $("#search").on("blur", function () {
        $(this).closest(".form-group").removeClass("hover");
    });

    scrollFunction();
    // When the user scrolls down 20px from the top of the document, show the button
    $(".container.main").scroll(scrollFunction);

    $("#backToTop").on("click", topFunction);

    initTagCloud();
    var id;
    window.onresize = function(){
        clearTimeout(id);
        id = setTimeout(function(){
            $('#tag-cloud').jQCloud('update', words);
        }, 500);
    };
});

var words = [
    {text: "News", weight: 35, link: '#'},
    {text: "Blog", weight: 10, link: '#'},
    {text: "Eventi", weight: 20, link: '#'},
    {text: "Multimedia", weight: 25, link: '#'},
    {text: "Software", weight: 15, link: '#'},
    {text: "Algoritmi", weight: 17, link: '#'},
    {text: "Cammini minimi", weight: 9, link: '#'},
    {text: "Ordinamento", weight: 11, link: '#'},
    {text: "Decisionali", weight: 7, link: '#'},
    {text: "Ottimizzazione", weight: 7, link: '#'},
    {text: "Hardware", weight: 18, link: '#'},
    {text: "Telefoni", weight: 14, link: '#'},
    {text: "Computer", weight: 22, link: '#'},
    {text: "Componenti", weight: 4, link: '#'},
    {text: "TV", weight: 5, link: '#'},
    {text: "Hack", weight: 24, link: '#'},
    {text: "Zero days", weight: 24, link: '#'},
    {text: "Trivial mode", weight: 7, link: '#'},
    {text: "Tricky mode", weight: 11, link: '#'},
    {text: "Bit per bit", weight: 3, link: '#'},
    {text: "Web", weight: 27, link: '#'},
    {text: "Linguaggi", weight: 14, link: '#'},
    {text: "Sistemi operativi", weight: 17, link: '#'},
    {text: "Videogames", weight: 27, link: '#'},
  ];
function initTagCloud() {
    // http://mistic100.github.io/jQCloud/demo.html
    $('#tag-cloud').jQCloud(words,{
        autoResize: true
    });
}


function scrollFunction() {
    if ($(".container.main").scrollTop() > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $(".container.main").animate({ scrollTop: 0 }, 200);
}