status = "";
video = "";
InputValue = "";

function setup(){
    canvas = createCanvas(380,240);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,240);
}
 function Start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Obejcts";
    InputValue = document.getElementById("Object_Input").value;
 }

 function modelLoaded(){
    console.log("Model Loaded!");
    
 }

 