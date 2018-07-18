var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
//rectangle bas pour la voiture
ctx.fillStyle = '#00a551';
ctx.fillRect(50,150,350,75);
ctx.fillRect(100,100,250,50);
//roux 1
ctx.beginPath();
ctx.arc(100,265,40,0,Math.PI*2,true);
ctx.closePath;
ctx.fillStyle = 'silver';
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fill();
//roux 2
ctx.beginPath();
ctx.arc(350,265,40,0,Math.PI*2,true);
ctx.closePath;
ctx.fillStyle = 'silver';
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fill();
