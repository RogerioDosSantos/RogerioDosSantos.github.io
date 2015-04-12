---
layout: post
type: "blog"
subject: "COM/DCOM"
title: "Memory Leak on OLE Strings"
category: "development"
image: "post_cpp.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

When investigating memory leaks problems that involves OLE Strings (E.x.: BSTR, CComVariant, etc...), be aware that by default Windows caches strings created by SysAllocString and freed by SysFreeString functions to increase the overall COM/DCOM performance. This makes false leaks on memory leaks tools (E.g.: DebugDiag).

To disable the cache of the OLE strings, you can introduce following Environment variable.

OANOCACHE=1

If you are running the tests over a Windows service (E.g.: IIS), be sure you restart the computer for the changes to take effect.

{% include image.html path="Windows/environment_variables_oanocache.png" %}

