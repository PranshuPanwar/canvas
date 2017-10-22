/**
 * Created by Pranshu Panwar on 20-10-2017.
 */
var canvas= document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext('2d');
/*c.fillStyle='rgba(255,0,0,0.5)';
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
}*/
function circle(x,y,dx,dy,radius){
    this.x =x;
    this.y =y;
    this.dx = dx;
    this.dy=dy;
    this.radius= radius;

    this.draw =function(){
       // console.log('heloo');
        c.beginPath();
        c.arc(this.x,this.y,this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fill();
    }
    //for moving the statics circle
    this.update = function(){
        if(this.x+this.radius>innerWidth||this.x-this.radius<0)
        {this.dx=-this.dx;
        }
        if(this.y+this.radius>innerHeight ||this.y-this.radius<0){
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+= this.dy;
        this.draw();


    }
}

var circlearray=[];

// array to get multipe circle on screen
for(var i=0;i<100;i++)
{
    var x=Math.random()*(innerWidth-radius*2)+radius;
    var dx=(Math.random()-0.5)*6;
    var y=Math.random()*(innerHeight-radius*2)+radius;
    var dy= (Math.random()-0.5)*6;
    var radius= 30;
    //another way to call the function
    circlearray.push(new circle(x,y,dx,dy,radius))

}
//way to fire the function is
//var circle = new circle(200,200,3,3,30);




/*var x=Math.random()*innerWidth;
var dx=(Math.random()-0.5)*6;
var y=Math.random()*innerHeight;
var dy= (Math.random()-0.5)*6;
var radius= 30;*/
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
   // circle.update(); way to print the multiple circle
    for(var i =0; i<circlearray.length ; i++){
        circlearray[i].update();
    }
 /*   c.beginPath();
    c.arc(x, y,radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'green';
    c.stroke();
    if(x+radius>innerWidth||x-radius<0)
    {dx=-dx;
    }
    x+=dx;
    if(y+radius>innerHeight ||y-radius<0){
        dy=-dy;
    }
    y+= dy;*/
}
animate();


