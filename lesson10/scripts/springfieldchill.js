function springfieldWindchill(){
    var t = (parseInt(document.getElementById("springfield-high").innerHTML) + parseInt(document.getElementById("springfield-low").innerHTML)) / 2;

	var s = parseFloat(document.getElementById("springfield-wind-speed").innerHTML);

  return (Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s,0.16)));

  
}

document.getElementById("springfield-windchill").innerHTML = springfieldWindchill();
