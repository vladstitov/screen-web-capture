chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request, sender)
    
    sendResponse('OK');
    
});


function senMessage(obj, callBack) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, obj, function(response) {
            if(callBack)callBack(response) 
      });
    });
}