/**
 * Created by Pranshu Panwar on 20-10-2017.
 */
var canvas= document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext('2d');
c.fillStyle='rgba(255,0,0,0.5)';
c.fillRect(100,100,30,30);
c.fillStyle='rgba(255,0,255,0.5)';
c.fillRect(50,50,30,30);
c.fillStyle='rgba(255,255,0,0.5)';
c.fillRect(100,150,30,30);
//c.fillRect(100,20,30,30);
//line
c.beginPath();
c.moveTo(50,100);
c.lineTo(300,400);
c.lineTo(400,300);
c.strokeStyle="#fa34a3";
c.stroke();

//arc or circle
for (var i=0 ; i<400; i++) {
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'green';
    c.stroke();
}