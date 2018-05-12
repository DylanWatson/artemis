let urlsToBeBlocked = ["*://www.facebook.com/*", "*://www.youtube.com/*", "*://www.youtube.com/*", "*://www.twitter.com/*", "*://www.instagram.com/*"];
chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {redirectUrl: "http://localhost:3000"};
    },
    {
        urls:urlsToBeBlocked
    },
    ["blocking"]
);
