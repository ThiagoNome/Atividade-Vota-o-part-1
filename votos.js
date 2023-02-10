let voto1 = 0;let voto2 = 0;let msg = "";
function csgo() {
    voto1++;
}
function valorant() {
    voto2++;
}
function total() {
    document.getElementById("csgo").innerHTML= "Total de votos CSGO: " + voto1;
    document.getElementById("valorant").innerHTML="Total de votos Valorant: " + voto2;
    document.getElementById("total").innerHTML= "Total de votos: " + (voto1 + voto2)
}