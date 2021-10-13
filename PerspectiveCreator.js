
// Variable initiation
let canvas, ctx, slider1, slider2, output1, output2

function init(){
	// Class definition
	class slider {
		constructor(inputID,outputID){
			this.range = document.getElementById(inputID);
			this.output = document.getElementById(outputID);
			this.output.innerHTML = this.range.value;
			this.range.oninput = function(output) {
				output.innerHTML = this.value;
				update();
			}
		}

		
	}

	// Grab the canvas how we want it
	const canvas = document.getElementById('Canvas');
	const ctx = canvas.getContext('2d');

	// Attach to all the slider and output values
	let slider1 = new slider("range1","out1");
	let slider2 = new slider("range2","out2");
	// var slider1 = document.getElementById("range1");
	// var output1 = document.getElementById("out1");
	// var slider2 = document.getElementById("range2");
	// var output2 = document.getElementById("out2");
	// var slider3 = document.getElementById("range3");
	// var output3 = document.getElementById("out3");
	// var slider4 = document.getElementById("range4");
	// var output4 = document.getElementById("out4");
	// var slider5 = document.getElementById("range5");
	// var output5 = document.getElementById("out5");
	// Display the default slider value
	// output1.innerHTML = slider1.value; 
	// output2.innerHTML = slider2.value;
	// output3.innerHTML = slider3.value;
	// output4.innerHTML = slider4.value;
	// output5.innerHTML = slider5.value;

	// Update the current slider value (each time you drag the slider handle)
	// slider1.oninput = function() {
	// 	output1.innerHTML = this.value;
	// 	update();
	// }
	// slider2.oninput = function() {
	// 	output2.innerHTML = this.value;
	// 	update();
	// }

	update();

	// Function Definitions
	function update(){
		// Clear the canvas to start again
		ctx.clearRect(0,0,canvas.width, canvas.height);

		// Draw the vanishing points
		drawPoint(slider1.range.value, canvas.height / 2);
		drawPoint(slider2.range.value, canvas.height / 2);

		// Draw the horizon line
		drawLine(0, canvas.height / 2, canvas.width, canvas.height / 2);

		// Draw the vertical line
		//drawLine(slider3.value, slider4.value, slider3.value, slider5.value);
	}

	function drawPoint(x,y,radius=7,strokeColor="Black"){
		ctx.beginPath();
		ctx.arc(x,y,radius,0,2*Math.PI);
		ctx.fill();
	}

	function drawLine(x1,y1,x2,y2,lineWidth=3,strokeColor="Black"){
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.lineWidth = lineWidth;
		ctx.strokeColor = strokeColor;
		ctx.stroke();
	}
}

document.addEventListener('DOMContentLoaded', init);
