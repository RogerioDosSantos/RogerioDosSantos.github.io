---
layout: post
type: blog
subject: "Visual Studio 2013"
title: "Package failed to load on Visual Studio 2013"
category: "development"
image: "post_bug.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

If you face this message:

{% include image.html path="VisualStudio/package_failed_message.png" %}

Open the Visual Studio Command Prompt (C:\Program Files (x86)\Microsoft Visual Studio 12.0\Common7\Tools\Shortcuts\Developer Command Prompt for VS2013) with Administrator rights and execute the following command:

devenv /Setup

This will fix the problem.
