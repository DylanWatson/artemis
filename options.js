// Saves options to chrome.storage
console.log("Loading options...");
function save_options() {
  var facebookSelected = document.getElementById('fb').checked;
  var youtubeSelected = document.getElementById('yt').checked;
  var instagramSelected = document.getElementById('ig').checked;
  var twitterSelected = document.getElementById('tw').checked;
  chrome.storage.sync.set({
    facebook: facebookSelected,
    youtube: youtubeSelected,
    instagram: instagramSelected,
    twitter: twitterSelected
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    facebook: false,
    youtube: false,
    instagram: false,
    twitter: false,
  }, function(items) {
    document.getElementById('fb').checked = items.facebook;
    document.getElementById('yt').checked = items.youtube;
    document.getElementById('ig').checked = items.instagram;
    document.getElementById('tw').checked = items.twitter;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
