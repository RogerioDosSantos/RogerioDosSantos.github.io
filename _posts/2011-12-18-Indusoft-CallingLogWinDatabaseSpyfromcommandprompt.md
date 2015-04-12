---
layout: post
type: "blog"
subject: "Indusoft"
title: "Calling LogWin / Database Spy from command prompt"
category: "development"
image: "post_indusoft.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

You can call the Remote Logwin and the Remote Database Spy directly from the command prompt. This might be useful to call those tools directly from your application. Calling from the command prompt also provide you the option to inform the TCP/IP address and port that will be used by the Database Spy and LogWin to connect with the TCP/IP Server.

#### LogWin

     LogWinExt.exe /DSIP:{IP address of the TCP/IP Server} /DSPORT:{Port of the TCP/IP Server}

E.g.: LogWinExt.exe /DSIP:127.0.0.1 /DSPORT:1234 - Connects you with the local computer

#### Database Spy

     DatabaseSpyExt.exe /DSIP:{IP address of the TCP/IP Server} /DSPORT:{Port of the TCP/IP Server}

E.g.: DatabaseSpyExt.exe /DSIP:10.168.23.108 /DSPORT:1234 - Connects you with the TCP/IP Server located on the computer 10.168.23.108.

