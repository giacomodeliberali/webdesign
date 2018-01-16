var titles = new Array();
titles.push({
    title: "Buffer Overflow",
    scrLg: "http://www.apre.it/media/308462/security_assessment_logo.jpg",
    srcSm: "http://www.level3.com/_assets/build/img/icon/lockicon.png"
});

titles.push({
    title: "Pixel 2: Il migliore?",
    scrLg: "https://www.technobuffalo.com/wp-content/uploads/2017/07/google-pixel-2-xl-concept-002.jpg",
    srcSm: "https://gd1.alicdn.com/imgextra/i4/2245691027/TB2nMqTevBNTKJjSszeXXcu2VXa_!!2245691027.png_50x50.jpg"
});

titles.push({
    title: "iPhone X: vulnerabilità sullo sblocco",
    scrLg: "https://blog.yeppon.it/wp-content/uploads/2017/11/iPhone-X-Display.png",
    srcSm: "https://www.sv-comp.com/image/cache/catalog/data/apple_logo-50x50.jpg"
});

titles.push({
    title: "Ubuntu phone: innovazione.",
    scrLg: "https://www.lffl.org/wp-content/uploads/2017/09/ubuntu-4.jpg",
    srcSm: "https://www.virtualmaster.com/assets/logo/logo-ubuntu_cof-orange-hex_50-50-332f5ad5ac6e9988a152dbc6d42d6fc3.png"
});


titles.push({
    title: "iMac Pro: stellare",
    scrLg: "http://cdn.mos.cms.futurecdn.net/R4PAweEta5PyquiLWQjCNA.jpg",
    srcSm: "https://www.sv-comp.com/image/cache/catalog/data/apple_logo-50x50.jpg"
});

titles.push({
    title: "Android 7: tutte le features",
    scrLg: "http://ksassets.timeincuk.net/wp/uploads/sites/54/2016/09/android-7-0-nougat-13-2.jpg",
    srcSm: "http://kissfm.com.au/wp-content/uploads/2013/08/Android-icon.png"
});

titles.push({
    title: "Go: il linguaggio Google più smart",
    scrLg: "https://goozernation.com/wp-content/uploads/2017/06/maxresdefault.jpg",
    srcSm: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Googlelogoi.png/50px-Googlelogoi.png"
});

titles.push({
    title: "Nuovi benchmark sui browser",
    scrLg: "http://www.namerific.com/blog/wp-content/uploads/2016/09/maxresdefault.jpg",
    srcSm: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Firefox_Logo%2C_2017.svg/50px-Firefox_Logo%2C_2017.svg.png"
});

titles.push({
    title: "Watchdogs",
    scrLg: "https://gaming.hwupgrade.it/articoli/videogames/4815/wd1.jpg",
    srcSm: "https://ae01.alicdn.com/kf/HTB1iOhUPVXXXXauapXXq6xXFXXXW/00-Watch-Dogs-2-Dedsec-Aiden-Pearce-Wrench-Mask-Helmet-Eyepatch-Face-Muffle-Cosplay.jpg_50x50.jpg"
});

titles.push({
    title: "call of duty WW2 e il suo motore grafico",
    scrLg: "https://www.playstationzone.it/wp-content/uploads/2017/10/aq3r313w8zsy.png",
    srcSm: "https://usercontent1.hubstatic.com/12809778_50.jpg"
});

titles.push({
    title: "Nvidia gtx 1080 è VR ready ",
    scrLg: "https://images.everyeye.it/img-singole/articolo-49846.jpg",
    srcSm: "https://static-cdn.jtvnw.net/jtv_user_pictures/nvidiageforcede-profile_image-64f12030b4ecc178-50x50.png"
});

function generatePreferredHtml(objectTitle, id) {
    return `
        <div class="row article debug-layout border-radius">
                <article id="art${id}">
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                             <img class="img-responsive" src="${objectTitle.scrLg}" width="100%">
                        </div>
                        <div class="col-sm-6 col-md-8">
                            <div class="row">
                                <div class="col-xs-10 com-sm-10">
                                    <a href="articolo.html"><h2>${objectTitle.title}</h2></a>
                                </div>
                                <div class="col-xs-2 com-sm-2">
                                    <button type="button" class="btn btn-danger" onclick="removeArticle('art${id}')">Rimuovi dai preferiti</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 com-sm-12">
                                    <p><b>Data preferito : </b> 11-02-02</p>
                                </div> 
                            </div>
                            <div class="row">
                                <div class="col-xs-12 com-sm-12">
                                    <p><b>Stelle assegnate : </b> 5,2</p>
                                </div> 
                            </div>
                            <div class="row">
                                <div class="col-xs-12 com-sm-12">
                                    <p><b>Breve descrizione : </b>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.</p>
                                </div> 
                            </div>


                        </div>
                    </div>

                </article>
        </div>
    `;
}

$(document).ready(function () {

    for (var i = 0; i < 4; i++)
        $("#articles-container").append( generatePreferredHtml(titles[Math.floor(Math.random() * (titles.length))], i));
});


function removeArticle(id_to_hide) {
    var stringa= "#"+id_to_hide;
    $(stringa).fadeOut();

}