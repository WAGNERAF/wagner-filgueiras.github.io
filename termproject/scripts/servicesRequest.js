var serviceRequest = new XMLHttpRequest();
serviceRequest.open("GET", "https://wagner-filgueiras.github.io/cit230/termproject/json/servicesdata.json");
serviceRequest.send();
serviceRequest.onload = function () {
    var services = JSON.parse(serviceRequest.responseText);
    console.log(services);
    
    // Springfield
    document.getElementById("first_service").innerHTML = services.services[0].name;
    document.getElementById("first_price").innerHTML = services.services[0].price;
    document.getElementById("first_time").innerHTML = services.services[0].timeEstimated;
    document.getElementById("first_detail").innerHTML = services.services[0].details;


    // Springfield
    document.getElementById("second_service").innerHTML = services.services[0].name;
    document.getElementById("second_price").innerHTML = services.services[0].price;
    document.getElementById("second_time").innerHTML = services.services[0].timeEstimated;
    document.getElementById("second_detail").innerHTML = services.services[0].details;


    //Greenville
    document.getElementById("third_service").innerHTML = services.services[0].name;
    document.getElementById("third_price").innerHTML = services.services[0].price;
    document.getElementById("third_time").innerHTML = services.services[0].timeEstimated;
    document.getElementById("third_detail").innerHTML = services.services[0].details;
    
     //Greenville
    document.getElementById("fourth_service").innerHTML = services.services[0].name;
    document.getElementById("fourth_price").innerHTML = services.services[0].price;
    document.getElementById("fourth_time").innerHTML = services.services[0].timeEstimated;
    document.getElementById("fourth_detail").innerHTML = services.services[0].details;


};
