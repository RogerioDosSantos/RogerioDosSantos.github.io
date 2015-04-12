---
layout: post
type: "blog"
subject: "Indusoft"
title: "Watchdog for Indusoft runtime"
category: "development"
image: "post_indusoft.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

The CEServer is able to relaunch an application in case it detects that for some reason the application is not running. This behavior might be utile if you have on critical operations that your application cannot in anyway be stopped.

To enable this functionality edit the CEServer.ini with the following entry:


     [Watchdog]
     Enable = 1
     TimeOut = 600


This will enable Watchdog functionality restarting the CEView and Viewer in case the CEServer identifies that any of the programs are out for more than 600 milliseconds.

