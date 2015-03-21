
var background = chrome.extension.getBackgroundPage();

function TestEvernote(button_id) {
    console.log("V03 - This is a message from the button " + button_id);

    var hostName = "http://sandbox.evernote.com";
    var options, oauth;
    options = {
        consumerKey: "rogerio-9518",
        consumerSecret: "70a717762009c88f",
        callbackUrl: "http://rogeriodossantos.github.io/ChromeExtension/Evergit/Test.html",
        signatureMethod: "HMAC-SHA1",
    };
    oauth = OAuth(options);
    oauth.request({'method': 'GET', 'url': hostName + '/oauth',
        'success': function (data) {
            console.log("Evernote Success!");
        },
        'failure': function (data) {
            console.log("Evernote Failed!");
        }
    });
}

function OnClickButton01(mouse_event) {
    console.log(" - Button 01");
    background.oauth.authorize(function () {
        // ... Ready to fetch private data ...
        console.log("Ready to fetch private data");
    });
}

function OnClickButton02(mouse_event) {
    console.log(" - Button 02");
    background.evernote_oauth.authorize(function () {
        // ... Ready to fetch private data ...
        console.log("Ready to fetch private data");
    });
}

//DOM Events - Connection to the Page
document.addEventListener('DOMContentLoaded', function () {
    //document.querySelector('button').addEventListener('click', TestEvernote);
    document.querySelector('.Button01').addEventListener('click', OnClickButton01);
    document.querySelector('.Button02').addEventListener('click', TestEvernote);
});