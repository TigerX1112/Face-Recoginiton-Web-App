Webcam.set({
    with: 350,
    height: 300,
    img_format: 'png',
    img_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

console.log("ml5 version: ",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0sJ5fCL63/model.json', modelLoaded);

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='"+data_uri+"'>";
    });
}

function modelLoaded() {
    console.log("Model Loaded!");
}

