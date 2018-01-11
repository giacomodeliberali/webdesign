var titles = new Array();
titles.push({
    title: "Buffer Overflow",
    scrLg: "http://www.biosmicrosystems.com/edu/images/itsec.gif",
    srcSm: "http://www.level3.com/_assets/build/img/icon/lockicon.png"
});

titles.push({
    title: "Pixel 2: Il migliore?",
    scrLg: "http://vnreview.vn/thumbs/180x100/16/97/89/1697898.jpg",
    srcSm: "https://gd1.alicdn.com/imgextra/i4/2245691027/TB2nMqTevBNTKJjSszeXXcu2VXa_!!2245691027.png_50x50.jpg"
});

titles.push({
    title: "iPhone X: vulnerabilità sullo sblocco",
    scrLg: "https://www.wired.com/wp-content/uploads/2017/09/wired_up-close-and-personal-with-the-new-iphone-x-1-200x100.jpg",
    srcSm: "https://www.sv-comp.com/image/cache/catalog/data/apple_logo-50x50.jpg"
});

titles.push({
    title: "Ubuntu phone: innovazione.",
    scrLg: "https://www.wired.com/wp-content/uploads/2015/02/ubuntu-inline21-200x100.jpg",
    srcSm: "https://www.virtualmaster.com/assets/logo/logo-ubuntu_cof-orange-hex_50-50-332f5ad5ac6e9988a152dbc6d42d6fc3.png"
});

titles.push({
    title: "Migliorie all'algoritmo di Dijkstra",
    scrLg: "http://www.matthew-scott.com/prj/javanoginn/graph2.gif",
    srcSm: "https://lh3.googleusercontent.com/UIRYYyODh86K2tpvtNPxw1w_fll5vXHZnso0j1Llki_iH8p3JVdZ1ZEyl04T5Xen4pAZZUv1SUQ=w50-h50-e365"
});

titles.push({
    title: "iMac Pro: stellare",
    scrLg: "https://www.zive.cz/getthumbnail.aspx?q=90&crop=1&height=100&width=200&id_file=371662363",
    srcSm: "https://www.sv-comp.com/image/cache/catalog/data/apple_logo-50x50.jpg"
});

titles.push({
    title: "Android 7: tutte le features",
    scrLg: "https://www.mobilmania.cz/GetThumbNail.aspx?q=90&crop=1&height=100&width=200&id_file=908728386",
    srcSm: "http://kissfm.com.au/wp-content/uploads/2013/08/Android-icon.png"
});

titles.push({
    title: "Go: il linguaggio Google più smart",
    scrLg: "https://media.licdn.com/mpr/mpr/shrink_200_100/AAEAAQAAAAAAAAidAAAAJDRlZDVhZGI0LTg5OTktNGZiYS05ZTVhLTA5OWQ4YmJmNDViZg.png",
    srcSm: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Googlelogoi.png/50px-Googlelogoi.png"
});

titles.push({
    title: "Nuovi benchmark sui browser",
    scrLg: "http://www.erpreports.com/dart4/images/dart_browsers.jpg",
    srcSm: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Firefox_Logo%2C_2017.svg/50px-Firefox_Logo%2C_2017.svg.png"
});

titles.push({
    title: "Watchdogs",
    scrLg: "https://vignette.wikia.nocookie.net/steamtradingcards/images/8/82/Watch_Dogs_Logo.jpg/revision/latest/window-crop/width/200/x-offset/16/y-offset/0/window-width/431/window-height/215?cb=20160116061455",
    srcSm: "https://ae01.alicdn.com/kf/HTB1iOhUPVXXXXauapXXq6xXFXXXW/00-Watch-Dogs-2-Dedsec-Aiden-Pearce-Wrench-Mask-Helmet-Eyepatch-Face-Muffle-Cosplay.jpg_50x50.jpg"
});

titles.push({
    title: "call of duty WW2 e il suo motore grafico",
    scrLg: "https://gamecloud.r.worldssl.net/wp-content/uploads/2017/10/CoD-WWII-Featured-Image-200x100.jpg",
    srcSm: "https://usercontent1.hubstatic.com/12809778_50.jpg"
});

titles.push({
    title: "Nvidia gtx 1080 è VR ready ",
    scrLg: "https://images.nvidia.com/pascal/img/gtx1080/vr-ready-logo.png",
    srcSm: "https://static-cdn.jtvnw.net/jtv_user_pictures/nvidiageforcede-profile_image-64f12030b4ecc178-50x50.png"
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