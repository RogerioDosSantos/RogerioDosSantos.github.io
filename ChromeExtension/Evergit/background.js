// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

window.onload = function() {
  ChromeExOAuth.initCallbackPage();
}

//var oauth = ChromeExOAuth.initBackgroundPage({
//    'request_url': <OAuth request URL>,
//    'authorize_url': <OAuth authorize URL>,
//    'access_url': <OAuth access token URL>,
//    'consumer_key': <OAuth consumer key>,
//    'consumer_secret': <OAuth consumer secret>,
//    'scope': <scope of data access, not used by all OAuth providers>,
//    'app_name': <application name, not used by all OAuth providers>
//});

var oauth = ChromeExOAuth.initBackgroundPage({
    'request_url': 'https://www.google.com/accounts/OAuthGetRequestToken',
    'authorize_url': 'https://www.google.com/accounts/OAuthAuthorizeToken',
    'access_url': 'https://www.google.com/accounts/OAuthGetAccessToken',
    'consumer_key': 'anonymous',
    'consumer_secret': 'anonymous',
    'scope': 'https://docs.google.com/feeds/',
    'app_name': 'My Google Docs Extension'
});

var evernote_host_name = "http://sandbox.evernote.com";
var evernote_oauth = ChromeExOAuth.initBackgroundPage({
    'request_url': evernote_host_name + "/oauth",
    'authorize_url': evernote_host_name + "/OAuth.action",
    'access_url': "",
    'consumer_key': "rogerio-9518",
    'consumer_secret': "70a717762009c88f",
    'scope': "HMAC-SHA1",
    'app_name': "Evergit Chrome Extension"
});


