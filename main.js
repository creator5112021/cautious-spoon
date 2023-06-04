song = ""
leftWristx = 0
leftWristy = 0
rightWristx = 0
rightWristy = 0

function setup(){
    canvas = createCanvas(550,550)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose", gotResults)
}
function modelLoaded() {
    console.log("PoseNet has loaded")
}
function gotResults(results){
    if (results.length >0) {
        console.log(results)

        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        console.log("rightWristx = " +rightWristx+ " rightWristy = " +rightWristy) 

        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("leftWristx = " +leftWristx+ " leftWristy = " +leftWristy) 


    }
}
function preload(){
    song = loadSound("music.mp3");
}
function draw() {
    image(video,0,0,550,550)
}
function play() {
    song.play()
    song.setVolume(1)
    song.rate(1)

}
