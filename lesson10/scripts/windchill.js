function franklinWindchill(){
    var t = (parseInt(document.getElementById("Franklin-High").innerHTML) + parseInt(document.getElementById("Franklin-Low").innerHTML)) / 2;

	var s = parseFloat(document.getElementById("Franklin-WindSpeed").innerHTML);

  return (Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s,0.16)));


}

document.getElementById("Franklin-Windchill").innerHTML = franklinWindchill();

function greenvilleWindchill(){
    var t = (parseInt(document.getElementById("Greenville-High").innerHTML) + parseInt(document.getElementById("Greenville-Low").innerHTML)) / 2;

	var s = parseFloat(document.getElementById("Greenville-WindSpeed").innerHTML);

  return (Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s,0.16)));

  
}

document.getElementById("Greenville-Windchill").innerHTML = franklinWindchill();

function springfieldWindchill(){
    var t = (parseInt(document.getElementById("Springfield-High").innerHTML) + parseInt(document.getElementById("Springfield-Low").innerHTML)) / 2;

	var s = parseFloat(document.getElementById("Springfield-WindSpeed").innerHTML);

  return (Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s,0.16)));

  
}

document.getElementById("Springfield-Windchill").innerHTML = franklinWindchill();





