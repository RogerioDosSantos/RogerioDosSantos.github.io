---
layout: post
type: blog
subject: "VxWorks"
title: "Network access on VxWorks Simulator hosted by a Windows 8 machine"
published: true
category: "development"
image: "post_tools.jpg"
resource_folder: "post/VxWorks"
author: "Rogerio dos Santos"
---

Installation for Windows 8
===

WindRiver does not support Windows 8 for VxWorks 6.9. They have not tested this environment for the simulator. Windows 7, 64-bit, is the latest Windows OS supported by this platform. 

However, within the 6.9 installation should contain a 32-bit and 64-bit WRTAP driver (C:\WindRiver\vxworks-6.9\host\x86-win32\bin\wrtapInstaller.exe or C:\WindRiver\vxworks-6.9\host\x86-win32\bin\x86_64\wrtapInstaller.exe). This driver can be used for the simulator be able to have a TCP/IP communication with your computer.

Below is an image of my network properties after the installation and configuration.

Note: The connection should be Active to get the simulator to work with network, however, if you are not connecting with the VxWorks simulator, you should keep the WRTAP connection disabled, mainly if you are using Windows 8, since it can cause you network problems on your standard network.

{% include image.html path="VxWorks/1.png" %}

The default VxSimnetd and WRTAP drivers should be set to use the same subnet / IP address. To do so, create a configuration file (NDC.txt) into the WindRiver directory (C:\WindRiver) and add the following configuration as shown on the image below: 

Note that the IP Address on the configuration file allow connection from the same network address configured on the WRTAP driver (192.168.200.x). 

{% include image.html path="VxWorks/2.png" %}

Your Remote System configuration, on the Wind River Workbench, should also point to the same network using simnet:

{% include image.html path="VxWorks/3.png" %}

Note: You might need to change the Windows Firewall configuration for your new WRTAP connection to be able to use your local network card. 


Execution
===

Launch the vxsimnetd from a Windriver shell (VxWorks Development Shell) that is opened in Administrator mode.

type: vxsimnetd -f C:\WindRiver\NDC.txt -s

{% include image.html path="VxWorks/4.png" %}

Launch your simulator:

{% include image.html path="VxWorks/5.png" %}

Now you might have the configured address and ping your VxWorks simulator for your computer command prompt.

{% include image.html path="VxWorks/6.png" %}
{% include image.html path="VxWorks/7.png" %}