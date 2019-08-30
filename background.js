let isActive = false;



function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log("url", tab.url, "id", tab.id);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({url: "*://docs.google.com/presentation/*"});
querying.then(logTabs, onError);


function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}

function callOnActiveTab(callback) {
  getCurrentWindowTabs().then((tabs) => {
    for (var tab of tabs) {
      if (tab.active) {
        callback(tab, tabs);
      }
    }
  });
} 

browser.browserAction.onClicked.addListener(function() {
  isActive = !isActive;
  updateIcon();
  let script = "";
  
  if (isActive) {
    script = "sender.js";
  } else {
    script = "stopSender.js";
  }

  browser.tabs.query({url: "*://docs.google.com/presentation/*"})
    .then(function(tabs) {
      for (let tab of tabs) {
        browser.tabs.executeScript(tab.id,{
          file: script
        });
      }
    }, onError);
    
  callOnActiveTab((tab) => {
    console.log("Tab:", tab);
  });
});

function updateIcon() {
  browser.browserAction.setIcon({
    path: isActive ? {
      48: "icons/specs48tapped.png",
      128: "icons/specs128tapped.png"
    } : {
      48: "icons/specs48.png",
      128: "icons/specs128.png"
    }
  });
  browser.browserAction.setTitle({
    // Screen readers can see the title
    title: isActive ? 'Deactivate' : 'Activate Slide Affordance!'
  }); 
}