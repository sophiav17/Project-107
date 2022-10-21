function startClassification()
{
    navigator.mediaDevices.getUserMedia(audio : true);
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nQTEJg14m/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}