var canvas = document.getElementById("myCanvas");
console.log('CANVAS==' + canvas);
ctx=canvas.getContext("2d");
var mouseEvent="";
var xlast="";
var ylast="";
var color=document.getElementById("color").value;
var width=document.getElementById("width").value;
var radius=document.getElementById("radius").value;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(){
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    console.log('mouse move');
    var current_xposition=e.clientX-canvas.offsetLeft;
    var current_yposition=e.clientY-canvas.offsetTop;
    if( mouseEvent == "mousedown")
    {
        console.log('mouse down');
        color = document.getElementById("color").value;
        width = document.getElementById("width").value;
        radius = document.getElementById("radius").value;
        console.log(' width' + width);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(current_xposition, current_yposition, radius ,0 ,2 * Math.PI);
        ctx.stroke();
    }
        xlast=current_xposition;
        ylast=current_yposition;
}
