// (function ($){

//   console.log('start test.js');

//   var queryInfo = {
//     active: true,
//     currentWindow: true
//   };

//   chrome.tabs.query(queryInfo, function(tabs) {
//     // chrome.tabs.query invokes the callback with a list of tabs that match the
//     // query. When the popup is opened, there is certainly a window and at least
//     // one tab, so we can safely assume that |tabs| is a non-empty array.
//     // A window can only have one active tab at a time, so the array consists of
//     // exactly one tab.
//     var tab = tabs[0];

//     console.log('tab');
//     console.log(tab);

//     // A tab is a plain object that provides information about the tab.
//     // See https://developer.chrome.com/extensions/tabs#type-Tab
//     var url = tab.url;

//     // tab.url is only available if the "activeTab" permission is declared.
//     // If you want to see the URL of other tabs (e.g. after removing active:true
//     // from |queryInfo|), then the "tabs" permission is required to see their
//     // "url" properties.
//     console.assert(typeof url == 'string', 'tab.url should be a string');

//     //callback(url);

//     var theWindowId = tab.windowId;

//     console.log('theWindowId');
//     console.log(theWindowId);
//     //chrome.windows.get(integer windowId, object getInfo, function callback)
//     chrome.windows.get(theWindowId, function (theWindow){

//       console.log('theWindow');
//       console.log(theWindow);

//       console.log('theWindow.GO');
//       console.log(theWindow.GO);

//     });

//     //chrome.tabs.executeScript(tab.id, {code:'var w = window; console.log("injected javascript"); console.log(w); console.log("plz w.GO"); console.log(w.GO);'});
//     chrome.tabs.executeScript(tab.id, {file: 'injected.js'});


//   });


//  // chrome.tabs.get(YOUR_TAB_ID_HERE, function(tab){
//  //      chrome.windows.get(tab.windowId, function(win){ 
//  //           console.log(win); // THIS IS THE WINDOW OBJECT
//  //      });
//  // });


//   $(document).on('mouseup', function(){
//     console.log('mouse uped!');
//   });

// })(jQuery);