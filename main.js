video="";
status="";
objects=[];


function preload(){


}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    canvas.position(550,250);
    video=createCapture(VIDEO);
    video.hide();

}
function modelLoaded(){
    console.log("model loaded");
    status=true; 
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting video";
    object_name=document.getElementById("input").value;
    
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image(video,0,0,480,380);
    if(status!=""){
        objectDetector.detect(video,gotResults);
        for(i=0;i <objects.length;i++){

            fill("#0000FF");
            percentage=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percentage,objects[i].x,objects[i].y);
            noFill();
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

            if(objects[i].label == object_name){
                video.stop();
                document.getElementById("conform").innerHTML = object_name + " Found";
            synth = window.speechSynthesis;
            utterThis = new SpeechSynthesisUtterance(object_name + "Found");
            synth.speak(utterThis);
          }
          else
          {
            document.getElementById("object_status").innerHTML = object_name + " Not Found";
          }          
         }
      }
}