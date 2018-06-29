function currentDate() {


dayName = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
monName = new Array ("January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "November", "December");
now = new Date;

document.getElementById("dateResult").innerHTML = ( dayName[now.getDay() ] + ", " + now.getDate () + " " + monName [now.getMonth() ]   + " " + now.getFullYear ());
}




