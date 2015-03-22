(function() {
    'use strict';

    function activeOrCreateTab( url, fn ) {
        url = chrome.extension.getURL( url );
        chrome.tabs.query({ url: url }, function( tabs ) {
            if ( tabs.length ) {
                chrome.tabs.update( tabs[0].id, {
                    active: true
                }, fn );
            }
            else {
                chrome.tabs.create({
                    url: url
                }, fn );
            }
        });
    }

    //var evernote_host_name = "http://sandbox.evernote.com";
    //var evernote_oauth = OAuth.initBackgroundPage({
    //    'request_url': evernote_host_name + "/oauth",
    //    'authorize_url': evernote_host_name + "/OAuth.action",
    //    'access_url': "",
    //    'consumer_key': "rogerio-9518",
    //    'consumer_secret': "70a717762009c88f",
    //    'scope': "HMAC-SHA1",
    //    'app_name': "Evergit Chrome Extension"
    //});

    //var evernote_client = new Evernote.Client({
    //    consumerKey: 'rogerio-9518',
    //    consumerSecret: '70a717762009c88f',
    //    sandbox: true
    //});

    //evernote_client.authorize(function () {
    //    noteStore = evernote_client.getNoteStore();
    //    // call noteStore's method to access Evernote API.
    //}, function (error) {
    //    handleEDAMException(error);
    //});

    //OAuth.initBackgroundPage(evernote_client);
    OAuth.initBackgroundPage();

    chrome.browserAction.onClicked.addListener(function( /*info, tab*/ ) {
        activeOrCreateTab( 'index.html' );
    });

    chrome.runtime.onInstalled.addListener(function( /*details*/) {
        //console.log('previousVersion', details.previousVersion);
    });

})();
