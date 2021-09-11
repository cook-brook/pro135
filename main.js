
    function setup(){
        canvas=createCanvas(380,380);
        canvas.center();

        video = createCapture(VIDEO);
	    video.hide();
    }
function start(){
    console.log("start")
}
function draw(){
    image(video, 0, 0, 600, 500);
    
	fill("#FF0000");
	stroke("#FF0000");
}