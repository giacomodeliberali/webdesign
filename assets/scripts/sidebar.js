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

function tabletSidebar() {
    var width = $(window).width();
    if (width <= 992 && width >= 768) {
        // tablet
        closeSidebar();
    }
}

function openSidebar() {
    $("nav.navbar").toggleClass("tablet-open");
    $("#sidebarOpener").first().children().first().toggleClass("fa-bars");
    $("#sidebarOpener").first().children().first().toggleClass("fa-times");
}

function closeSidebar() {
    $("nav.navbar").removeClass("tablet-open");
    $("#sidebarOpener").first().children().first().addClass("fa-bars");
    $("#sidebarOpener").first().children().first().removeClass("fa-times");
}

var navbarScrollbar;
var articlesContainerScrollbar;
var rightArticlesContainerScrollbar;

$(document).ready(function () {

    $("#sidebarOpener").on("click", openSidebar);
    $("#sidebarCloser").on("click", closeSidebar);

    htmlbodyHeightUpdate()
    $(window).resize(function () {
        htmlbodyHeightUpdate();
        tabletSidebar();
        // updateScrollbars();
    });
    $(window).scroll(function () {
        height2 = $('.main').height()
        htmlbodyHeightUpdate()
    });

    // Initialize perfect scrollbars
    
    // navbarScrollbar = new PerfectScrollbar('nav.navbar');
    // articlesContainerScrollbar = new PerfectScrollbar('#articles-container');
    // rightArticlesContainerScrollbar = new PerfectScrollbar('#right-articles-container');
    
    // updateScrollbars();
});

function updateScrollbars() {
    // perfect scrollbar
    var navbarElement = $("nav.navbar").first();
    var articlesContainerElement = $("#articles-container").first();
    var rightArticlesContainerElement = $("#right-articles-container").first();

    navbarElement.scrollTop(0);
    articlesContainerElement.scrollTop(0);
    rightArticlesContainerElement.scrollTop(0);

    navbarScrollbar.update();
    articlesContainerScrollbar.update();
    rightArticlesContainerScrollbar.update();
}