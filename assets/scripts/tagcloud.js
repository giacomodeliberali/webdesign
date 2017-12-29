
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
    {text: "News", weight: 35, link: '#'},
    {text: "Blog", weight: 10, link: '#'},
    {text: "Eventi", weight: 20, link: '#'},
    {text: "Multimedia", weight: 25, link: '#'},
    {text: "Software", weight: 15, link: '#'},
    {text: "Algoritmi", weight: 17, link: '#'},
    {text: "Cammini minimi", weight: 9, link: '#'},
    {text: "Ordinamento", weight: 11, link: '#'},
    {text: "Decisionali", weight: 7, link: '#'},
    {text: "Ottimizzazione", weight: 7, link: '#'},
    {text: "Hardware", weight: 18, link: '#'},
    {text: "Telefoni", weight: 14, link: '#'},
    {text: "Computer", weight: 22, link: '#'},
    {text: "Componenti", weight: 4, link: '#'},
    {text: "TV", weight: 5, link: '#'},
    {text: "Hack", weight: 24, link: '#'},
    {text: "Zero days", weight: 24, link: '#'},
    {text: "Trivial mode", weight: 7, link: '#'},
    {text: "Tricky mode", weight: 11, link: '#'},
    {text: "Bit per bit", weight: 3, link: '#'},
    {text: "Web", weight: 27, link: '#'},
    {text: "Linguaggi", weight: 14, link: '#'},
    {text: "Sistemi operativi", weight: 17, link: '#'},
    {text: "Videogames", weight: 27, link: '#'},
  ];

function initTagCloud() {
    // http://mistic100.github.io/jQCloud/demo.html
    $('#tag-cloud').jQCloud(words,{
        autoResize: true
    });
}