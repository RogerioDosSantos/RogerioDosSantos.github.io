---
layout: post
type: "blog"
subject: "Indusoft"
title: "Disable all PopUp messages on Windows CE on Indusoft"
category: "development"
image: "post_indusoft.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

There are some conditions that you would like to disable all PopUp messages that might appear when an error happens while running your application. For example, if you have a device that does not have a monitor a PopUp message will freeze your application since you will not be able to acknowledge it. Another case would be if one of your project requirement is to do not display any error message.

To disable all the PopUp messages on Windows CE you can edit the "{Indusoft Windows CE Installation Directory}\Bin\CEView.ini" file introducing the following entry:


    [OEM]
    BlindDevice=1

When BlindDevice entry is enabled, all Indusoft PopUp messages will not be activated
