var townRequest = new XMLHttpRequest();
townRequest.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json");
townRequest.send();
townRequest.onload = function () {
    var towns = JSON.parse(townRequest.responseText);
    console.log(towns);

    document.getElementById("franklin-founded").innerHTML = towns.towns[0].yearFounded;
    document.getElementById("franklin-motto").innerHTML = towns.towns[0].motto;
    document.getElementById("franklin-population").innerHTML = towns.towns[0].currentPopulation;
    document.getElementById("franklin-rainfall").innerHTML = towns.towns[0].averageRainfall;


    // Springfield
    document.getElementById("springfield-founded").innerHTML = towns.towns[3].yearFounded;
    document.getElementById("springfield-motto").innerHTML = towns.towns[3].motto;
    document.getElementById("springfield-population").innerHTML = towns.towns[3].currentPopulation;
    document.getElementById("springfield-rainfall").innerHTML = towns.towns[3].averageRainfall;


    //Greenville
    document.getElementById("greenville-founded").innerHTML = towns.towns[1].yearFounded;
    document.getElementById("greenville-motto").innerHTML = towns.towns[1].motto;
    document.getElementById("greenville-population").innerHTML = towns.towns[1].currentPopulation;
    document.getElementById("greenville-rainfall").innerHTML = towns.towns[1].averageRainfall;


}
