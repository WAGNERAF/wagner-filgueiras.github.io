window.onload = init;

function init() {
    var datetime = document.getElementById("datetime");
    var now = new Date();
    datetime.innerHTML = now;
}
