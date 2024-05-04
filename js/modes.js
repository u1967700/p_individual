var opcions = JSON.parse(localStorage.options);

$('#mode_1').on('click',function(){
    opcions.mode_infinit = "no";
    localStorage.options = JSON.stringify(opcions);
    location.assign("../html/phasergame.html");
});

$('#mode_2').on('click',function(){
    opcions.mode_infinit = "si";
    localStorage.options = JSON.stringify(opcions);
    location.assign("../html/phasergame.html");
});