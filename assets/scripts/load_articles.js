var titles = new Array();
titles.push({
    title: "Buffer Overflow",
    sub:"Le mille tecniche per il giusto exploit",
    scrLg: "http://www.apre.it/media/308462/security_assessment_logo.jpg",
    srcSm: "http://www.level3.com/_assets/build/img/icon/lockicon.png"
});

titles.push({
    title: "Pixel 2: Il migliore?",
    sub:"Proviamolo con i benchmark di serie",
    scrLg: "https://www.technobuffalo.com/wp-content/uploads/2017/07/google-pixel-2-xl-concept-002.jpg",
    srcSm: "https://gd1.alicdn.com/imgextra/i4/2245691027/TB2nMqTevBNTKJjSszeXXcu2VXa_!!2245691027.png_50x50.jpg"
});

titles.push({
    title: "iPhone X: vulnerabilità sullo sblocco",
    sub:"La tua identità non sarà mai più al sicuro",
    scrLg: "https://blog.yeppon.it/wp-content/uploads/2017/11/iPhone-X-Display.png",
    srcSm: "https://www.sv-comp.com/image/cache/catalog/data/apple_logo-50x50.jpg"
});

titles.push({
    title: "Ubuntu phone: innovazione.",
    sub:"Fondere computer e telefono per un'esperienza unica di lavoro",
    scrLg: "https://www.lffl.org/wp-content/uploads/2017/09/ubuntu-4.jpg",
    srcSm: "https://www.virtualmaster.com/assets/logo/logo-ubuntu_cof-orange-hex_50-50-332f5ad5ac6e9988a152dbc6d42d6fc3.png"
});


titles.push({
    title: "iMac Pro: stellare",
    sub:"Chi non ne desidererebbe uno, scopriamo tutte le features",
    scrLg: "http://cdn.mos.cms.futurecdn.net/R4PAweEta5PyquiLWQjCNA.jpg",
    srcSm: "https://www.sv-comp.com/image/cache/catalog/data/apple_logo-50x50.jpg"
});

titles.push({
    title: "Android 7: tutte le features",
    sub:"Da ora l'invenzione si unisce ai dispositivi mobili",
    scrLg: "http://ksassets.timeincuk.net/wp/uploads/sites/54/2016/09/android-7-0-nougat-13-2.jpg",
    srcSm: "http://kissfm.com.au/wp-content/uploads/2013/08/Android-icon.png"
});

titles.push({
    title: "Go: il linguaggio Google più smart",
    sub:"Smart nella scrittura, nella tecnica e nell'implementazione",
    scrLg: "https://goozernation.com/wp-content/uploads/2017/06/maxresdefault.jpg",
    srcSm: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Googlelogoi.png/50px-Googlelogoi.png"
});

titles.push({
    title: "Nuovi benchmark sui browser",
    sub:"Ogni anno la stessa storia, o forse no?",
    scrLg: "http://www.namerific.com/blog/wp-content/uploads/2016/09/maxresdefault.jpg",
    srcSm: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Firefox_Logo%2C_2017.svg/50px-Firefox_Logo%2C_2017.svg.png"
});

titles.push({
    title: "Watchdogs 2",
    sub:"San Francisco non ha più porte chiuse per Marcus",
    scrLg: "https://gaming.hwupgrade.it/articoli/videogames/4815/wd1.jpg",
    srcSm: "https://ae01.alicdn.com/kf/HTB1iOhUPVXXXXauapXXq6xXFXXXW/00-Watch-Dogs-2-Dedsec-Aiden-Pearce-Wrench-Mask-Helmet-Eyepatch-Face-Muffle-Cosplay.jpg_50x50.jpg"
});

titles.push({
    title: "Call of duty WW2 e il suo motore grafico",
    sub:"Giudicato troppo intenso anche dai giogatori usuali, ma perchè?",
    scrLg: "https://www.playstationzone.it/wp-content/uploads/2017/10/aq3r313w8zsy.png",
    srcSm: "https://usercontent1.hubstatic.com/12809778_50.jpg"
});

titles.push({
    title: "Nvidia gtx 1080 è VR ready ",
    sub:"Per immergersi nel mondo virtuale è necessaria una scheda spaziale",
    scrLg: "https://images.everyeye.it/img-singole/articolo-49846.jpg",
    srcSm: "https://static-cdn.jtvnw.net/jtv_user_pictures/nvidiageforcede-profile_image-64f12030b4ecc178-50x50.png"
});


function generateMainArticleHtml(objectTitle) {
    return `
        <div class="col-xs-12 col-lg-6 ">
            <article class="article debug-layout border-radius mb-10 article">
                <div class="article-image-container">
                    <img src="${objectTitle.scrLg}" width="100%" class="img-responsive border-radius">
                    <a href="articolo.html"><h2>${objectTitle.title}</h2></a>
                </div>
            </article>
        </div>
    `;
}

$(document).ready(function () {

    for (var i = 0; i < 20; i++)
        $("#articles-row").append(generateMainArticleHtml(titles[Math.floor(Math.random() * (titles.length))]));
});