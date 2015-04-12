---
layout: post
type: "blog"
subject: "Raspberry Pi"
title: "LXTerminal Commands on Raspberry Pi"
category: "development"
image: "post_electronic.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

### Configuration

Open the configuration terminal

     sudo raspi-config

Install the Tight VNC Server (For remote desktop)

     sudo apt-get install tightvncserver

Execute the Tight VNC Server

     vncserver

     or with more configuration options

    vncserver :1 -geometry 1600x900 -depth 16 -pixelformat rgb565:

Kill the Tight VNC Server

     vncserver -kill :1

Reboot

     sudo reboot

### Network

Get the network detail (Windows ipconfig equivalent)

     ifconfig
