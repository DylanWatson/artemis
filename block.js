var listOfUrls = [];
determineUrlsThatShouldBeBlocked();
function determineUrlsThatShouldBeBlocked()
{
  console.log("determining urls...");
  chrome.storage.sync.get({
    facebook: false,
    youtube: false,
    twitter: false,
    instagram: false
  }, function(items) {
    console.log("checking facebook");
    if(items.facebook === true)
    {
      listOfUrls.push("*://www.facebook.com/*");
    }
    if(items.youtube === true)
    {
      listOfUrls.push("*://www.youtube.com/*");
    }
    if(items.twitter === true)
    {
      listOfUrls.push("*://www.twitter.com/*");
    }
    if(items.instagram === true)
    {
      listOfUrls.push("*://www.instagram.com/*");
    }
  });
}

console.log(listOfUrls);

chrome.webRequest.onBeforeRequest.addListener(
    function() {
      console.log("blocking!");
      console.log(listOfUrls);
        return {cancel: true};
    },
    {
        urls: listOfUrls
    },
    ["blocking"]
);
