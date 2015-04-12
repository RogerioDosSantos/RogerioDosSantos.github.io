---
layout: post
type: "blog"
subject: "Raspberry Pi"
title: "Raspberry Pi Operational System Installation Walktrought"
category: "development"
image: "post_knowledge.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

### Prerequisites

- Computer
- Raspberry Pi device
- 4GB SDCard
     Note: The operational system that we will use occupies around 3GB of space.

- [Raspbian Operational system](http://www.raspberrypi.org/downloads "Raspberry Pi - Downloads")
     Note: When downloading, keep the SHA-1 Checksum code
     (E.g.: 99e6b5e6b8cfbf66e34437a74022fcf9744ccb1d)
     This will be used latter to assure that the download file is not corrupted.

- [Win32 Disk Imager](/post/Win32 Disk Imager "Win32 Disk Imager")
- [MD5 & SHA Checksum Utility](http://download.cnet.com/MD5-SHA-Checksum-Utility/3000-2092_4-10911445.html "CNET Download")

### Procedure

- Using the MD5 & SHA Checksum Utility verify if the downloaded Raspbian Operational system is not corrupted.
- Extract the Raspbian Operational system >> Your image file will be available (*.img).
- Extract the Win32 Disk Imager
- Connect the SDCard on your computer
- Execute the Win32 Disk Imager elevated (With administrator rights)
- Select the SDCard Unit:

{% include image.html path="Windows/disk_imager.png" %}


**IMPORTANT**: Be careful to select the right unit where your SDCard is installed. The unit selected will be formated and therefore if you select the wrong unit you might damage your computer.

- Select the Raspbian Operational system image file and press the write button >> Your image will properly written on the SDCard.


{% include image.html path="Windows/disk_imager_write.png" %}


 - Once the SDCard is write, eject the SDCard, connect it on the Raspberry Pi, plug it in your TV or Monitor using the HD output and power it:

{% include image.html path="RaspberryPi/rapberry_pi_board.png" %}


 - Be sure to have your TV properly configured on the proper HDMI input before powering the Raspberry PI, otherwise it might not recognize the HDMI output.

 - On the first Boot you will have a configuration screen. On this screen you can configure the image to use all your SDCard space for the operational system. When you finish with this first configuration, the device will be rebooted.

{% include image.html path="RaspberryPi/boot_config.png" %}

 - When you boot the device for the second time, it will require an user and password. The default user is "pi" and the default password is "raspberry"

 - To start the graphical interface you type "startx"

{% include image.html path="RaspberryPi/tv_desktop.png" %}


You are done!

**Note:** You can access the first boot configuration window on your graphical interface, by opening the "LXTerminal" and typing the

     sudo raspi-config


