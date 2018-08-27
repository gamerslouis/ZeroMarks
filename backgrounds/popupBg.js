chrome.browserAction.onClicked.addListener(()=>{
    tabManagerBgInit();
    sendMessageToActive("updateManager");
});

//var SaveTabsQick = function(tab)
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.command)
        {
            switch(request.command)
            {
                 //for popup page
                 case "SendTabsToQuike":
                 {
                     chrome.tabs.query({currentWindow:true},function(tabs){
                         for(let i = 0;i<tabs.length;i++)
                         {
                             console.log(tabs[i].title +"\t" + tabs[i].url);
                         }
                     });
                     break;
                 }
            }
        }
    }
);

chrome.browserAction.onClicked.addListener(function(tab) {
});