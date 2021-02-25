const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
var scale = 30;
var rows = canvas.height / scale;
var columns = canvas.width / scale;

let gras = new Gras();

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

window.setTimeout(() => {
    ctx.fillStyle = "#4ed3ed";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    gras.draw();
}, 250);

// window.addEventListener("resize", ((evt) => {
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
// }))