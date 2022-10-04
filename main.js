mustacheX = 0;
mustacheY = 0;
function preload() {
    mustache = loadImage('https://i.postimg.cc/jjTjJWjN/521-5219550-transparent-french-moustache-png-black-moustache-clipart-1.png');
}

function setup()
{
    canvas = createCanvas(450,400);
    canvas.position(400,150);
    video = createCapture(VIDEO);
    video.size(450,400);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log('PoseNet Is Initialised');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        console.log("mustache x =" + results[0].pose.nose.x);
        console.log("mustache y =" + results[0].pose.nose.y);

        console.log(results)
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y;
        console.log("mustache x =" + mustacheX);
        console.log("mustache y =" + mustacheY);
        
    }
}

function draw() 
{
    image(video, 0, 0, 450, 400);
    image(mustache, mustacheX-50, mustacheY, 100, 50);
}

function take_snapshot()
{
    save('MyFilterImage.png');
}