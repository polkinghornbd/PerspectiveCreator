
// Variable initiation
let canvas, ctx, slider1, slider2, output1, output2

function init(){
	// Class definition
	class slider {
		constructor(inputID,outputID){
			this.range = document.getElementById(inputID);
			this.output = document.getElementById(outputID);
			// Print the intital value in output
			this.output.innerHTML = this.range.value;
			// When we change the slider, change the output value
			this.range.oninput = function(input) {
				update(input.originalTarget.id.toString(), this.value);
			}
		}
	}

	// Grab the canvas how we want it
	const canvas = document.getElementById('Canvas');
	const ctx = canvas.getContext('2d');

	// Attach to all the slider and output values
	let van1 = new slider("van1in","van1out");
	let van2 = new slider("van2in","van2out");
	let whp = new slider("whpin","whpout");
	let whn = new slider("whnin","whnout");
	let wallx = new slider("wallxin","wallxout");

	// Create initial drawing
	update();

	// Function Definitions
	function update(output = null,input = null){
		// Change values if we need
		if(output != null){
			output = output.slice(0,output.length - 2) + "out";
			updateOutput = document.getElementById(output);
			console.log(updateOutput.innerHTML)
			updateOutput.innerHTML = input;
		}
		// Clear the canvas to start again
		ctx.clearRect(0,0,canvas.width, canvas.height);

		// Draw the vanishing points
		drawPoint(van1.range.value, canvas.height / 2);
		drawPoint(van2.range.value, canvas.height / 2);

		// Draw the horizon line
		drawLine(0, canvas.height / 2, canvas.width, canvas.height / 2);

		// Draw the vertical line
		drawLine(wallx.range.value,400 - whp.range.value,
		         wallx.range.value,400 + parseInt(whn.range.value));
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
