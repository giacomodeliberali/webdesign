var titles = new Array();
titles.push({
    title: "Buffer Overflow",
    sub:"Le mille tecniche per il giusto exploit",
    scrLg: "./assets/images/articles/security.jpg",
    srcSm: "http://www.level3.com/_assets/build/img/icon/lockicon.png"
});

titles.push({
    title: "Pixel 2: Il migliore?",
    sub:"Proviamolo con i benchmark di serie",
    scrLg: "./assets/images/articles/pixel.jpg",
    srcSm: "https://gd1.alicdn.com/imgextra/i4/2245691027/TB2nMqTevBNTKJjSszeXXcu2VXa_!!2245691027.png_50x50.jpg"
});

titles.push({
    title: "iPhone X: vulnerabilità sullo sblocco",
    sub:"La tua identità non sarà mai più al sicuro",
    scrLg: "./assets/images/articles/iphone.png",
    srcSm: "https://www.sv-comp.com/image/cache/catalog/data/apple_logo-50x50.jpg"
});

titles.push({
    title: "Ubuntu phone: innovazione.",
    sub:"Fondere computer e telefono per un'esperienza unica di lavoro",
    scrLg: "./assets/images/articles/ubuntu.jpg",
    srcSm: "https://www.virtualmaster.com/assets/logo/logo-ubuntu_cof-orange-hex_50-50-332f5ad5ac6e9988a152dbc6d42d6fc3.png"
});


titles.push({
    title: "iMac Pro: stellare",
    sub:"Chi non ne desidererebbe uno, scopriamo tutte le features",
    scrLg: "./assets/images/articles/imac.jpg",
    srcSm: "https://www.sv-comp.com/image/cache/catalog/data/apple_logo-50x50.jpg"
});

titles.push({
    title: "Android 7: tutte le features",
    sub:"Da ora l'invenzione si unisce ai dispositivi mobili",
    scrLg: "./assets/images/articles/android.jpg",
    srcSm: "http://kissfm.com.au/wp-content/uploads/2013/08/Android-icon.png"
});

titles.push({
    title: "Go: il linguaggio Google più smart",
    sub:"Smart nella scrittura, nella tecnica e nell'implementazione",
    scrLg: "./assets/images/articles/go.jpg",
    srcSm: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Googlelogoi.png/50px-Googlelogoi.png"
});

titles.push({
    title: "Nuovi benchmark sui browser",
    sub:"Ogni anno la stessa storia, o forse no?",
    scrLg: "./assets/images/articles/browsers.jpg",
    srcSm: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Firefox_Logo%2C_2017.svg/50px-Firefox_Logo%2C_2017.svg.png"
});

titles.push({
    title: "Watchdogs 2",
    sub:"San Francisco non ha più porte chiuse per Marcus",
    scrLg: "./assets/images/articles/watchdogs.jpg",
    srcSm: "https://ae01.alicdn.com/kf/HTB1iOhUPVXXXXauapXXq6xXFXXXW/00-Watch-Dogs-2-Dedsec-Aiden-Pearce-Wrench-Mask-Helmet-Eyepatch-Face-Muffle-Cosplay.jpg_50x50.jpg"
});

titles.push({
    title: "Call of duty WW2 e il suo motore grafico",
    sub:"Giudicato troppo intenso anche dai giogatori usuali, ma perchè?",
    scrLg: "./assets/images/articles/cod.png",
    srcSm: "https://usercontent1.hubstatic.com/12809778_50.jpg"
});

titles.push({
    title: "Nvidia gtx 1080 è VR ready ",
    sub:"Per immergersi nel mondo virtuale è necessaria una scheda spaziale",
    scrLg: "./assets/images/articles/nvidia.jpg",
    srcSm: "https://static-cdn.jtvnw.net/jtv_user_pictures/nvidiageforcede-profile_image-64f12030b4ecc178-50x50.png"
});
function generatePreferredHtml(objectTitle, id) {
    return `
        <div class="row article debug-layout border-radius hidden-print">
                <article id="art${id}">
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                             <img class="img-responsive" src="${objectTitle.scrLg}" width="100%" alt="${objectTitle.title}">
                        </div>
                        <div class="col-sm-6 col-md-8">
                            <div class="row">
                                <div class="col-xs-12">
                                    <a href="articolo.html"><h2>${objectTitle.title}</h2></a>
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
                                <div class="hidden-xs com-sm-12">
                                    <p><b>Breve descrizione : </b>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.</p>
                                </div> 
                            </div>


                        </div>
                    </div>
                    <button type="button" class="btn btn-danger btn-sm remove-article" onclick="removeArticle('art${id}')"><i class="fa fa-times"></i></button>
                </article>
        </div>

        <div class="row visible-print-block">
            <div class="col-xs-4">
                <img src="${objectTitle.srcSm}" width="100%" alt="${objectTitle.title}" class="maxh-300-print">
            </div>
            <div class="col-xs-8">
                <div class="row">
                    <h1>${objectTitle.title}</h1>
                </div>
                <div class="row">
                    <h3>${objectTitle.sub}</h3>
                </div>
            </div>
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