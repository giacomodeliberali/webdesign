$(document).ready(function () {
    $("#articleStar").on("click", function () {
        $("#articleStar").animate({
            fontSize: "38px"
        }, 100, function () {
            $(this).toggleClass("on");
            $("#articleStar").animate({
                fontSize: "32px"
            }, 100);
        });
    });
});

