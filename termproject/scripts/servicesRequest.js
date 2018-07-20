var serviceRequest = new XMLHttpRequest();
serviceRequest.open("GET", "https://wagner-filgueiras.github.io/cit230/termproject/json/servicesdata.json");
serviceRequest.send();
serviceRequest.onload = function () {
    var services = JSON.parse(serviceRequest.responseText);
    console.log(services);

    document.getElementById("first_service").innerHTML = services.services[0].name;
    document.getElementById("first_price").innerHTML = services.services[0].price;
    document.getElementById("first_time").innerHTML = services.services[0].timeEstimated;
    document.getElementById("first_detail").innerHTML = services.services[0].details;


    // Springfield
    document.getElementById("springfield-founded").innerHTML = towns.towns[1].yearFounded;
    document.getElementById("springfield-motto").innerHTML = towns.towns[1].motto;
    document.getElementById("springfield-population").innerHTML = towns.towns[1].currentPopulation;
    document.getElementById("springfield-rainfall").innerHTML = towns.towns[1].averageRainfall;


    //Greenville
    document.getElementById("greenville-founded").innerHTML = towns.towns[1].yearFounded;
    document.getElementById("greenville-motto").innerHTML = towns.towns[1].motto;
    document.getElementById("greenville-population").innerHTML = towns.towns[1].currentPopulation;
    document.getElementById("greenville-rainfall").innerHTML = towns.towns[1].averageRainfall;


};
