var blogger = new Array();
blogger.push({
    name: "Salvatore Aranzulla",
    rate: 7,
    specialità: "Hardware"
    foto:"#"
});



function generateMainArticleHtml(objectTitle) {
    return `
        <div class="row article debug-layout">
            <div class="col-xs-12">
                <article>
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <figure>
                                <img class="img-responsive" src="${objectTitle.scrLg}" width="100%">
                            </figure>
                        </div>
                        <div class="col-sm-6 col-md-8">
                            <a href="articolo.html">
                                <h4>${objectTitle.title}</h4>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    `;
}

$(document).ready(function () {

    for (var i = 0; i < 20; i++)
        $("#articles-container").html($("#articles-container").html() +
            generateMainArticleHtml(titles[Math.floor(Math.random() * (titles.length))]));
});