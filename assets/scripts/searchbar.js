$(document).ready(function () {
    /* Make the input width fixed until click outside */
    $("#search").on("click", function () {
        $(this).closest(".form-group").addClass("hover");
    });
    $("#search").on("blur", function () {
        $(this).closest(".form-group").removeClass("hover");
    });
});