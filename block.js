let urlsToBeBlocked = ["*://www.facebook.com/*", "*://www.youtube.com/*", "*://www.youtube.com/*", "*://www.twitter.com/*", "*://www.instagram.com/*"];
chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {redirectUrl: "http://www.google.com"};
    },
    {
        urls:urlsToBeBlocked
    },
    ["blocking"]
);
