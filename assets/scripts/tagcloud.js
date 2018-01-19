
$(document).ready(function () {
    initTagCloud();
    var id;
    window.onresize = function(){
        clearTimeout(id);
        id = setTimeout(function(){
            $('#tag-cloud').jQCloud('update', words);
        }, 500);
    };
});

var words = [
    {text: "News", weight: 35, link: 'ricerca.html?search=news&type=tag'},
    {text: "Blog", weight: 10, link: 'ricerca.html?search=blog&type=tag'},
    {text: "Eventi", weight: 20, link: 'ricerca.html?search=eventi&type=tag'},
    {text: "Multimedia", weight: 25, link: 'ricerca.html?search=media&type=tag'},
    {text: "Software", weight: 15, link: 'ricerca.html?search=software&type=tag'},
    {text: "Algoritmi", weight: 17, link: 'ricerca.html?search=algoritmi&type=tag'},
    {text: "Cammini minimi", weight: 9, link: 'ricerca.html?search=path&type=tag'},
    {text: "Ordinamento", weight: 11, link: 'ricerca.html?search=ordinamento&type=tag'},
    {text: "Decisionali", weight: 7, link: 'ricerca.html?search=decisionali&type=tag'},
    {text: "Ottimizzazione", weight: 7, link:'ricerca.html?search=ottimizzazione&type=tag'},
    {text: "Hardware", weight: 18, link: 'ricerca.html?search=hardware&type=tag'},
    {text: "Telefoni", weight: 14, link: 'ricerca.html?search=telefoni&type=tag'},
    {text: "Computer", weight: 22, link: 'ricerca.html?search=computer&type=tag'},
    {text: "Componenti", weight: 4, link: 'ricerca.html?search=componenti&type=tag'},
    {text: "TV", weight: 5, link: 'ricerca.html?search=tv&type=tag'},
    {text: "Hack", weight: 24, link: 'ricerca.html?search=hack&type=tag'},
    {text: "Zero days", weight: 24, link: 'ricerca.html?search=zero&type=tag'},
    {text: "Trivial mode", weight: 7, link: 'ricerca.html?search=trivial&type=tag'},
    {text: "Tricky mode", weight: 11, link: 'ricerca.html?search=trick&type=tag'},
    {text: "Bit per bit", weight: 3, link: 'ricerca.html?search=bxb&type=tag'},
    {text: "Web", weight: 27, link: 'ricerca.html?search=web&type=tag'},
    {text: "Linguaggi", weight: 14, link: 'ricerca.html?search=linguaggi&type=tag'},
    {text: "Sistemi operativi", weight: 17, link: 'ricerca.html?search=so&type=tag'},
    {text: "Videogames", weight: 27, link: 'ricerca.html?search=games&type=tag'},
  ];

function initTagCloud() {
    // http://mistic100.github.io/jQCloud/demo.html
    $('#tag-cloud').jQCloud(words,{
        autoResize: true
    });
}