
function greenvilleWindchill(){
    var u = (parseInt(document.getElementById("greenville-high").innerHTML) + parseInt(document.getElementById("greenville-low").innerHTML)) / 2;

	var v = parseFloat(document.getElementById("greenville-wind-speed").innerHTML);

  return (Math.round(35.74 + 0.6215 * u - 35.75 * Math.pow(v, 0.16) + 0.4275 * u * Math.pow(v,0.16)));

  
}

document.getElementById("greenville-windchill").innerHTML = greenvilleWindchill();
