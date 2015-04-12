---
layout: post
type: "blog"
subject: "Windows CE"
title: "Windows CE 7 Command Prompt starts with your program"
category: "development"
image: "post_fix.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

When testing a solution compiled using SDKs that were not built with the Windows Compact Embedded 7 platform builder, I could observe that every time the program was executed, a command prompt appears.

### The Solution

Compile the program using a SDK that was created using the Windows Compact Embedded 7 platform builder. I executed the following steps described [here]({{ site.url }}{{ site.baseurl }}ARMv7-Performance "ARMv7 - Performance") to increase the performance when using ARMv7 processors and the command no longer appeared.

