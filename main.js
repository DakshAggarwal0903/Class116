nosex=0;
nosey=0;
function preload(){
    x=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    y=ml5.poseNet(video,modelLoaded);
    y.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet is loaded");
}
function gotPoses(result){
if(result.length>0){
    console.log(result);
    nosex=result[0].pose.nose.x;
    nosey=result[0].pose.nose.y;
}
}
function draw(){
    image(video,0,0,300,300);
    //image(x,nosex,nosey,38,30);
    fill(256,0,0);
    stroke(256,0,0);
    circle(nosex,nosey,20);
}
function snapShot(){
    save('FilteredImage.jpg');

}