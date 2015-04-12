---
layout: post
type: "blog"
subject: "COM/DCOM"
title: "Export the interfaces from a TLB file"
category: "development"
image: "post_cpp.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

You can export the functions available on the COM interfaces from a type library (*.tlb file) using the following procedure:

1 - Open the Visual Studio command prompt

2 - Open the OLE/COM Object Viewer by executing the command "oleview"

3 - Then File >> View Type Lib >> inform the type library (*.tlb) file that you want the COM interface (E.g.: c:\foo.tlb)

4 - Now in ITypeLib Viewer, File >> Save As... >> and you can export all 3 files needed in you C++ project (.h, .idl, .c) from there.
