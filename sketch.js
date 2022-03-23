let laranjas;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

}

function draw() {

if (mouseY >=height/2) {

	background(0);
	noFill () ;
}
 else {

Fill(230);
 }

	stroke(230);
	strokeWeight(2);
	noFill();
	circle(width / 2, height / 2, height / 4);


}