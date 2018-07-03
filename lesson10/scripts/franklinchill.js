function franklinWindchill(){
    var t = (parseInt(document.getElementById("franklin-high").innerHTML) + parseInt(document.getElementById("franklin-low").innerHTML)) / 2;

	var s = parseFloat(document.getElementById("franklin-wind-speed").innerHTML);

  return (Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s,0.16)));

  
  
}

document.getElementById("franklin-windchill").innerHTML = franklinWindchill();










