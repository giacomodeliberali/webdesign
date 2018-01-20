var blogger = new Array();
blogger.push({
   name: "Salvatore Aranzulla",
    rate: 7,
    nart: 1323,
    specialità: "Hardware",
    pres: "Salvatore Aranzulla è il fondatore del sito Aranzulla.it",
    follower: 1024,
    foto:"https://www.alanidental.com/wp-content/uploads/2016/01/default.png",
    
});

blogger.push({
    name: "Computerphile",
    rate: 9,
    nart: 24,
    specialità: "Hacking",
    pres: "Maghi della criptografia",
    follower: 9000,
    foto:"./assets/images/placeholder_user.png",

    
});

//width="100px" height="100px" per le immagini

function generateMainBloggerHtml(objectBlogger) {
    return `
            <div class="row article debug-layout border-radius">
                <div class="col-sm-3 hidden-xs">
                        <img class="v-center" src="${objectBlogger.foto}" width="100px" height="100px"> 
                </div> 
                <div class="col-sm-9" height="100%">
                    <div class="row">
                        <div class="col-xs-8 col-sm-8">
                            <a href="blog.html"><h3>${objectBlogger.name}</h3></a>
                        </div>
                        <div class="col-xs-4 col-sm-4">
                            <b>Rate: </b>${objectBlogger.rate}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-8 col-sm-8">
                            <b>Numero articoli: </b>${objectBlogger.nart}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12">
                            <b>Specialità: </b>${objectBlogger.specialità} 
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12">
                        <b>Presentazione:</b> ${objectBlogger.pres}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-4 col-sm-4">
                            <b>#Follower:</b> ${objectBlogger.follower}
                        </div>
                    </div>
                </div>
    </div>
    `;
}

$(document).ready(function () {

    for (var i = 0; i < 20; i++)
        $("#articles-container").html($("#articles-container").html() +
            generateMainBloggerHtml(blogger[Math.floor(Math.random() * (blogger.length))]));
});