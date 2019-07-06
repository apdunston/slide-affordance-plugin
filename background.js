console.log("Hello, background-world!");
let isActive = false;

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
  console.log("whoa!"); 
  isActive = !isActive;
  updateIcon();
  let script = "";
  
  if (isActive) {
    script = "sender.js";
  } else {
    script = "stopSender.js";
  }
  
  browser.tabs.executeScript({
    file: script
  });
  
  callOnActiveTab((tab) => {
    console.log(tab);
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