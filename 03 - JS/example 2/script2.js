let journal = [];

function addEntry(events, accident) {
  journal.push({events, accident});
    /******************************************         
     * Is {events, accident}  shorthand to    *
     * {events: events, accident: accident}   *
     *****************************************/
}

var tablita = (event) => {
    var arrg = [0, 0, 0, 0];
    for (let i = 0 ; i< journal.length; i++){
        let index = 2;
        if (journal[i].events.includes(event)) index-=2;
        if (!journal[i].accident) index+=1; 
        arrg[index]++;
    }
    return arrg;
}

function phi(arreglo){
    var n11n00 = arreglo[0]*arreglo[3];
    var n10n01 = arreglo[1]*arreglo[2];

    var n1 = arreglo[0]+arreglo[2]; 
    var n0 = arreglo[1]+arreglo[3] ;
    
    var nc1 = arreglo[0]+arreglo[1]; 
    var nc0 = arreglo[2]+arreglo[3] ;

    return ( n11n00  - n10n01 ) /
            Math.sqrt( n1 * n0 * nc1 * nc0);
}

phi(tablita("beer"));
function selectedradio(){
var radios = document.getElementsByName('accidente');
var selected;
for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
  selected=radios[i].value;
  return selected;
 }
}
};

function addEvent(){
    var btn = document.querySelector('.guardar');
    btn.addEventListener("click", ()=>{
        var dia = document.getElementById('dia').value;
        var eventos = document.getElementById('eventos').value;
        var accidente = selectedradio();
        var eventArray=eventos.split(" ");
        var table = document.getElementsByTagName('table')[0];
        var newRow = table.insertRow(-1);
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        cel1.innerHTML = dia;
        cel2.innerHTML = eventArray;
        cel3.innerHTML = accidente;
        addEntry(eventArray,accidente);
    })};
    window.onload = function() {
        addEvent();
    }

    console.log(journal)