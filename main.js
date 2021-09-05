//Create a reference for canvas 
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
carwidth=75;
carheight=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
carY=225;
carX=5;

function add() {
	//upload car, and background images on the canvas.
	background_imagetag=new Image();
background_imagetag.onload=uploadBackground;
background_imagetag.src=background_image;
greencar_imagetag=new Image();
greencar_imagetag.onload=uploadgreencar;
greencar_imagetag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imagetag,0,0, canvas.width,canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imagetag,carX,carY,carwidth,carheight);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	
    if(carY>=0)
    {
        carY=carY-10;
        console.log("when up arrow pressed,x= "+carX+ ",y= "+carY);
        uploadbackground();
		uploadgreencar();
    }
	//Define function to move the car upward
}

function down()
{
	if(carY<=500)
    {
        carY=carY+10;
        console.log("when up arrow pressed,x= "+carX+ ",y= "+carY);
        uploadbackground();
		uploadgreencar();
    }
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
	if(carX>=0)
    {
        carX=carX-10;
        console.log("when up arrow pressed,x= "+carX+ ",y= "+carY);
        uploadbackground();
		uploadgreencar();
    }
}

function right()
{
	if(carX<=700)
    {
        carX=carX+10;
        console.log("when up arrow pressed,x= "+carX+ ",y= "+carY);
        uploadbackground();
		uploadgreencar();
    }
	//Define function to move the car right side
}
