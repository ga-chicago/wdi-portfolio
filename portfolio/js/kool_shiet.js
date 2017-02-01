console.log("start")
window.onload = function(){
	console.log("test1")
	var taco = document.getElementById('source');
	//this is what the particles are being rendered too
	var canvas = document.getElementById("canvas");
	var ctx =	canvas.getContext("2d");

	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;

	var mp = 25; //max particles
	var particles = [];
	for(var i = 0; i < mp; i++)
	{

		particles.push({
			x: Math.random()*W, //x-coordinate
			y: Math.random()*H, //y-coordinate
		})
	}
console.log("test2")

	//drawing the img to the canvas
	function draw()
	{
		console.log("test3")

		ctx.drawImage(taco,0, 0);

		ctx.beginPath();

		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			ctx.moveTo(p.x, p.y);
		}
		ctx.fill();
		update();
		
	}

function update()
	{
	console.log("test4")
	setInterval(draw, 2500);
	}
	draw();
}
