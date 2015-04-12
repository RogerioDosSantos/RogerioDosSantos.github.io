---
layout: post
type: "blog"
subject: "Windows Compact Embedded"
title: "Visual Studio 2008 and Windows Compact Embedded 7 - ATL Update"
category: "development"
image: "post_fix.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

You will not be able to compile your MFC / ATL application if you use Visual Studio 2008 and Windows Compact Embedded 7 SDK.

The problem is described in details on this Microsoft article:

[http://support.microsoft.com/kb/2468183](http://support.microsoft.com/kb/2468183 "Microsoft Support")


Take special attention on the pre-requirements described on the link above and shown below:

[http://support.microsoft.com/kb/2483802](http://support.microsoft.com/kb/2483802 "Microsoft Support")


The solution will be to download and install the ATL update available. This is an update for Visual Studio 2008 SP1 to extend support for Windows Embedded Compact 7. This article describes the procedure needed to proper update and configure your application.

### Procedure

1 - Download and install the pre-requirements from the following link:

[http://www.microsoft.com/en-us/download/details.aspx?id=11935](http://www.microsoft.com/en-us/download/details.aspx?id=11935 "Microsoft Support")


2 - Download the ATL update from the following link:

[http://www.microsoft.com/en-us/download/details.aspx?id=27729](http://www.microsoft.com/en-us/download/details.aspx?id=27729 "Microsoft Support")


3 - Add the following additional include directories in your project (Project Properties >> C/C++ >> General >> Additional Include Directories):

    $(VCInstallDir)ce7\include
    $(VCInstallDir)ce7\atlmfc\include

4 - Add the following additional library directories in your project (Project Properties >> Linker >> General >> Additional Library Directories)

    $(VCInstallDir)ce7\lib
    $(VCInstallDir)ce7\atlmfc\lib

    $(VCInstallDir)ce\lib\armv4i
    $(VCInstallDir)ce\atlmfc\lib\armv4i

5 - Disable the deprecated security warning by adding the following additional macro (Project Properties >> C/C++ >> Preprocessor >> Preprocessor Definitions):

    _CRT_SECURE_NO_WARNINGS


