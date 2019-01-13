// facemap.js

// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Create map to store descriptions of pictures
var testMap = new Map();

// Performs label detection on the image file
var i;
for(i = 0; i < 3; i++)
{
client
  .labelDetection('cal'+i.toString()+'.jpg')
  .then(results => {
    const labels = results[0].labelAnnotations;

    // Store each label description into map
    // labels.forEach(label => console.log(i + ": " + label.description));
    labels.forEach(label => 
    {
      // console.log("label.description: " + label.description);
      // console.log("label: " + label);
      // console.log("labels: " + labels);
      if(testMap.has(label.description))
      {
        var count = testMap.get(label.description);
        count++;
        testMap.set(label.description,count);
      }
      else
      {
        testMap.set(label.description,"1");
      }
    });

    // console.log('fun in testMap: ');
    // console.log('fun in testMap: ' + "fun" in testMap);
    // console.log('testMap has fun: ' + testMap.has('fun'));

    

    for (var key of testMap.keys()) {
      console.log(key + ": " + testMap.get(key));
    }

    // for (var key of testMap.keys()) {
    //   console.log(key + testMap.has(key));
    //   console.log(testMap.has(key));
    //   console.log('----------');
    // }
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
}

