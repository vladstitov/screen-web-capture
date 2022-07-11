

document.getElementById('BtnInit').onclick = function () {

    chrome.runtime.sendMessage({message: 'Start ', kind:'Init'}, function(response) {

        console.log(' responce ', response);


      });
}