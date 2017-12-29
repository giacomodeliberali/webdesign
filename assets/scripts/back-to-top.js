$(document).ready(function () {
    scrollFunction();
    // When the user scrolls down 20px from the top of the document, show the button
    $(".container.main").scroll(scrollFunction);

    $("#backToTop").on("click", topFunction);
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
    $(".container.main").animate({ scrollTop: 0 }, 200);
}