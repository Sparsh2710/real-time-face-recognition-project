function preload() {}

function setup() {
    Canvas = createCanvas(200, 200);
    Canvas.position(580, 370);
    Video = createCapture(VIDEO);
    Video.hide();

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZPjZV9yXP/model.json',modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function draw() {
    image(Video, 0, 0, 200, 200); 
    classifier.classify(Video, gotResult);  
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}