---
layout: post
type: "blog"
subject: "Network"
title: "Slow network connection using Windows 7 or later"
category: "development"
image: "post_bug.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

Windows 7 have introduced a new feature, called TCP/IP Auto Tunning, that dynamically changes the TCP/IP package sizing. This improves the speed of the TCP/IP communication.

However, old Windows Servers operational systems, E.g.: Windows 2000, have problems handling the TCP/IP Auto Tunning capability. This makes the network communication between Windows 7 and those old Windows Servers really slow.

Unfortunately the operational systems where this problem might happen, are no longer supported by Microsoft and therefore no solution is available on the Server side. But, you can disable the TCP/IP Auto Tunning capability on the client side by using the command below:

    Auto Tunning Command:
         netsh int tcp set global autotuning=disable


This will increase the communication performance between Windows 7 computer and the oder Windows Servers.

Update: The article above also can be applied for Windows 8.1.
