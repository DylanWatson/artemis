let urlsToBeBlocked = ["*://www.facebook.com/*", "*://www.youtube.com/*", "*://www.youtube.com/*", "*://www.twitter.com/*", "*://www.instagram.com/*"];
let calorieGoalMet = false;
let responseFromArtermis;
let responseFromFitbit;
fetch('http://localhost:4000/api/get/5b03817f58504167ccb0eead')
  .then((response) => response.json())
  .then((responseJson) => {
    responseFromArtermis = responseJson
    console.log(responseFromArtermis)
    if(responseFromArtermis.finished)
    {
      calorieGoalMet = true
    }
  });


if(!calorieGoalMet)
{
  chrome.webRequest.onBeforeRequest.addListener(
  function() {
    fetch('http://localhost:4000/api/get/5b03817f58504167ccb0eead')
      .then((response) => response.json())
      .then((responseJson) => {
        responseFromArtermis = responseJson
        calorieGoalMet = responseFromArtermis.finished
        console.log(responseFromArtermis)
      });
        if(!calorieGoalMet){
        return {redirectUrl: "http://localhost:3000"};
      }
      },
      {
        urls:urlsToBeBlocked
      },
      ["blocking"]
    );
}

function fetchFromFitbit(){
  fetch('https://api.fitbit.com/1/user/-/activities/date/2018-05-14.json', {
   method: 'get',
   headers: new Headers({
     'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyWU1ORkoiLCJhdWQiOiIyMjdHNUwiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3YWN0IiwiZXhwIjoxNTI2NjkwNDA5LCJpYXQiOjE1MjY2MDQwMDl9.N5pyTckhKiQEsxxYw_MWGeChjG5PzcDWkxrUEWQEjeg"
   })
  }).then((response) => response.json())
  .then((responseJson) => {
    responseFromFitbit = responseJson
  })
}
