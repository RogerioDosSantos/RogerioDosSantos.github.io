---
layout: post
type: blog
subject: "Hyper-V"
title: "Getting Network using Legacy Network adapter on Hyper-V"
category: "development"
image: "post_tools.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

Get network on the Hyper-V machine

- Without running the VM right click on your VM and select Settings
- Click in add Hardware them Legacy Network adapter then add button:

{% include image.html path="Hyper-V/legacy_network_addapter_add.png" %}


- Click on the Legacy Network Adapter and on Virtual switch select your network card:

{% include image.html path="Hyper-V/legacy_network_addapter_select.png" %}

- Click on the Regular Network Adapter and press the Remove Button:

{% include image.html path="Hyper-V/legacy_network_addapter_remove.png" %}

- Click in Apply and OK.

Now you can start your VM regularly that the network will be detected by the Operational System.

