function windchillcalc(){
    var t = (parseInt(document.getElementById("High").innerHTML) + parseFloat(document.getElementById("Low").innerHTML)) / 2;

	var s = parseInt(document.getElementById("WindSpeed").innerHTML);

document.getElementById("Windchill").innerHTML = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s,0.16));
}
