var blogger = new Array();
blogger.push({
   name: "Salvatore Aranzulla",
    rate: 7,
    nart: 1323,
    specialità: "Hardware",
    pres: "Salvatore Aranzulla è il fondatore del sito Aranzulla.it",
    foto:"https://cdn3.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-5/24/2049-512.png",
    
});

blogger.push({
   name: "Ciccio Gamer",
    rate: 9999,
    nart: 10,
    specialità: "Videogame",
    pres: "Ciccio Gamer è un boss",
    foto:"https://cdn3.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-5/24/2049-512.png",
    
});


function generateMainBloggerHtml(objectBlogger) {
    return `
            <div class="row debug-layout">
                <div class="col-sm-4 hidden-xs">
                    <img src="${objectBlogger.foto}" width=100>
                </div> 
                <div class="col-sm-8" height="100%">
                    <div class="row">
                        <div class="col-xs-8 col-sm-8">
                            <h3>${objectBlogger.name}</h3>
                        </div>
                        <div class="col-xs-4 col-sm-4">
                                        #Follower
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-8 col-sm-8">
                                Numero articoli:${objectBlogger.nart}
                        </div>
                        <div class="col-xs-4 col-sm-4">
                            Rate: ${objectBlogger.rate}
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12">
                                Specialità: ${objectBlogger.specialità} 
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12">
                            <b>Presentazione: ${objectBlogger.pres} </b>
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