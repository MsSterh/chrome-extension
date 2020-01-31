require('../images/notification_logo.png')

let showAltEmptyImage = document.getElementById('showAltEmptyImage');
showAltEmptyImage.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript({
      file: './src/popup/showAltEmptyImages.js'
    });
  });
};

let showNotification = document.getElementById('showNotification');
showNotification.onclick = function(element) {
  chrome.notifications.create('', {
    type: 'basic',
    iconUrl: 'images/notification_logo.png',
    title: 'Your notification',
    message: 'Some description'
  }, function(notificationId) {})
}

let showNewtab = document.getElementById('showNewtab');
showNewtab.onclick = function(element) {
  var newURL = "build/index.html";
  chrome.tabs.create({ url: newURL });
}
