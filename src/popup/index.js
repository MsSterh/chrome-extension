let showAltEmptyImage = document.getElementById('showAltEmptyImage');
showAltEmptyImage.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript({
      file: './src/popup/showAltEmptyImages.js'
    });
  });
};
