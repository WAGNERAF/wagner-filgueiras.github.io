var serviceRequest = new XMLHttpRequest();
serviceRequest.open("GET", "https://wagner-filgueiras.github.io/cit230/termproject/json/servicesdata.json");
serviceRequest.send();
serviceRequest.onload = function () {
    var services = JSON.parse(serviceRequest.responseText);
    console.log(services);
    
    // Bicycle Rental
    document.getElementById("first_service").innerHTML = services.services[0].name;
    document.getElementById("first_price").innerHTML = services.services[0].price;
    document.getElementById("first_time").innerHTML = services.services[0].timeEstimated;
    document.getElementById("first_detail").innerHTML = services.services[0].details;


    // Tire Repair
    document.getElementById("second_service").innerHTML = services.services[1].name;
    document.getElementById("second_price").innerHTML = services.services[1].price;
    document.getElementById("second_time").innerHTML = services.services[1].timeEstimated;
    document.getElementById("second_detail").innerHTML = services.services[1].details;


    //Handlebar Instalation
    document.getElementById("third_service").innerHTML = services.services[2].name;
    document.getElementById("third_price").innerHTML = services.services[2].price;
    document.getElementById("third_time").innerHTML = services.services[2].timeEstimated;
    document.getElementById("third_detail").innerHTML = services.services[2].details;
    
     //Whell Routing
    document.getElementById("fourth_service").innerHTML = services.services[3].name;
    document.getElementById("fourth_price").innerHTML = services.services[3].price;
    document.getElementById("fourth_time").innerHTML = services.services[3].timeEstimated;
    document.getElementById("fourth_detail").innerHTML = services.services[3].details;
    
    //Cleaning
    document.getElementById("fifth_service").innerHTML = services.services[4].name;
    document.getElementById("fifth_price").innerHTML = services.services[4].price;
    document.getElementById("fifth_time").innerHTML = services.services[4].timeEstimated;
    document.getElementById("fifth_detail").innerHTML = services.services[4].details;
    
    //Suspension
    document.getElementById("sixth_service").innerHTML = services.services[5].name;
    document.getElementById("sixth_price").innerHTML = services.services[5].price;
    document.getElementById("sixth_time").innerHTML = services.services[5].timeEstimated;
    document.getElementById("sixth_detail").innerHTML = services.services[5].details;


};
