 //link of teachable macine - 

 function Start()
{
   navigator.mediaDevices.getUserMedia({audio:true});
   classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/k-DFmrbRQ/",modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
    
}